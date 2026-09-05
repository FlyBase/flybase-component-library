import {ApolloClient, ApolloLink, InMemoryCache, Observable, gql} from '@apollo/client';
import {gal4DetailOptions} from './gal4DetailOptions';

test('GAL4 detail requests preserve same-ID relationship rows without cache normalization', async()=>{
    const query=gql`query RelationshipFixture { alleles { id constructs { id tools { id relType } } } }`;
    const data={alleles:[
        {__typename:'Allele',id:'a',constructs:[{__typename:'Construct',id:'c',tools:[{__typename:'Tool',id:'t',relType:'encodes_tool'}]}]},
        {__typename:'Allele',id:'b',constructs:[{__typename:'Construct',id:'c',tools:[{__typename:'Tool',id:'t',relType:'tagged_with'}]}]},
    ]};
    const cache=new InMemoryCache();
    const client=new ApolloClient({cache,link:new ApolloLink(()=>Observable.of({data}))});
    const result=await client.query({query,...gal4DetailOptions});
    expect(result.data).toEqual(data);
    expect(cache.extract()).toEqual({});
    client.stop();
});
