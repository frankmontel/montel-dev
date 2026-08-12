import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EDI Sync — Frank Montel",
  description:
    "Decoupling an EDI migration from a JD Edwards 8.12 → 9.2 upgrade with a metadata-driven SQL generator.",
};

const tech = ["Python", "pandas", "SQL Server", "T-SQL MERGE", "SSIS", "IBM DB2", "JD Edwards"];

const facts = [
  { label: "Procedures generated", value: "38" },
  { label: "Time to build", value: "2 weeks" },
  { label: "Sales orders via EDI", value: "50%+" },
  { label: "ERP upgrade delay", value: "None" },
];

const generatorCode = `import pandas

data = pandas.read_csv(r'.\\TABLEDATA F47X.CSV')
data['alias'] = data['field'].str[-4:]

dbenv = 'JDE_PRODUCTION.PRODDTA'
tablelist = data.table.unique()

for table in tablelist:
    print(r'CREATE or ALTER PROCEDURE Update' + table +
          r' AS MERGE ' + dbenv + r'.' + table +
          r' t USING EDISYNC.dbo.' + table + r' s ON (')

    fieldlist = data.loc[(data['table'] == table)].field.unique().tolist()
    keyfieldlist = data.loc[(data['table'] == table) &
                            (data['iskey'] == 1)].field.unique().tolist()
    nonkeyfieldlist = data.loc[(data['table'] == table) &
                               (data['iskey'] == 0) &
                               (data['is812'] == 1)].field.unique().tolist()
    nonkeyfieldunmatchedlist = data.loc[(data['table'] == table) &
                                        (data['iskey'] == 0) &
                                        (data['is812'] == 0)].field.unique().tolist()
    processedfield = data.loc[(data['table'] == table) &
                              (data['alias'] == 'EDSP')].field.unique().tolist()[0]

    # join on the key fields
    keystring = ' and '.join('t.' + k + '=s.' + k for k in keyfieldlist)
    print(keystring)

    # only update rows the translator has not already flagged as processed
    print(') WHEN MATCHED AND t.' + processedfield + "<>'Y' THEN UPDATE SET ")

    # 8.12 has the column -> copy it; 9.2-only column -> default by datatype
    ...`;

const sqlSample = `----------------------------------------------------------------
---F4706 BELJDEPS STORED PROCEDURE SOURCE FOR EDISYNC
----------------------------------------------------------------

CREATE or ALTER PROCEDURE UpdateF4706 AS MERGE JDE_PRODUCTION.PRODDTA.F4706 t USING EDISYNC.dbo.F4706 s ON (
t.ZAEKCO=s.ZAEKCO and t.ZAEDOC=s.ZAEDOC and t.ZAEDCT=s.ZAEDCT and t.ZAEDLN=s.ZAEDLN and t.ZAFILE=s.ZAFILE and t.ZAANTY=s.ZAANTY
) WHEN MATCHED AND t.ZAEDSP<>'Y' THEN UPDATE SET
t.ZAEDTY=s.ZAEDTY, t.ZAEDSQ=s.ZAEDSQ, t.ZAEDSP=s.ZAEDSP, t.ZAEDBT=s.ZAEDBT, t.ZADOCO=s.ZADOCO,
t.ZADCTO=s.ZADCTO, t.ZAKCOO=s.ZAKCOO, t.ZAAN8=s.ZAAN8, t.ZAMLNM=s.ZAMLNM, t.ZAADD1=s.ZAADD1,
/* ... 20 more mapped columns ... */ t.ZAGAN8=0
 WHEN NOT MATCHED THEN INSERT (
ZAEDTY, ZAEDSQ, ZAEKCO, ZAEDOC, ZAEDCT, ZAEDLN, ZAEDSP, ZAEDBT, ZAFILE, ZADOCO, /* ... */ ZAGAN8
) VALUES (
s.ZAEDTY, s.ZAEDSQ, s.ZAEKCO, s.ZAEDOC, s.ZAEDCT, s.ZAEDLN, s.ZAEDSP, s.ZAEDBT, s.ZAFILE, s.ZADOCO, /* ... */ 0
);`;

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-4 rounded-xl border border-gray-800 bg-gray-900 p-4 overflow-x-auto text-xs leading-relaxed text-gray-300 font-mono">
      <code>{children}</code>
    </pre>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold mt-14 mb-4">{children}</h2>;
}

