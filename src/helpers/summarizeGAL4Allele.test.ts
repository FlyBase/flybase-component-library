import {summarizeGAL4Allele} from './summarizeGAL4Allele';
import {FullAlleleFragment} from '../__generated__/graphql';

const tool = (id: string, relType: string) => ({id, symbol:id, relType,toolUses:[{id:`use-${id}`,name:id}]});
const fixture = (): FullAlleleFragment => ({
    id:'FBal0000001', isConstruct:false, propagateTransgenicUses:true,
    tools:[tool('direct','encodes_tool'),tool('region','has_reg_region')],
    toolUses:[{id:'direct-type',name:'direct'}],
    insertions:[{id:'FBti0000001',constructs:[{
        tools:[tool('nested','encodes_tool'),tool('tag','tagged_with')],
        toolUses:[{id:'nested-type',name:'nested'}],
    }]}],
    constructs:[{id:'FBtp0000001',tools:[tool('nested','encodes_tool'),tool('cargo','carries_tool')],
        toolUses:[{id:'construct-type',name:'construct'}]}],
    classes:[],mutagens:[],gene:{id:'FBgn0000001',symbol:'gene'},
});

test('all seven fields preserve direct, insertion and construct ordering and duplicates',()=>{
    const result=summarizeGAL4Allele(fixture());
    expect(result.insertedElementTypes.map(x=>x.id)).toEqual(['direct-type','nested-type','construct-type']);
    expect(result.regRegions.map(x=>x.id)).toEqual(['region']);
    expect(result.encodedTools.map(x=>x?.id)).toEqual(['direct','nested','nested']);
    expect(result.encodedToolUses.map(x=>x.id)).toEqual(['use-direct','use-nested','use-nested']);
    expect(result.taggedWith.map(x=>x.id)).toEqual(['tag']);
    expect(result.tagUses.map(x=>x.id)).toEqual(['use-tag']);
    expect(result.alsoCarries.map(x=>x.id)).toEqual(['cargo']);
});
test('disabled propagation excludes nested values',()=>{
    const result=summarizeGAL4Allele({...fixture(),propagateTransgenicUses:false});
    expect(result.encodedTools.map(x=>x?.id)).toEqual(['direct']);
    expect(result.insertedElementTypes.map(x=>x.id)).toEqual(['direct-type']);
    expect(result.taggedWith).toEqual([]);
    expect(result.alsoCarries).toEqual([]);
    expect(result.encodedToolUses).toEqual([]);
    expect(result.tagUses).toEqual([]);
});
test('null propagation behaves like false, while omitted flag uses original true default',()=>{
    expect(summarizeGAL4Allele({...fixture(),propagateTransgenicUses:null}))
        .toEqual(summarizeGAL4Allele({...fixture(),propagateTransgenicUses:false}));
    expect(summarizeGAL4Allele({...fixture(),propagateTransgenicUses:undefined}))
        .toEqual(summarizeGAL4Allele(fixture()));
});
test('construct allele without encoded tools falls back to gene, including null gene',()=>{
    const allele={...fixture(),isConstruct:true,tools:[],insertions:[],constructs:[]};
    expect(summarizeGAL4Allele(allele).encodedTools).toEqual([allele.gene]);
    expect(summarizeGAL4Allele({...allele,gene:null}).encodedTools).toEqual([null]);
    expect(summarizeGAL4Allele({...allele,isConstruct:false}).encodedTools).toEqual([]);
});
test('derivation does not mutate cached response objects',()=>{
    const allele=fixture();
    const before=JSON.stringify(allele);
    summarizeGAL4Allele(allele);
    expect(JSON.stringify(allele)).toEqual(before);
});
