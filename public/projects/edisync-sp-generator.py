import pandas

data = pandas.read_csv(r'.\TABLEDATA F47X.CSV')
data['alias']=data['field'].str[-4:]

dbenv = 'JDE_PRODUCTION.PRODDTA'

tablelist=data.table.unique()

for table in tablelist:
    
    headerblank=r'----------------------------------------------------------------'
    headerlabel=r'---' + table + r' BELJDEPS STORED PROCEDURE SOURCE FOR EDISYNC'

    print(headerblank)
    print(headerlabel)
    print(headerblank)
    print(headerblank)
    print()
    create = r'CREATE or ALTER PROCEDURE Update' + table + r' AS MERGE ' + dbenv + r'.' + table + r' t USING EDISYNC.dbo.' + table + r' s ON ('
    keystring = ''
    nonkeystring = ''
    fieldstring=''
    fieldtypevalue=''
    nonkeyvaluestring=''
    sourcevalue=''

    print(create)

    fieldlist=data.loc[(data['table']==table)].field.unique().tolist()
    keyfieldlist=data.loc[(data['table']==table) & (data['iskey']==1)].field.unique().tolist()
    nonkeyfieldlist=data.loc[(data['table']==table) & (data['iskey']==0) & (data['is812']==1)].field.unique().tolist()
    nonkeyfieldunmatchedlist=data.loc[(data['table']==table) & (data['iskey']==0) & (data['is812']==0)].field.unique().tolist()
    processedfield=data.loc[(data['table']==table) & (data['alias']=='EDSP')].field.unique().tolist()
    processedfield=processedfield[0].replace('\t', '')

    for keyfield in keyfieldlist[:-1]: # [:-1] to treat all but last to include 'and'
        keypair='t.'+keyfield+'=s.'+keyfield
        #build keystring, except last
        keystring = keystring + keypair +' and '

    #add last key pair to keystring
    keystring = keystring + 't.'+keyfieldlist[-1]+'=s.'+keyfieldlist[-1] # [-1] to treat last to exclude 'and'
    #clean tabs out of field names
    keystring = keystring.replace('\t', '') 

    print(keystring)

    whenmatched=') WHEN MATCHED AND t.' + processedfield + '<>\'Y\' THEN UPDATE SET '
    print(whenmatched)

    for nonkeyfield in nonkeyfieldlist:
        nonkeypair='t.'+nonkeyfield+'=s.'+nonkeyfield
        #build nonkeystring, except last
        nonkeystring = nonkeystring + nonkeypair +', '

    for nonkeyfieldunmatched in nonkeyfieldunmatchedlist:
        fieldtypelist=data.loc[(data['table']==table) & (data['field']==nonkeyfieldunmatched)].datatype.unique()
        for fieldtype in fieldtypelist:
            #fieldtype = {'alpha': 1, 'numeric': 2, 'datetime': 3, 'Fourth': 4}
            if fieldtype=='alpha':
                fieldtypevalue='\'\''
            elif fieldtype=='numeric':
                fieldtypevalue='0'
            else:
                fieldtypevalue=='1900-01-01 00:00:00'
        ####set default falues for non source list based on datatype
        nonkeypair = 't.' + nonkeyfieldunmatched + '=' + fieldtypevalue
        nonkeystring = nonkeystring + nonkeypair +', '
    nonkeystring = nonkeystring.replace('\t', '') 
    print(nonkeystring[:-2])

    print(' WHEN NOT MATCHED THEN INSERT (')

    for field in fieldlist:
        #build fieldstring
        fieldstring = fieldstring + field +', '
    fieldstring = fieldstring.replace('\t', '')
    print(fieldstring[:-2])

    print(') VALUES (')
    fieldstring = ''
    for field in fieldlist:
        is812=data.loc[(data['table']==table) & (data['field']==field)].is812.unique()
        for item in is812:
                if item==1:
                    sourcevalue='s.'+field
                else:
                    fieldtypelist=data.loc[(data['table']==table) & (data['field']==field)].datatype.unique()
                    for fieldtype in fieldtypelist:
                        if fieldtype=='alpha':
                            sourcevalue='\'\''
                        elif fieldtype=='numeric':
                            sourcevalue='0'
                        else:
                            sourcevalue=='1900-01-01 00:00:00'
                fieldstring = fieldstring + sourcevalue +', '
    fieldstring = fieldstring.replace('\t', '')
    print(fieldstring[:-2])
    print(');')
    print()