export default function EdiSyncPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <Link
        href="/#projects"
        className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        &larr; Back to projects
      </Link>

      <p className="text-sm uppercase tracking-widest text-indigo-400 mt-10 mb-3">Case study</p>
      <h1 className="text-4xl font-bold tracking-tight">EDI Sync</h1>
      <p className="mt-4 text-lg text-gray-300 leading-relaxed">
        A metadata-driven code generator that kept a legacy EDI system in lockstep with a new
        Oracle JD Edwards environment — so a stalled EDI migration could no longer hold the ERP
        upgrade hostage.
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center"
          >
            <dt className="text-xs uppercase tracking-wide text-gray-500">{fact.label}</dt>
            <dd className="text-2xl font-bold mt-1">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <Heading>The problem</Heading>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          At Belwith, I was migrating our Oracle JD Edwards ERP from 8.12 to 9.2 and moving the
          database from IBM DB2 to SQL Server at the same time. The IBM server also hosted our EDI
          architecture, which was being migrated in a parallel project run by a colleague and an
          external consulting group.
        </p>
        <p>
          The two systems were tightly integrated and had to move together to work. My ERP
          migration was on track. The EDI migration was not, and there was no reliable completion
          date — which left my project in limbo. I needed to decouple the two so the upgrade could
          move forward.
        </p>
      </div>

      <Heading>The solution</Heading>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          The EDI translator itself didn&apos;t need to migrate — only the data did. The translator
          could stay on the old server indefinitely as long as its data was replicated into the new
          one.
        </p>
        <p>Writing that replication by hand was a non-starter:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-indigo-400">
          <li>
            Nobody in house fully understood the EDI system, so it wasn&apos;t obvious which tables
            actually mattered.
          </li>
          <li>The field list differed between the old system and the new one.</li>
          <li>The merge/update logic differed between DB2 and SQL Server.</li>
          <li>
            There was no time to hand-write, test, fix, and retest dozens of scripts before the
            cutover date.
          </li>
        </ul>
        <p>
          So instead of writing the scripts, I wrote the thing that writes the scripts. In two
          weeks I built a Python generator that takes metadata for each table in our EDI library —
          field name, datatype, whether it&apos;s a key, whether it exists in 8.12 — and emits a
          complete T-SQL <code className="text-gray-200 font-mono text-sm">MERGE</code> procedure
          per table. Each procedure matches on the key fields, updates rows the translator
          hasn&apos;t already flagged as processed (<code className="text-gray-200 font-mono text-sm">EDSP &lt;&gt; &apos;Y&apos;</code>),
          inserts rows that don&apos;t exist yet, and supplies type-appropriate defaults for
          columns the 8.12 source doesn&apos;t have.
        </p>
        <p>
          That run produced 38 stored procedures. I deployed them on both servers and used SSIS
          (today this would be Fabric Data Factory or similar) to run them on a schedule, keeping
          the two systems in sync.
        </p>
      </div>

      <Heading>Architecture</Heading>
      <div className="rounded-2xl border border-gray-800 bg-white p-4 overflow-hidden">
        <Image
          src="/projects/edi-sync-architecture.png"
          alt="EDI coexistence during the JDE 8.12 to 9.2 and iSeries to SQL Server cutover: trading partners feed the OpenText translator on the legacy IBM i, SSIS captures PRODDTA changes into EDISYNC staging tables, and generated merge procedures load them into PRODDTA on the new SQL Server, with a reverse outbound path."
          width={1845}
          height={928}
          className="w-full h-auto"
        />
      </div>
      <p className="mt-3 text-sm text-gray-500">
        The translator stayed on the iSeries; SSIS bridged the two ERPs on a schedule, and the
        generated procedures handled the staging &rarr; production merge.
      </p>

      <Heading>The generator</Heading>
      <p className="text-gray-300 leading-relaxed">
        The core loop, abridged. Each table&apos;s metadata drives the join keys, the update list,
        and the defaults for unmatched columns.
      </p>
      <CodeBlock>{generatorCode}</CodeBlock>
      <a
        href="/projects/edisync-sp-generator.py"
        className="inline-block mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        View the full generator script &rarr;
      </a>

      <Heading>Generated output</Heading>
      <p className="text-gray-300 leading-relaxed">
        One of the 38 procedures, trimmed for length. The full set ran to roughly 175,000
        characters of SQL.
      </p>
      <CodeBlock>{sqlSample}</CodeBlock>

      <Heading>The result</Heading>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>The JD Edwards migration and upgrade proceeded on schedule.</p>
        <p>
          Our EDI business — more than half of our sales orders, plus dock reports and inventory
          reports for our largest customers — kept processing on the legacy system, with data
          flowing into the new Oracle environment without issue.
        </p>
        <p>
          The EDI project ran for more than another year after that. Without this bridge, we
          couldn&apos;t have delivered the stability and functionality gains of the Oracle upgrade
          to the business on any predictable timeline.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-800">
        <Link
          href="/#projects"
          className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          &larr; Back to projects
        </Link>
      </div>
    </main>
  );
}
