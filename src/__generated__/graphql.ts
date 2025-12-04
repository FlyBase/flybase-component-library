/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Allele = Node & {
  __typename?: 'Allele';
  /** Reads and enables pagination through a set of `AlleleClass`. */
  alleleClassesConnection: AlleleClassesConnection;
  /** Reads and enables pagination through a set of `AlleleMutagen`. */
  alleleMutagensConnection: AlleleMutagensConnection;
  /** Reads and enables pagination through a set of `AlleleStock`. */
  alleleStocksConnection: AlleleStocksConnection;
  /** Reads and enables pagination through a set of `AlleleTransgenicProductClass`. */
  alleleTransgenicProductClassesConnection: AlleleTransgenicProductClassesConnection;
  alsoCarries?: Maybe<Array<Maybe<Tool>>>;
  /** Reads and enables pagination through a set of `AlleleClass`. */
  classes: Array<AlleleClass>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructs: Array<Construct>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsByToolAlleleIdAndConstructId: AlleleConstructsByToolAlleleIdAndConstructIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsByToolAlleleIdAndConstructIdList: Array<Construct>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsByToolUseAlleleIdAndConstructId: AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsByToolUseAlleleIdAndConstructIdList: Array<Construct>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsConnection: ConstructsConnection;
  encodedToolUses?: Maybe<Array<Maybe<ToolUse>>>;
  encodedTools?: Maybe<Array<Maybe<Tool>>>;
  /** Reads a single `Gene` that is related to this `Allele`. */
  gene?: Maybe<Gene>;
  geneId?: Maybe<Scalars['Int']['output']>;
  geneIsRegulatoryRegion?: Maybe<Scalars['Boolean']['output']>;
  /** Reads and enables pagination through a set of `Gene`. */
  genesByInsertionAlleleIdAndGeneId: AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Gene`. */
  genesByInsertionAlleleIdAndGeneIdList: Array<Gene>;
  hasImage?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  insertedElementTypes?: Maybe<Array<Maybe<ToolUse>>>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertions: Array<Insertion>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertionsByConstructAlleleIdAndInsertionId: AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertionsByConstructAlleleIdAndInsertionIdList: Array<Insertion>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertionsConnection: InsertionsConnection;
  isAlleleof?: Maybe<Scalars['Boolean']['output']>;
  isConstruct?: Maybe<Scalars['Boolean']['output']>;
  knownLesion?: Maybe<Scalars['Boolean']['output']>;
  /** Reads and enables pagination through a set of `AlleleMutagen`. */
  mutagens: Array<AlleleMutagen>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  paperCount?: Maybe<Scalars['BigInt']['output']>;
  postgresId: Scalars['Int']['output'];
  propagateTransgenicUses?: Maybe<Scalars['Boolean']['output']>;
  pubCount?: Maybe<Scalars['BigInt']['output']>;
  regRegions?: Maybe<Array<Maybe<Tool>>>;
  /** Reads and enables pagination through a set of `SplitSystemCombinationComponentAllele`. */
  splitSystemCombinationComponentAlleles: Array<SplitSystemCombinationComponentAllele>;
  /** Reads and enables pagination through a set of `SplitSystemCombinationComponentAllele`. */
  splitSystemCombinationComponentAllelesConnection: SplitSystemCombinationComponentAllelesConnection;
  /** Reads and enables pagination through a set of `SplitSystemCombination`. */
  splitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationId: AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdManyToManyConnection;
  /** Reads and enables pagination through a set of `SplitSystemCombination`. */
  splitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdList: Array<SplitSystemCombination>;
  /** Reads and enables pagination through a set of `AlleleStock`. */
  stocks: Array<AlleleStock>;
  stocksCount?: Maybe<Scalars['BigInt']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  tagUses?: Maybe<Array<Maybe<ToolUse>>>;
  taggedWith?: Maybe<Array<Maybe<Tool>>>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUses: Array<ToolUse>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
  /** Reads and enables pagination through a set of `Tool`. */
  tools: Array<Tool>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsByToolUseAlleleIdAndToolId: AlleleToolsByToolUseAlleleIdAndToolIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsByToolUseAlleleIdAndToolIdList: Array<Tool>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsConnection: ToolsConnection;
  /** Reads and enables pagination through a set of `AlleleTransgenicProductClass`. */
  transgenicProductClasses: Array<AlleleTransgenicProductClass>;
};


export type AlleleAlleleClassesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleClassesOrderBy>>;
};


export type AlleleAlleleMutagensConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleMutagenCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleMutagensOrderBy>>;
};


export type AlleleAlleleStocksConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleStockCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleStocksOrderBy>>;
};


export type AlleleAlleleTransgenicProductClassesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleTransgenicProductClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleTransgenicProductClassesOrderBy>>;
};


export type AlleleClassesArgs = {
  condition?: InputMaybe<AlleleClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleClassesOrderBy>>;
};


export type AlleleConstructsArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type AlleleConstructsByToolAlleleIdAndConstructIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type AlleleConstructsByToolAlleleIdAndConstructIdListArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type AlleleConstructsByToolUseAlleleIdAndConstructIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type AlleleConstructsByToolUseAlleleIdAndConstructIdListArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type AlleleConstructsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type AlleleGenesByInsertionAlleleIdAndGeneIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GenesOrderBy>>;
};


export type AlleleGenesByInsertionAlleleIdAndGeneIdListArgs = {
  condition?: InputMaybe<GeneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GenesOrderBy>>;
};


export type AlleleInsertionsArgs = {
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


export type AlleleInsertionsByConstructAlleleIdAndInsertionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


export type AlleleInsertionsByConstructAlleleIdAndInsertionIdListArgs = {
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


export type AlleleInsertionsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


export type AlleleMutagensArgs = {
  condition?: InputMaybe<AlleleMutagenCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleMutagensOrderBy>>;
};


export type AlleleSplitSystemCombinationComponentAllelesArgs = {
  condition?: InputMaybe<SplitSystemCombinationComponentAlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationComponentAllelesOrderBy>>;
};


export type AlleleSplitSystemCombinationComponentAllelesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SplitSystemCombinationComponentAlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationComponentAllelesOrderBy>>;
};


export type AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SplitSystemCombinationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationsOrderBy>>;
};


export type AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdListArgs = {
  condition?: InputMaybe<SplitSystemCombinationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationsOrderBy>>;
};


export type AlleleStocksArgs = {
  condition?: InputMaybe<AlleleStockCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleStocksOrderBy>>;
};


export type AlleleToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


export type AlleleToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


export type AlleleToolsArgs = {
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type AlleleToolsByToolUseAlleleIdAndToolIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type AlleleToolsByToolUseAlleleIdAndToolIdListArgs = {
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type AlleleToolsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type AlleleTransgenicProductClassesArgs = {
  condition?: InputMaybe<AlleleTransgenicProductClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleTransgenicProductClassesOrderBy>>;
};

export type AlleleClass = Node & {
  __typename?: 'AlleleClass';
  /** Reads a single `Allele` that is related to this `AlleleClass`. */
  allele?: Maybe<Allele>;
  alleleId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
};

/**
 * A condition to be used against `AlleleClass` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AlleleClassCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `AlleleClass` values. */
export type AlleleClassesConnection = {
  __typename?: 'AlleleClassesConnection';
  /** A list of edges which contains the `AlleleClass` and cursor to aid in pagination. */
  edges: Array<AlleleClassesEdge>;
  /** A list of `AlleleClass` objects. */
  nodes: Array<AlleleClass>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AlleleClass` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AlleleClass` edge in the connection. */
export type AlleleClassesEdge = {
  __typename?: 'AlleleClassesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AlleleClass` at the end of the edge. */
  node: AlleleClass;
};

/** Methods to use when ordering `AlleleClass`. */
export enum AlleleClassesOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  FbcvIdAsc = 'FBCV_ID_ASC',
  FbcvIdDesc = 'FBCV_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Allele` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AlleleCondition = {
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `geneIsRegulatoryRegion` field. */
  geneIsRegulatoryRegion?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `hasImage` field. */
  hasImage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isAlleleof` field. */
  isAlleleof?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `isConstruct` field. */
  isConstruct?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `knownLesion` field. */
  knownLesion?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `paperCount` field. */
  paperCount?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `propagateTransgenicUses` field. */
  propagateTransgenicUses?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `pubCount` field. */
  pubCount?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `stocksCount` field. */
  stocksCount?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Construct` values, with data from `Tool`. */
export type AlleleConstructsByToolAlleleIdAndConstructIdManyToManyConnection = {
  __typename?: 'AlleleConstructsByToolAlleleIdAndConstructIdManyToManyConnection';
  /** A list of edges which contains the `Construct`, info from the `Tool`, and the cursor to aid in pagination. */
  edges: Array<AlleleConstructsByToolAlleleIdAndConstructIdManyToManyEdge>;
  /** A list of `Construct` objects. */
  nodes: Array<Construct>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Construct` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Construct` edge in the connection, with data from `Tool`. */
export type AlleleConstructsByToolAlleleIdAndConstructIdManyToManyEdge = {
  __typename?: 'AlleleConstructsByToolAlleleIdAndConstructIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Construct` at the end of the edge. */
  node: Construct;
  /** Reads and enables pagination through a set of `Tool`. */
  tools: Array<Tool>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsConnection: ToolsConnection;
};


/** A `Construct` edge in the connection, with data from `Tool`. */
export type AlleleConstructsByToolAlleleIdAndConstructIdManyToManyEdgeToolsArgs = {
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


/** A `Construct` edge in the connection, with data from `Tool`. */
export type AlleleConstructsByToolAlleleIdAndConstructIdManyToManyEdgeToolsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};

/** A connection to a list of `Construct` values, with data from `ToolUse`. */
export type AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyConnection = {
  __typename?: 'AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyConnection';
  /** A list of edges which contains the `Construct`, info from the `ToolUse`, and the cursor to aid in pagination. */
  edges: Array<AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyEdge>;
  /** A list of `Construct` objects. */
  nodes: Array<Construct>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Construct` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Construct` edge in the connection, with data from `ToolUse`. */
export type AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyEdge = {
  __typename?: 'AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Construct` at the end of the edge. */
  node: Construct;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUses: Array<ToolUse>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
};


/** A `Construct` edge in the connection, with data from `ToolUse`. */
export type AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyEdgeToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


/** A `Construct` edge in the connection, with data from `ToolUse`. */
export type AlleleConstructsByToolUseAlleleIdAndConstructIdManyToManyEdgeToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};

export type AlleleDiseaseVariant = Node & {
  __typename?: 'AlleleDiseaseVariant';
  alleleDiseaseVariantId: Scalars['BigInt']['output'];
  comment?: Maybe<Scalars['JSON']['output']>;
  dbxref?: Maybe<Scalars['JSON']['output']>;
  divDesignation?: Maybe<Scalars['String']['output']>;
  divSynonym?: Maybe<Scalars['JSON']['output']>;
  fbalId?: Maybe<Scalars['String']['output']>;
  fbalPubs?: Maybe<Scalars['JSON']['output']>;
  fbalSymbol?: Maybe<Scalars['String']['output']>;
  fbgnId?: Maybe<Scalars['String']['output']>;
  fbgnSymbol?: Maybe<Scalars['String']['output']>;
  fbhhId?: Maybe<Scalars['String']['output']>;
  fbhhSymbol?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  pubs?: Maybe<Scalars['JSON']['output']>;
};

/**
 * A condition to be used against `AlleleDiseaseVariant` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type AlleleDiseaseVariantCondition = {
  /** Checks for equality with the object’s `alleleDiseaseVariantId` field. */
  alleleDiseaseVariantId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `fbalId` field. */
  fbalId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fbgnId` field. */
  fbgnId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fbhhId` field. */
  fbhhId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `AlleleDiseaseVariant` values. */
export type AlleleDiseaseVariantsConnection = {
  __typename?: 'AlleleDiseaseVariantsConnection';
  /** A list of edges which contains the `AlleleDiseaseVariant` and cursor to aid in pagination. */
  edges: Array<AlleleDiseaseVariantsEdge>;
  /** A list of `AlleleDiseaseVariant` objects. */
  nodes: Array<AlleleDiseaseVariant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AlleleDiseaseVariant` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AlleleDiseaseVariant` edge in the connection. */
export type AlleleDiseaseVariantsEdge = {
  __typename?: 'AlleleDiseaseVariantsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AlleleDiseaseVariant` at the end of the edge. */
  node: AlleleDiseaseVariant;
};

/** Methods to use when ordering `AlleleDiseaseVariant`. */
export enum AlleleDiseaseVariantsOrderBy {
  AlleleDiseaseVariantIdAsc = 'ALLELE_DISEASE_VARIANT_ID_ASC',
  AlleleDiseaseVariantIdDesc = 'ALLELE_DISEASE_VARIANT_ID_DESC',
  FbalIdAsc = 'FBAL_ID_ASC',
  FbalIdDesc = 'FBAL_ID_DESC',
  FbgnIdAsc = 'FBGN_ID_ASC',
  FbgnIdDesc = 'FBGN_ID_DESC',
  FbhhIdAsc = 'FBHH_ID_ASC',
  FbhhIdDesc = 'FBHH_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Gene` values, with data from `Insertion`. */
export type AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyConnection = {
  __typename?: 'AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyConnection';
  /** A list of edges which contains the `Gene`, info from the `Insertion`, and the cursor to aid in pagination. */
  edges: Array<AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyEdge>;
  /** A list of `Gene` objects. */
  nodes: Array<Gene>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Gene` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Gene` edge in the connection, with data from `Insertion`. */
export type AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyEdge = {
  __typename?: 'AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertions: Array<Insertion>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertionsConnection: InsertionsConnection;
  /** The `Gene` at the end of the edge. */
  node: Gene;
};


/** A `Gene` edge in the connection, with data from `Insertion`. */
export type AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyEdgeInsertionsArgs = {
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


/** A `Gene` edge in the connection, with data from `Insertion`. */
export type AlleleGenesByInsertionAlleleIdAndGeneIdManyToManyEdgeInsertionsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};

/** A connection to a list of `Insertion` values, with data from `Construct`. */
export type AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyConnection = {
  __typename?: 'AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyConnection';
  /** A list of edges which contains the `Insertion`, info from the `Construct`, and the cursor to aid in pagination. */
  edges: Array<AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyEdge>;
  /** A list of `Insertion` objects. */
  nodes: Array<Insertion>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Insertion` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Insertion` edge in the connection, with data from `Construct`. */
export type AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyEdge = {
  __typename?: 'AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Construct`. */
  constructs: Array<Construct>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsConnection: ConstructsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Insertion` at the end of the edge. */
  node: Insertion;
};


/** A `Insertion` edge in the connection, with data from `Construct`. */
export type AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyEdgeConstructsArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


/** A `Insertion` edge in the connection, with data from `Construct`. */
export type AlleleInsertionsByConstructAlleleIdAndInsertionIdManyToManyEdgeConstructsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};

export type AlleleMutagen = Node & {
  __typename?: 'AlleleMutagen';
  /** Reads a single `Allele` that is related to this `AlleleMutagen`. */
  allele?: Maybe<Allele>;
  alleleId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
};

/**
 * A condition to be used against `AlleleMutagen` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AlleleMutagenCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `AlleleMutagen` values. */
export type AlleleMutagensConnection = {
  __typename?: 'AlleleMutagensConnection';
  /** A list of edges which contains the `AlleleMutagen` and cursor to aid in pagination. */
  edges: Array<AlleleMutagensEdge>;
  /** A list of `AlleleMutagen` objects. */
  nodes: Array<AlleleMutagen>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AlleleMutagen` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AlleleMutagen` edge in the connection. */
export type AlleleMutagensEdge = {
  __typename?: 'AlleleMutagensEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AlleleMutagen` at the end of the edge. */
  node: AlleleMutagen;
};

/** Methods to use when ordering `AlleleMutagen`. */
export enum AlleleMutagensOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  FbcvIdAsc = 'FBCV_ID_ASC',
  FbcvIdDesc = 'FBCV_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `SplitSystemCombination` values, with data from `SplitSystemCombinationComponentAllele`. */
export type AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdManyToManyConnection = {
  __typename?: 'AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdManyToManyConnection';
  /** A list of edges which contains the `SplitSystemCombination`, info from the `SplitSystemCombinationComponentAllele`, and the cursor to aid in pagination. */
  edges: Array<AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdManyToManyEdge>;
  /** A list of `SplitSystemCombination` objects. */
  nodes: Array<SplitSystemCombination>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SplitSystemCombination` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `SplitSystemCombination` edge in the connection, with data from `SplitSystemCombinationComponentAllele`. */
export type AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdManyToManyEdge = {
  __typename?: 'AlleleSplitSystemCombinationsBySplitSystemCombinationComponentAlleleAlleleIdAndSplitSystemCombinationIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `SplitSystemCombination` at the end of the edge. */
  node: SplitSystemCombination;
};

export type AlleleStock = Node & {
  __typename?: 'AlleleStock';
  /** Reads a single `Allele` that is related to this `AlleleStock`. */
  allele?: Maybe<Allele>;
  alleleId?: Maybe<Scalars['Int']['output']>;
  center?: Maybe<Scalars['String']['output']>;
  genotype?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
  stockNumber?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `AlleleStock` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AlleleStockCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `center` field. */
  center?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `genotype` field. */
  genotype?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `stockNumber` field. */
  stockNumber?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `AlleleStock` values. */
export type AlleleStocksConnection = {
  __typename?: 'AlleleStocksConnection';
  /** A list of edges which contains the `AlleleStock` and cursor to aid in pagination. */
  edges: Array<AlleleStocksEdge>;
  /** A list of `AlleleStock` objects. */
  nodes: Array<AlleleStock>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AlleleStock` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AlleleStock` edge in the connection. */
export type AlleleStocksEdge = {
  __typename?: 'AlleleStocksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AlleleStock` at the end of the edge. */
  node: AlleleStock;
};

/** Methods to use when ordering `AlleleStock`. */
export enum AlleleStocksOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  CenterAsc = 'CENTER_ASC',
  CenterDesc = 'CENTER_DESC',
  FbstIdAsc = 'FBST_ID_ASC',
  FbstIdDesc = 'FBST_ID_DESC',
  GenotypeAsc = 'GENOTYPE_ASC',
  GenotypeDesc = 'GENOTYPE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StockNumberAsc = 'STOCK_NUMBER_ASC',
  StockNumberDesc = 'STOCK_NUMBER_DESC'
}

/** A connection to a list of `Tool` values, with data from `ToolUse`. */
export type AlleleToolsByToolUseAlleleIdAndToolIdManyToManyConnection = {
  __typename?: 'AlleleToolsByToolUseAlleleIdAndToolIdManyToManyConnection';
  /** A list of edges which contains the `Tool`, info from the `ToolUse`, and the cursor to aid in pagination. */
  edges: Array<AlleleToolsByToolUseAlleleIdAndToolIdManyToManyEdge>;
  /** A list of `Tool` objects. */
  nodes: Array<Tool>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tool` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Tool` edge in the connection, with data from `ToolUse`. */
export type AlleleToolsByToolUseAlleleIdAndToolIdManyToManyEdge = {
  __typename?: 'AlleleToolsByToolUseAlleleIdAndToolIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Tool` at the end of the edge. */
  node: Tool;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
  /** Reads and enables pagination through a set of `ToolUse`. */
  uses: Array<ToolUse>;
};


/** A `Tool` edge in the connection, with data from `ToolUse`. */
export type AlleleToolsByToolUseAlleleIdAndToolIdManyToManyEdgeToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


/** A `Tool` edge in the connection, with data from `ToolUse`. */
export type AlleleToolsByToolUseAlleleIdAndToolIdManyToManyEdgeUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};

export type AlleleTransgenicProductClass = Node & {
  __typename?: 'AlleleTransgenicProductClass';
  /** Reads a single `Allele` that is related to this `AlleleTransgenicProductClass`. */
  allele?: Maybe<Allele>;
  alleleId: Scalars['Int']['output'];
  id?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  soId: Scalars['String']['output'];
  transgenicProductClass?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `AlleleTransgenicProductClass` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type AlleleTransgenicProductClassCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `soId` field. */
  soId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `transgenicProductClass` field. */
  transgenicProductClass?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `AlleleTransgenicProductClass` values. */
export type AlleleTransgenicProductClassesConnection = {
  __typename?: 'AlleleTransgenicProductClassesConnection';
  /** A list of edges which contains the `AlleleTransgenicProductClass` and cursor to aid in pagination. */
  edges: Array<AlleleTransgenicProductClassesEdge>;
  /** A list of `AlleleTransgenicProductClass` objects. */
  nodes: Array<AlleleTransgenicProductClass>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AlleleTransgenicProductClass` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AlleleTransgenicProductClass` edge in the connection. */
export type AlleleTransgenicProductClassesEdge = {
  __typename?: 'AlleleTransgenicProductClassesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AlleleTransgenicProductClass` at the end of the edge. */
  node: AlleleTransgenicProductClass;
};

/** Methods to use when ordering `AlleleTransgenicProductClass`. */
export enum AlleleTransgenicProductClassesOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SoIdAsc = 'SO_ID_ASC',
  SoIdDesc = 'SO_ID_DESC',
  TransgenicProductClassAsc = 'TRANSGENIC_PRODUCT_CLASS_ASC',
  TransgenicProductClassDesc = 'TRANSGENIC_PRODUCT_CLASS_DESC'
}

/** A connection to a list of `Allele` values. */
export type AllelesConnection = {
  __typename?: 'AllelesConnection';
  /** A list of edges which contains the `Allele` and cursor to aid in pagination. */
  edges: Array<AllelesEdge>;
  /** A list of `Allele` objects. */
  nodes: Array<Allele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allele` edge in the connection. */
export type AllelesEdge = {
  __typename?: 'AllelesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Allele` at the end of the edge. */
  node: Allele;
};

/** Methods to use when ordering `Allele`. */
export enum AllelesOrderBy {
  FbalIdAsc = 'FBAL_ID_ASC',
  FbalIdDesc = 'FBAL_ID_DESC',
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  GeneIsRegulatoryRegionAsc = 'GENE_IS_REGULATORY_REGION_ASC',
  GeneIsRegulatoryRegionDesc = 'GENE_IS_REGULATORY_REGION_DESC',
  HasImageAsc = 'HAS_IMAGE_ASC',
  HasImageDesc = 'HAS_IMAGE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsAlleleofAsc = 'IS_ALLELEOF_ASC',
  IsAlleleofDesc = 'IS_ALLELEOF_DESC',
  IsConstructAsc = 'IS_CONSTRUCT_ASC',
  IsConstructDesc = 'IS_CONSTRUCT_DESC',
  KnownLesionAsc = 'KNOWN_LESION_ASC',
  KnownLesionDesc = 'KNOWN_LESION_DESC',
  Natural = 'NATURAL',
  PaperCountAsc = 'PAPER_COUNT_ASC',
  PaperCountDesc = 'PAPER_COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PropagateTransgenicUsesAsc = 'PROPAGATE_TRANSGENIC_USES_ASC',
  PropagateTransgenicUsesDesc = 'PROPAGATE_TRANSGENIC_USES_DESC',
  PubCountAsc = 'PUB_COUNT_ASC',
  PubCountDesc = 'PUB_COUNT_DESC',
  StocksCountAsc = 'STOCKS_COUNT_ASC',
  StocksCountDesc = 'STOCKS_COUNT_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC'
}

export type Allelev2 = Node & {
  __typename?: 'Allelev2';
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2SByAlleleIdConnection: GeneAllelev2sConnection;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2sByAlleleId: Array<GeneAllelev2>;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneAllelev2AlleleIdAndGeneId: Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneAllelev2AlleleIdAndGeneIdList: Array<Genev2>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nameSgml?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  symbolSgml?: Maybe<Scalars['String']['output']>;
};


export type Allelev2GeneAllelev2SByAlleleIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


export type Allelev2GeneAllelev2sByAlleleIdArgs = {
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


export type Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdListArgs = {
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};

/**
 * A condition to be used against `Allelev2` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type Allelev2Condition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nameSgml` field. */
  nameSgml?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbolSgml` field. */
  symbolSgml?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Genev2` values, with data from `GeneAllelev2`. */
export type Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyConnection = {
  __typename?: 'Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyConnection';
  /** A list of edges which contains the `Genev2`, info from the `GeneAllelev2`, and the cursor to aid in pagination. */
  edges: Array<Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyEdge>;
  /** A list of `Genev2` objects. */
  nodes: Array<Genev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Genev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Genev2` edge in the connection, with data from `GeneAllelev2`. */
export type Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyEdge = {
  __typename?: 'Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2SByGeneIdConnection: GeneAllelev2sConnection;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2sByGeneId: Array<GeneAllelev2>;
  /** The `Genev2` at the end of the edge. */
  node: Genev2;
};


/** A `Genev2` edge in the connection, with data from `GeneAllelev2`. */
export type Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyEdgeGeneAllelev2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


/** A `Genev2` edge in the connection, with data from `GeneAllelev2`. */
export type Allelev2Genev2sByGeneAllelev2AlleleIdAndGeneIdManyToManyEdgeGeneAllelev2sByGeneIdArgs = {
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};

/** A connection to a list of `Allelev2` values. */
export type Allelev2sConnection = {
  __typename?: 'Allelev2sConnection';
  /** A list of edges which contains the `Allelev2` and cursor to aid in pagination. */
  edges: Array<Allelev2sEdge>;
  /** A list of `Allelev2` objects. */
  nodes: Array<Allelev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allelev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allelev2` edge in the connection. */
export type Allelev2sEdge = {
  __typename?: 'Allelev2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Allelev2` at the end of the edge. */
  node: Allelev2;
};

/** Methods to use when ordering `Allelev2`. */
export enum Allelev2sOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSgmlAsc = 'NAME_SGML_ASC',
  NameSgmlDesc = 'NAME_SGML_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  SymbolSgmlAsc = 'SYMBOL_SGML_ASC',
  SymbolSgmlDesc = 'SYMBOL_SGML_DESC'
}

export type AllianceAllele = {
  __typename?: 'AllianceAllele';
  category?: Maybe<Scalars['String']['output']>;
  hasDisease?: Maybe<Scalars['Boolean']['output']>;
  hasPhenotype?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  variants?: Maybe<Array<Maybe<AllianceVariant>>>;
};

export type AllianceCvTerm = {
  __typename?: 'AllianceCVTerm';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type AllianceLocation = {
  __typename?: 'AllianceLocation';
  assembly?: Maybe<Scalars['String']['output']>;
  chromosome?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['Int']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
  strand?: Maybe<Scalars['String']['output']>;
};

export type AllianceVariant = {
  __typename?: 'AllianceVariant';
  consequence?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  genomicReferenceSequence?: Maybe<Scalars['String']['output']>;
  genomicVariantSequence?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<AllianceLocation>;
  name?: Maybe<Scalars['String']['output']>;
  nucleotideChange?: Maybe<Scalars['String']['output']>;
  transcriptList?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variantType?: Maybe<AllianceCvTerm>;
};

export type AllianceVariantFilters = {
  id?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Array<InputMaybe<AllianceVariantParameters>>>;
};

export type AllianceVariantParameters = {
  filter_variantConsequence?: InputMaybe<Scalars['String']['input']>;
  filter_variantType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type AllianceVariantsByAllele = {
  filter_variantConsequence?: InputMaybe<Scalars['String']['input']>;
  filter_variantType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type AllianceVariantsByGene = {
  asc?: InputMaybe<Scalars['String']['input']>;
  filter_disease?: InputMaybe<Scalars['String']['input']>;
  filter_phenotype?: InputMaybe<Scalars['String']['input']>;
  filter_source?: InputMaybe<Scalars['String']['input']>;
  filter_symbol?: InputMaybe<Scalars['String']['input']>;
  filter_synonym?: InputMaybe<Scalars['String']['input']>;
  filter_variantConsequence?: InputMaybe<Scalars['String']['input']>;
  filter_variantType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type Construct = Node & {
  __typename?: 'Construct';
  /** Reads a single `Allele` that is related to this `Construct`. */
  allele?: Maybe<Allele>;
  alleleId?: Maybe<Scalars['BigInt']['output']>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByToolConstructIdAndAlleleId: ConstructAllelesByToolConstructIdAndAlleleIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByToolConstructIdAndAlleleIdList: Array<Allele>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByToolUseConstructIdAndAlleleId: ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByToolUseConstructIdAndAlleleIdList: Array<Allele>;
  id?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Insertion` that is related to this `Construct`. */
  insertion?: Maybe<Insertion>;
  insertionId?: Maybe<Scalars['BigInt']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUses: Array<ToolUse>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
  /** Reads and enables pagination through a set of `Tool`. */
  tools: Array<Tool>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsByToolUseConstructIdAndToolId: ConstructToolsByToolUseConstructIdAndToolIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsByToolUseConstructIdAndToolIdList: Array<Tool>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsConnection: ToolsConnection;
};


export type ConstructAllelesByToolConstructIdAndAlleleIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type ConstructAllelesByToolConstructIdAndAlleleIdListArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type ConstructAllelesByToolUseConstructIdAndAlleleIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type ConstructAllelesByToolUseConstructIdAndAlleleIdListArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type ConstructToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


export type ConstructToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


export type ConstructToolsArgs = {
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type ConstructToolsByToolUseConstructIdAndToolIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type ConstructToolsByToolUseConstructIdAndToolIdListArgs = {
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type ConstructToolsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};

/** A connection to a list of `Allele` values, with data from `Tool`. */
export type ConstructAllelesByToolConstructIdAndAlleleIdManyToManyConnection = {
  __typename?: 'ConstructAllelesByToolConstructIdAndAlleleIdManyToManyConnection';
  /** A list of edges which contains the `Allele`, info from the `Tool`, and the cursor to aid in pagination. */
  edges: Array<ConstructAllelesByToolConstructIdAndAlleleIdManyToManyEdge>;
  /** A list of `Allele` objects. */
  nodes: Array<Allele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allele` edge in the connection, with data from `Tool`. */
export type ConstructAllelesByToolConstructIdAndAlleleIdManyToManyEdge = {
  __typename?: 'ConstructAllelesByToolConstructIdAndAlleleIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Allele` at the end of the edge. */
  node: Allele;
  /** Reads and enables pagination through a set of `Tool`. */
  tools: Array<Tool>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsConnection: ToolsConnection;
};


/** A `Allele` edge in the connection, with data from `Tool`. */
export type ConstructAllelesByToolConstructIdAndAlleleIdManyToManyEdgeToolsArgs = {
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


/** A `Allele` edge in the connection, with data from `Tool`. */
export type ConstructAllelesByToolConstructIdAndAlleleIdManyToManyEdgeToolsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};

/** A connection to a list of `Allele` values, with data from `ToolUse`. */
export type ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyConnection = {
  __typename?: 'ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyConnection';
  /** A list of edges which contains the `Allele`, info from the `ToolUse`, and the cursor to aid in pagination. */
  edges: Array<ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyEdge>;
  /** A list of `Allele` objects. */
  nodes: Array<Allele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allele` edge in the connection, with data from `ToolUse`. */
export type ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyEdge = {
  __typename?: 'ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Allele` at the end of the edge. */
  node: Allele;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUses: Array<ToolUse>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
};


/** A `Allele` edge in the connection, with data from `ToolUse`. */
export type ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyEdgeToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


/** A `Allele` edge in the connection, with data from `ToolUse`. */
export type ConstructAllelesByToolUseConstructIdAndAlleleIdManyToManyEdgeToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};

/**
 * A condition to be used against `Construct` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ConstructCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `insertionId` field. */
  insertionId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Tool` values, with data from `ToolUse`. */
export type ConstructToolsByToolUseConstructIdAndToolIdManyToManyConnection = {
  __typename?: 'ConstructToolsByToolUseConstructIdAndToolIdManyToManyConnection';
  /** A list of edges which contains the `Tool`, info from the `ToolUse`, and the cursor to aid in pagination. */
  edges: Array<ConstructToolsByToolUseConstructIdAndToolIdManyToManyEdge>;
  /** A list of `Tool` objects. */
  nodes: Array<Tool>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tool` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Tool` edge in the connection, with data from `ToolUse`. */
export type ConstructToolsByToolUseConstructIdAndToolIdManyToManyEdge = {
  __typename?: 'ConstructToolsByToolUseConstructIdAndToolIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Tool` at the end of the edge. */
  node: Tool;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
  /** Reads and enables pagination through a set of `ToolUse`. */
  uses: Array<ToolUse>;
};


/** A `Tool` edge in the connection, with data from `ToolUse`. */
export type ConstructToolsByToolUseConstructIdAndToolIdManyToManyEdgeToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


/** A `Tool` edge in the connection, with data from `ToolUse`. */
export type ConstructToolsByToolUseConstructIdAndToolIdManyToManyEdgeUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};

/** A connection to a list of `Construct` values. */
export type ConstructsConnection = {
  __typename?: 'ConstructsConnection';
  /** A list of edges which contains the `Construct` and cursor to aid in pagination. */
  edges: Array<ConstructsEdge>;
  /** A list of `Construct` objects. */
  nodes: Array<Construct>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Construct` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Construct` edge in the connection. */
export type ConstructsEdge = {
  __typename?: 'ConstructsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Construct` at the end of the edge. */
  node: Construct;
};

/** Methods to use when ordering `Construct`. */
export enum ConstructsOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  FbtpIdAsc = 'FBTP_ID_ASC',
  FbtpIdDesc = 'FBTP_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InsertionIdAsc = 'INSERTION_ID_ASC',
  InsertionIdDesc = 'INSERTION_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC'
}

export type Diseasev2 = Node & {
  __typename?: 'Diseasev2';
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2SByDiseaseIdConnection: GeneDiseasev2sConnection;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2sByDiseaseId: Array<GeneDiseasev2>;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneDiseasev2DiseaseIdAndGeneId: Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneDiseasev2DiseaseIdAndGeneIdList: Array<Genev2>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};


export type Diseasev2GeneDiseasev2SByDiseaseIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


export type Diseasev2GeneDiseasev2sByDiseaseIdArgs = {
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


export type Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdListArgs = {
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};

/**
 * A condition to be used against `Diseasev2` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type Diseasev2Condition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Genev2` values, with data from `GeneDiseasev2`. */
export type Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyConnection = {
  __typename?: 'Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyConnection';
  /** A list of edges which contains the `Genev2`, info from the `GeneDiseasev2`, and the cursor to aid in pagination. */
  edges: Array<Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyEdge>;
  /** A list of `Genev2` objects. */
  nodes: Array<Genev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Genev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Genev2` edge in the connection, with data from `GeneDiseasev2`. */
export type Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyEdge = {
  __typename?: 'Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2SByGeneIdConnection: GeneDiseasev2sConnection;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2sByGeneId: Array<GeneDiseasev2>;
  /** The `Genev2` at the end of the edge. */
  node: Genev2;
};


/** A `Genev2` edge in the connection, with data from `GeneDiseasev2`. */
export type Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyEdgeGeneDiseasev2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


/** A `Genev2` edge in the connection, with data from `GeneDiseasev2`. */
export type Diseasev2Genev2sByGeneDiseasev2DiseaseIdAndGeneIdManyToManyEdgeGeneDiseasev2sByGeneIdArgs = {
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};

/** A connection to a list of `Diseasev2` values. */
export type Diseasev2sConnection = {
  __typename?: 'Diseasev2sConnection';
  /** A list of edges which contains the `Diseasev2` and cursor to aid in pagination. */
  edges: Array<Diseasev2sEdge>;
  /** A list of `Diseasev2` objects. */
  nodes: Array<Diseasev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Diseasev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Diseasev2` edge in the connection. */
export type Diseasev2sEdge = {
  __typename?: 'Diseasev2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Diseasev2` at the end of the edge. */
  node: Diseasev2;
};

/** Methods to use when ordering `Diseasev2`. */
export enum Diseasev2sOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Enzymev2 = Node & {
  __typename?: 'Enzymev2';
  /** Reads and enables pagination through a set of `GeneEnzymev2`. */
  geneEnzymev2SByEnzymeIdConnection: GeneEnzymev2sConnection;
  /** Reads and enables pagination through a set of `GeneEnzymev2`. */
  geneEnzymev2sByEnzymeId: Array<GeneEnzymev2>;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneEnzymev2EnzymeIdAndGeneId: Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneEnzymev2EnzymeIdAndGeneIdList: Array<Genev2>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};


export type Enzymev2GeneEnzymev2SByEnzymeIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneEnzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneEnzymev2sOrderBy>>;
};


export type Enzymev2GeneEnzymev2sByEnzymeIdArgs = {
  condition?: InputMaybe<GeneEnzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneEnzymev2sOrderBy>>;
};


export type Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdListArgs = {
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};

/**
 * A condition to be used against `Enzymev2` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type Enzymev2Condition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Genev2` values, with data from `GeneEnzymev2`. */
export type Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdManyToManyConnection = {
  __typename?: 'Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdManyToManyConnection';
  /** A list of edges which contains the `Genev2`, info from the `GeneEnzymev2`, and the cursor to aid in pagination. */
  edges: Array<Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdManyToManyEdge>;
  /** A list of `Genev2` objects. */
  nodes: Array<Genev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Genev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Genev2` edge in the connection, with data from `GeneEnzymev2`. */
export type Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdManyToManyEdge = {
  __typename?: 'Enzymev2Genev2sByGeneEnzymev2EnzymeIdAndGeneIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Genev2` at the end of the edge. */
  node: Genev2;
};

/** A connection to a list of `Enzymev2` values. */
export type Enzymev2sConnection = {
  __typename?: 'Enzymev2sConnection';
  /** A list of edges which contains the `Enzymev2` and cursor to aid in pagination. */
  edges: Array<Enzymev2sEdge>;
  /** A list of `Enzymev2` objects. */
  nodes: Array<Enzymev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Enzymev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Enzymev2` edge in the connection. */
export type Enzymev2sEdge = {
  __typename?: 'Enzymev2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Enzymev2` at the end of the edge. */
  node: Enzymev2;
};

/** Methods to use when ordering `Enzymev2`. */
export enum Enzymev2sOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ExpressionSearchInput = {
  anatomy?: InputMaybe<Scalars['String']['input']>;
  anatomyq?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<Scalars['String']['input']>;
  stageq?: InputMaybe<Scalars['String']['input']>;
  subcellular?: InputMaybe<Scalars['String']['input']>;
  subcellularq?: InputMaybe<Scalars['String']['input']>;
};

export type ExpressionToolSearchResult = {
  __typename?: 'ExpressionToolSearchResult';
  expression_terms: Array<Maybe<AllianceCvTerm>>;
  id: Scalars['ID']['output'];
};

export type FeatureCvterm = {
  __typename?: 'FeatureCvterm';
  cvtermId: Scalars['Int']['output'];
  featureCvtermId: Scalars['Int']['output'];
  featureId: Scalars['Int']['output'];
  isNot: Scalars['Boolean']['output'];
  pubId: Scalars['Int']['output'];
};

/** A connection to a list of `FeatureCvterm` values. */
export type FeatureCvtermsConnection = {
  __typename?: 'FeatureCvtermsConnection';
  /** A list of edges which contains the `FeatureCvterm` and cursor to aid in pagination. */
  edges: Array<FeatureCvtermsEdge>;
  /** A list of `FeatureCvterm` objects. */
  nodes: Array<FeatureCvterm>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FeatureCvterm` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `FeatureCvterm` edge in the connection. */
export type FeatureCvtermsEdge = {
  __typename?: 'FeatureCvtermsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `FeatureCvterm` at the end of the edge. */
  node: FeatureCvterm;
};

export type Featureprop = {
  __typename?: 'Featureprop';
  featureId: Scalars['Int']['output'];
  featurepropId: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  typeId: Scalars['Int']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of `Featureprop` values. */
export type FeaturepropsConnection = {
  __typename?: 'FeaturepropsConnection';
  /** A list of edges which contains the `Featureprop` and cursor to aid in pagination. */
  edges: Array<FeaturepropsEdge>;
  /** A list of `Featureprop` objects. */
  nodes: Array<Featureprop>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Featureprop` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Featureprop` edge in the connection. */
export type FeaturepropsEdge = {
  __typename?: 'FeaturepropsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Featureprop` at the end of the edge. */
  node: Featureprop;
};

export type Gene = Node & {
  __typename?: 'Gene';
  /** Reads and enables pagination through a set of `Allele`. */
  alleles: Array<Allele>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByInsertionGeneIdAndAlleleId: GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByInsertionGeneIdAndAlleleIdList: Array<Allele>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesConnection: AllelesConnection;
  dbxrefId?: Maybe<Scalars['Int']['output']>;
  featureId: Scalars['Int']['output'];
  id?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertions: Array<Insertion>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertionsConnection: InsertionsConnection;
  isAnalysis?: Maybe<Scalars['Boolean']['output']>;
  isObsolete?: Maybe<Scalars['Boolean']['output']>;
  md5Checksum?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  organismId?: Maybe<Scalars['Int']['output']>;
  residues?: Maybe<Scalars['String']['output']>;
  seqlen?: Maybe<Scalars['Int']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  timeaccessioned?: Maybe<Scalars['Datetime']['output']>;
  timelastmodified?: Maybe<Scalars['Datetime']['output']>;
  typeId?: Maybe<Scalars['Int']['output']>;
};


export type GeneAllelesArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type GeneAllelesByInsertionGeneIdAndAlleleIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type GeneAllelesByInsertionGeneIdAndAlleleIdListArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type GeneAllelesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type GeneInsertionsArgs = {
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


export type GeneInsertionsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};

/** A connection to a list of `Allele` values, with data from `Insertion`. */
export type GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyConnection = {
  __typename?: 'GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyConnection';
  /** A list of edges which contains the `Allele`, info from the `Insertion`, and the cursor to aid in pagination. */
  edges: Array<GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyEdge>;
  /** A list of `Allele` objects. */
  nodes: Array<Allele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allele` edge in the connection, with data from `Insertion`. */
export type GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyEdge = {
  __typename?: 'GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertions: Array<Insertion>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertionsConnection: InsertionsConnection;
  /** The `Allele` at the end of the edge. */
  node: Allele;
};


/** A `Allele` edge in the connection, with data from `Insertion`. */
export type GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyEdgeInsertionsArgs = {
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


/** A `Allele` edge in the connection, with data from `Insertion`. */
export type GeneAllelesByInsertionGeneIdAndAlleleIdManyToManyEdgeInsertionsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};

export type GeneAllelev2 = Node & {
  __typename?: 'GeneAllelev2';
  /** Reads a single `Allelev2` that is related to this `GeneAllelev2`. */
  allele?: Maybe<Allelev2>;
  alleleId: Scalars['String']['output'];
  /** Reads a single `Genev2` that is related to this `GeneAllelev2`. */
  gene?: Maybe<Genev2>;
  geneId: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  isConstruct: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nameSgml?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  symbolSgml?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `GeneAllelev2` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeneAllelev2Condition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isConstruct` field. */
  isConstruct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of `GeneAllelev2` values. */
export type GeneAllelev2sConnection = {
  __typename?: 'GeneAllelev2sConnection';
  /** A list of edges which contains the `GeneAllelev2` and cursor to aid in pagination. */
  edges: Array<GeneAllelev2sEdge>;
  /** A list of `GeneAllelev2` objects. */
  nodes: Array<GeneAllelev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneAllelev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneAllelev2` edge in the connection. */
export type GeneAllelev2sEdge = {
  __typename?: 'GeneAllelev2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneAllelev2` at the end of the edge. */
  node: GeneAllelev2;
};

/** Methods to use when ordering `GeneAllelev2`. */
export enum GeneAllelev2sOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  IsConstructAsc = 'IS_CONSTRUCT_ASC',
  IsConstructDesc = 'IS_CONSTRUCT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Gene` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GeneCondition = {
  /** Checks for equality with the object’s `featureId` field. */
  featureId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
};

export type GeneDiseasev2 = Node & {
  __typename?: 'GeneDiseasev2';
  /** Reads a single `Diseasev2` that is related to this `GeneDiseasev2`. */
  disease?: Maybe<Diseasev2>;
  diseaseId: Scalars['String']['output'];
  /** Reads a single `Genev2` that is related to this `GeneDiseasev2`. */
  gene?: Maybe<Genev2>;
  geneId: Scalars['String']['output'];
  isExperimental: Scalars['Boolean']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  qualifier: Scalars['String']['output'];
};

/**
 * A condition to be used against `GeneDiseasev2` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeneDiseasev2Condition = {
  /** Checks for equality with the object’s `diseaseId` field. */
  diseaseId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isExperimental` field. */
  isExperimental?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `qualifier` field. */
  qualifier?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `GeneDiseasev2` values. */
export type GeneDiseasev2sConnection = {
  __typename?: 'GeneDiseasev2sConnection';
  /** A list of edges which contains the `GeneDiseasev2` and cursor to aid in pagination. */
  edges: Array<GeneDiseasev2sEdge>;
  /** A list of `GeneDiseasev2` objects. */
  nodes: Array<GeneDiseasev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneDiseasev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneDiseasev2` edge in the connection. */
export type GeneDiseasev2sEdge = {
  __typename?: 'GeneDiseasev2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneDiseasev2` at the end of the edge. */
  node: GeneDiseasev2;
};

/** Methods to use when ordering `GeneDiseasev2`. */
export enum GeneDiseasev2sOrderBy {
  DiseaseIdAsc = 'DISEASE_ID_ASC',
  DiseaseIdDesc = 'DISEASE_ID_DESC',
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  IsExperimentalAsc = 'IS_EXPERIMENTAL_ASC',
  IsExperimentalDesc = 'IS_EXPERIMENTAL_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  QualifierAsc = 'QUALIFIER_ASC',
  QualifierDesc = 'QUALIFIER_DESC'
}

export type GeneEnzymev2 = Node & {
  __typename?: 'GeneEnzymev2';
  /** Reads a single `Enzymev2` that is related to this `GeneEnzymev2`. */
  enzyme?: Maybe<Enzymev2>;
  enzymeId: Scalars['String']['output'];
  /** Reads a single `Genev2` that is related to this `GeneEnzymev2`. */
  gene?: Maybe<Genev2>;
  geneId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/**
 * A condition to be used against `GeneEnzymev2` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeneEnzymev2Condition = {
  /** Checks for equality with the object’s `enzymeId` field. */
  enzymeId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `GeneEnzymev2` values. */
export type GeneEnzymev2sConnection = {
  __typename?: 'GeneEnzymev2sConnection';
  /** A list of edges which contains the `GeneEnzymev2` and cursor to aid in pagination. */
  edges: Array<GeneEnzymev2sEdge>;
  /** A list of `GeneEnzymev2` objects. */
  nodes: Array<GeneEnzymev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneEnzymev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneEnzymev2` edge in the connection. */
export type GeneEnzymev2sEdge = {
  __typename?: 'GeneEnzymev2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneEnzymev2` at the end of the edge. */
  node: GeneEnzymev2;
};

/** Methods to use when ordering `GeneEnzymev2`. */
export enum GeneEnzymev2sOrderBy {
  EnzymeIdAsc = 'ENZYME_ID_ASC',
  EnzymeIdDesc = 'ENZYME_ID_DESC',
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GeneGoMolecularFunctionv2 = Node & {
  __typename?: 'GeneGoMolecularFunctionv2';
  /** Reads a single `Genev2` that is related to this `GeneGoMolecularFunctionv2`. */
  gene?: Maybe<Genev2>;
  geneId: Scalars['String']['output'];
  goId: Scalars['String']['output'];
  goMolecularFunction?: Maybe<Scalars['String']['output']>;
  isExperimental: Scalars['Boolean']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/**
 * A condition to be used against `GeneGoMolecularFunctionv2` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GeneGoMolecularFunctionv2Condition = {
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `goId` field. */
  goId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `goMolecularFunction` field. */
  goMolecularFunction?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isExperimental` field. */
  isExperimental?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of `GeneGoMolecularFunctionv2` values. */
export type GeneGoMolecularFunctionv2sConnection = {
  __typename?: 'GeneGoMolecularFunctionv2sConnection';
  /** A list of edges which contains the `GeneGoMolecularFunctionv2` and cursor to aid in pagination. */
  edges: Array<GeneGoMolecularFunctionv2sEdge>;
  /** A list of `GeneGoMolecularFunctionv2` objects. */
  nodes: Array<GeneGoMolecularFunctionv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGoMolecularFunctionv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGoMolecularFunctionv2` edge in the connection. */
export type GeneGoMolecularFunctionv2sEdge = {
  __typename?: 'GeneGoMolecularFunctionv2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneGoMolecularFunctionv2` at the end of the edge. */
  node: GeneGoMolecularFunctionv2;
};

/** Methods to use when ordering `GeneGoMolecularFunctionv2`. */
export enum GeneGoMolecularFunctionv2sOrderBy {
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  GoIdAsc = 'GO_ID_ASC',
  GoIdDesc = 'GO_ID_DESC',
  GoMolecularFunctionAsc = 'GO_MOLECULAR_FUNCTION_ASC',
  GoMolecularFunctionDesc = 'GO_MOLECULAR_FUNCTION_DESC',
  IsExperimentalAsc = 'IS_EXPERIMENTAL_ASC',
  IsExperimentalDesc = 'IS_EXPERIMENTAL_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GeneGroupMembership = {
  __typename?: 'GeneGroupMembership';
  geneGroups?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  otherPathways?: Maybe<Scalars['JSON']['output']>;
  /** Reads a single `PathwayMember` that is related to this `GeneGroupMembership`. */
  pathwayMember?: Maybe<PathwayMember>;
  pathwayMemberId?: Maybe<Scalars['Int']['output']>;
};

/**
 * A condition to be used against `GeneGroupMembership` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GeneGroupMembershipCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `pathwayMemberId` field. */
  pathwayMemberId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `GeneGroupMembership` values. */
export type GeneGroupMembershipsConnection = {
  __typename?: 'GeneGroupMembershipsConnection';
  /** A list of edges which contains the `GeneGroupMembership` and cursor to aid in pagination. */
  edges: Array<GeneGroupMembershipsEdge>;
  /** A list of `GeneGroupMembership` objects. */
  nodes: Array<GeneGroupMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGroupMembership` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGroupMembership` edge in the connection. */
export type GeneGroupMembershipsEdge = {
  __typename?: 'GeneGroupMembershipsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneGroupMembership` at the end of the edge. */
  node: GeneGroupMembership;
};

/** Methods to use when ordering `GeneGroupMembership`. */
export enum GeneGroupMembershipsOrderBy {
  FbgnIdAsc = 'FBGN_ID_ASC',
  FbgnIdDesc = 'FBGN_ID_DESC',
  Natural = 'NATURAL',
  PathwayMemberIdAsc = 'PATHWAY_MEMBER_ID_ASC',
  PathwayMemberIdDesc = 'PATHWAY_MEMBER_ID_DESC'
}

export type GeneGroupMemberv2 = Node & {
  __typename?: 'GeneGroupMemberv2';
  /** Reads a single `Genev2` that is related to this `GeneGroupMemberv2`. */
  gene?: Maybe<Genev2>;
  /** Reads a single `GeneGroupv2` that is related to this `GeneGroupMemberv2`. */
  geneGroup?: Maybe<GeneGroupv2>;
  geneGroupId?: Maybe<Scalars['String']['output']>;
  geneGroupPubs?: Maybe<Scalars['JSON']['output']>;
  geneId?: Maybe<Scalars['String']['output']>;
  groupMemberLabel?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `GeneGroupv2` that is related to this `GeneGroupMemberv2`. */
  subgroup?: Maybe<GeneGroupv2>;
  subgroupId?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `GeneGroupMemberv2` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeneGroupMemberv2Condition = {
  /** Checks for equality with the object’s `geneGroupId` field. */
  geneGroupId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `groupMemberLabel` field. */
  groupMemberLabel?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `subgroupId` field. */
  subgroupId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `GeneGroupMemberv2` values. */
export type GeneGroupMemberv2sConnection = {
  __typename?: 'GeneGroupMemberv2sConnection';
  /** A list of edges which contains the `GeneGroupMemberv2` and cursor to aid in pagination. */
  edges: Array<GeneGroupMemberv2sEdge>;
  /** A list of `GeneGroupMemberv2` objects. */
  nodes: Array<GeneGroupMemberv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGroupMemberv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGroupMemberv2` edge in the connection. */
export type GeneGroupMemberv2sEdge = {
  __typename?: 'GeneGroupMemberv2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneGroupMemberv2` at the end of the edge. */
  node: GeneGroupMemberv2;
};

/** Methods to use when ordering `GeneGroupMemberv2`. */
export enum GeneGroupMemberv2sOrderBy {
  GeneGroupIdAsc = 'GENE_GROUP_ID_ASC',
  GeneGroupIdDesc = 'GENE_GROUP_ID_DESC',
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  GroupMemberLabelAsc = 'GROUP_MEMBER_LABEL_ASC',
  GroupMemberLabelDesc = 'GROUP_MEMBER_LABEL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubgroupIdAsc = 'SUBGROUP_ID_ASC',
  SubgroupIdDesc = 'SUBGROUP_ID_DESC'
}

export type GeneGroupv2 = Node & {
  __typename?: 'GeneGroupv2';
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SByGeneGroupIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SBySubgroupIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sByGeneGroupId: Array<GeneGroupMemberv2>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sBySubgroupId: Array<GeneGroupMemberv2>;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupId: GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyConnection;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdList: Array<GeneGroupv2>;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupId: GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyConnection;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdList: Array<GeneGroupv2>;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneGroupMemberv2GeneGroupIdAndGeneId: GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdList: Array<Genev2>;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneGroupMemberv2SubgroupIdAndGeneId: GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdList: Array<Genev2>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nameSgml?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  symbolSgml?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  typeId?: Maybe<Scalars['String']['output']>;
};


export type GeneGroupv2GeneGroupMemberv2SByGeneGroupIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type GeneGroupv2GeneGroupMemberv2SBySubgroupIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type GeneGroupv2GeneGroupMemberv2sByGeneGroupIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type GeneGroupv2GeneGroupMemberv2sBySubgroupIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdListArgs = {
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdListArgs = {
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdListArgs = {
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdListArgs = {
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};

/**
 * A condition to be used against `GeneGroupv2` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GeneGroupv2Condition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nameSgml` field. */
  nameSgml?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbolSgml` field. */
  symbolSgml?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `typeId` field. */
  typeId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `GeneGroupv2` values, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyConnection = {
  __typename?: 'GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyConnection';
  /** A list of edges which contains the `GeneGroupv2`, info from the `GeneGroupMemberv2`, and the cursor to aid in pagination. */
  edges: Array<GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyEdge>;
  /** A list of `GeneGroupv2` objects. */
  nodes: Array<GeneGroupv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGroupv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyEdge = {
  __typename?: 'GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SBySubgroupIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sBySubgroupId: Array<GeneGroupMemberv2>;
  /** The `GeneGroupv2` at the end of the edge. */
  node: GeneGroupv2;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyEdgeGeneGroupMemberv2SBySubgroupIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdManyToManyEdgeGeneGroupMemberv2sBySubgroupIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};

/** A connection to a list of `GeneGroupv2` values, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyConnection = {
  __typename?: 'GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyConnection';
  /** A list of edges which contains the `GeneGroupv2`, info from the `GeneGroupMemberv2`, and the cursor to aid in pagination. */
  edges: Array<GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyEdge>;
  /** A list of `GeneGroupv2` objects. */
  nodes: Array<GeneGroupv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGroupv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyEdge = {
  __typename?: 'GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SByGeneGroupIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sByGeneGroupId: Array<GeneGroupMemberv2>;
  /** The `GeneGroupv2` at the end of the edge. */
  node: GeneGroupv2;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyEdgeGeneGroupMemberv2SByGeneGroupIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2GeneGroupv2sByGeneGroupMemberv2SubgroupIdAndGeneGroupIdManyToManyEdgeGeneGroupMemberv2sByGeneGroupIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};

/** A connection to a list of `Genev2` values, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyConnection = {
  __typename?: 'GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyConnection';
  /** A list of edges which contains the `Genev2`, info from the `GeneGroupMemberv2`, and the cursor to aid in pagination. */
  edges: Array<GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyEdge>;
  /** A list of `Genev2` objects. */
  nodes: Array<Genev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Genev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Genev2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyEdge = {
  __typename?: 'GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SByGeneIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sByGeneId: Array<GeneGroupMemberv2>;
  /** The `Genev2` at the end of the edge. */
  node: Genev2;
};


/** A `Genev2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyEdgeGeneGroupMemberv2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


/** A `Genev2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2GeneGroupIdAndGeneIdManyToManyEdgeGeneGroupMemberv2sByGeneIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};

/** A connection to a list of `Genev2` values, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyConnection = {
  __typename?: 'GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyConnection';
  /** A list of edges which contains the `Genev2`, info from the `GeneGroupMemberv2`, and the cursor to aid in pagination. */
  edges: Array<GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyEdge>;
  /** A list of `Genev2` objects. */
  nodes: Array<Genev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Genev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Genev2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyEdge = {
  __typename?: 'GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SByGeneIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sByGeneId: Array<GeneGroupMemberv2>;
  /** The `Genev2` at the end of the edge. */
  node: Genev2;
};


/** A `Genev2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyEdgeGeneGroupMemberv2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


/** A `Genev2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type GeneGroupv2Genev2sByGeneGroupMemberv2SubgroupIdAndGeneIdManyToManyEdgeGeneGroupMemberv2sByGeneIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};

/** A connection to a list of `GeneGroupv2` values. */
export type GeneGroupv2sConnection = {
  __typename?: 'GeneGroupv2sConnection';
  /** A list of edges which contains the `GeneGroupv2` and cursor to aid in pagination. */
  edges: Array<GeneGroupv2sEdge>;
  /** A list of `GeneGroupv2` objects. */
  nodes: Array<GeneGroupv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGroupv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGroupv2` edge in the connection. */
export type GeneGroupv2sEdge = {
  __typename?: 'GeneGroupv2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneGroupv2` at the end of the edge. */
  node: GeneGroupv2;
};

/** Methods to use when ordering `GeneGroupv2`. */
export enum GeneGroupv2sOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSgmlAsc = 'NAME_SGML_ASC',
  NameSgmlDesc = 'NAME_SGML_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  SymbolSgmlAsc = 'SYMBOL_SGML_ASC',
  SymbolSgmlDesc = 'SYMBOL_SGML_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypeIdAsc = 'TYPE_ID_ASC',
  TypeIdDesc = 'TYPE_ID_DESC'
}

export type GeneHumanOrthologv2 = Node & {
  __typename?: 'GeneHumanOrthologv2';
  accession?: Maybe<Scalars['String']['output']>;
  dioptScore?: Maybe<Scalars['Int']['output']>;
  /** Reads a single `Genev2` that is related to this `GeneHumanOrthologv2`. */
  gene?: Maybe<Genev2>;
  geneId: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Orthologv2` that is related to this `GeneHumanOrthologv2`. */
  ortholog?: Maybe<Orthologv2>;
  orthologId: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `GeneHumanOrthologv2` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GeneHumanOrthologv2Condition = {
  /** Checks for equality with the object’s `accession` field. */
  accession?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `dioptScore` field. */
  dioptScore?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `orthologId` field. */
  orthologId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `GeneHumanOrthologv2` values. */
export type GeneHumanOrthologv2sConnection = {
  __typename?: 'GeneHumanOrthologv2sConnection';
  /** A list of edges which contains the `GeneHumanOrthologv2` and cursor to aid in pagination. */
  edges: Array<GeneHumanOrthologv2sEdge>;
  /** A list of `GeneHumanOrthologv2` objects. */
  nodes: Array<GeneHumanOrthologv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneHumanOrthologv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneHumanOrthologv2` edge in the connection. */
export type GeneHumanOrthologv2sEdge = {
  __typename?: 'GeneHumanOrthologv2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeneHumanOrthologv2` at the end of the edge. */
  node: GeneHumanOrthologv2;
};

/** Methods to use when ordering `GeneHumanOrthologv2`. */
export enum GeneHumanOrthologv2sOrderBy {
  AccessionAsc = 'ACCESSION_ASC',
  AccessionDesc = 'ACCESSION_DESC',
  DioptScoreAsc = 'DIOPT_SCORE_ASC',
  DioptScoreDesc = 'DIOPT_SCORE_DESC',
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrthologIdAsc = 'ORTHOLOG_ID_ASC',
  OrthologIdDesc = 'ORTHOLOG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

/** A connection to a list of `Gene` values. */
export type GenesConnection = {
  __typename?: 'GenesConnection';
  /** A list of edges which contains the `Gene` and cursor to aid in pagination. */
  edges: Array<GenesEdge>;
  /** A list of `Gene` objects. */
  nodes: Array<Gene>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Gene` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Gene` edge in the connection. */
export type GenesEdge = {
  __typename?: 'GenesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Gene` at the end of the edge. */
  node: Gene;
};

/** Methods to use when ordering `Gene`. */
export enum GenesOrderBy {
  FeatureIdAsc = 'FEATURE_ID_ASC',
  FeatureIdDesc = 'FEATURE_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UniquenameAsc = 'UNIQUENAME_ASC',
  UniquenameDesc = 'UNIQUENAME_DESC'
}

export type Genev2 = Node & {
  __typename?: 'Genev2';
  aka?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Allelev2`. */
  allelev2sByGeneAllelev2GeneIdAndAlleleId: Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Allelev2`. */
  allelev2sByGeneAllelev2GeneIdAndAlleleIdList: Array<Allelev2>;
  antibody?: Maybe<Scalars['Boolean']['output']>;
  cytogenicMap?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Reads and enables pagination through a set of `Diseasev2`. */
  diseasev2sByGeneDiseasev2GeneIdAndDiseaseId: Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Diseasev2`. */
  diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdList: Array<Diseasev2>;
  /** Reads and enables pagination through a set of `Enzymev2`. */
  enzymev2sByGeneEnzymev2GeneIdAndEnzymeId: Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Enzymev2`. */
  enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdList: Array<Enzymev2>;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2SByGeneIdConnection: GeneAllelev2sConnection;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2sByGeneId: Array<GeneAllelev2>;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2SByGeneIdConnection: GeneDiseasev2sConnection;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2sByGeneId: Array<GeneDiseasev2>;
  /** Reads and enables pagination through a set of `GeneEnzymev2`. */
  geneEnzymev2SByGeneIdConnection: GeneEnzymev2sConnection;
  /** Reads and enables pagination through a set of `GeneEnzymev2`. */
  geneEnzymev2sByGeneId: Array<GeneEnzymev2>;
  /** Reads and enables pagination through a set of `GeneGoMolecularFunctionv2`. */
  geneGoMolecularFunctionv2SByGeneIdConnection: GeneGoMolecularFunctionv2sConnection;
  /** Reads and enables pagination through a set of `GeneGoMolecularFunctionv2`. */
  geneGoMolecularFunctionv2sByGeneId: Array<GeneGoMolecularFunctionv2>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SByGeneIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sByGeneId: Array<GeneGroupMemberv2>;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupId: Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyConnection;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdList: Array<GeneGroupv2>;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupId: Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyConnection;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdList: Array<GeneGroupv2>;
  /** Reads and enables pagination through a set of `GeneHumanOrthologv2`. */
  geneHumanOrthologv2SByGeneIdConnection: GeneHumanOrthologv2sConnection;
  /** Reads and enables pagination through a set of `GeneHumanOrthologv2`. */
  geneHumanOrthologv2sByGeneId: Array<GeneHumanOrthologv2>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nameSgml?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  organismId?: Maybe<Scalars['Int']['output']>;
  /** Reads and enables pagination through a set of `Orthologv2`. */
  orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologId: Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Orthologv2`. */
  orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdList: Array<Orthologv2>;
  pubs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  symbol?: Maybe<Scalars['String']['output']>;
  symbolSgml?: Maybe<Scalars['String']['output']>;
  testisSpecificityIndex?: Maybe<Scalars['String']['output']>;
};


export type Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Allelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Allelev2sOrderBy>>;
};


export type Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdListArgs = {
  condition?: InputMaybe<Allelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Allelev2sOrderBy>>;
};


export type Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Diseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Diseasev2sOrderBy>>;
};


export type Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdListArgs = {
  condition?: InputMaybe<Diseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Diseasev2sOrderBy>>;
};


export type Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Enzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Enzymev2sOrderBy>>;
};


export type Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdListArgs = {
  condition?: InputMaybe<Enzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Enzymev2sOrderBy>>;
};


export type Genev2GeneAllelev2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


export type Genev2GeneAllelev2sByGeneIdArgs = {
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


export type Genev2GeneDiseasev2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


export type Genev2GeneDiseasev2sByGeneIdArgs = {
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


export type Genev2GeneEnzymev2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneEnzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneEnzymev2sOrderBy>>;
};


export type Genev2GeneEnzymev2sByGeneIdArgs = {
  condition?: InputMaybe<GeneEnzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneEnzymev2sOrderBy>>;
};


export type Genev2GeneGoMolecularFunctionv2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGoMolecularFunctionv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGoMolecularFunctionv2sOrderBy>>;
};


export type Genev2GeneGoMolecularFunctionv2sByGeneIdArgs = {
  condition?: InputMaybe<GeneGoMolecularFunctionv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGoMolecularFunctionv2sOrderBy>>;
};


export type Genev2GeneGroupMemberv2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type Genev2GeneGroupMemberv2sByGeneIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdListArgs = {
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdListArgs = {
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type Genev2GeneHumanOrthologv2SByGeneIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneHumanOrthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneHumanOrthologv2sOrderBy>>;
};


export type Genev2GeneHumanOrthologv2sByGeneIdArgs = {
  condition?: InputMaybe<GeneHumanOrthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneHumanOrthologv2sOrderBy>>;
};


export type Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Orthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Orthologv2sOrderBy>>;
};


export type Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdListArgs = {
  condition?: InputMaybe<Orthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Orthologv2sOrderBy>>;
};

/** A connection to a list of `Allelev2` values, with data from `GeneAllelev2`. */
export type Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyConnection = {
  __typename?: 'Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyConnection';
  /** A list of edges which contains the `Allelev2`, info from the `GeneAllelev2`, and the cursor to aid in pagination. */
  edges: Array<Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyEdge>;
  /** A list of `Allelev2` objects. */
  nodes: Array<Allelev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allelev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allelev2` edge in the connection, with data from `GeneAllelev2`. */
export type Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyEdge = {
  __typename?: 'Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2SByAlleleIdConnection: GeneAllelev2sConnection;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2sByAlleleId: Array<GeneAllelev2>;
  /** The `Allelev2` at the end of the edge. */
  node: Allelev2;
};


/** A `Allelev2` edge in the connection, with data from `GeneAllelev2`. */
export type Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyEdgeGeneAllelev2SByAlleleIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


/** A `Allelev2` edge in the connection, with data from `GeneAllelev2`. */
export type Genev2Allelev2sByGeneAllelev2GeneIdAndAlleleIdManyToManyEdgeGeneAllelev2sByAlleleIdArgs = {
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};

/** A condition to be used against `Genev2` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type Genev2Condition = {
  /** Checks for equality with the object’s `aka` field. */
  aka?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `antibody` field. */
  antibody?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nameSgml` field. */
  nameSgml?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `organismId` field. */
  organismId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbolSgml` field. */
  symbolSgml?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `testisSpecificityIndex` field. */
  testisSpecificityIndex?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Diseasev2` values, with data from `GeneDiseasev2`. */
export type Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyConnection = {
  __typename?: 'Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyConnection';
  /** A list of edges which contains the `Diseasev2`, info from the `GeneDiseasev2`, and the cursor to aid in pagination. */
  edges: Array<Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyEdge>;
  /** A list of `Diseasev2` objects. */
  nodes: Array<Diseasev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Diseasev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Diseasev2` edge in the connection, with data from `GeneDiseasev2`. */
export type Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyEdge = {
  __typename?: 'Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2SByDiseaseIdConnection: GeneDiseasev2sConnection;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2sByDiseaseId: Array<GeneDiseasev2>;
  /** The `Diseasev2` at the end of the edge. */
  node: Diseasev2;
};


/** A `Diseasev2` edge in the connection, with data from `GeneDiseasev2`. */
export type Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyEdgeGeneDiseasev2SByDiseaseIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


/** A `Diseasev2` edge in the connection, with data from `GeneDiseasev2`. */
export type Genev2Diseasev2sByGeneDiseasev2GeneIdAndDiseaseIdManyToManyEdgeGeneDiseasev2sByDiseaseIdArgs = {
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};

/** A connection to a list of `Enzymev2` values, with data from `GeneEnzymev2`. */
export type Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdManyToManyConnection = {
  __typename?: 'Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdManyToManyConnection';
  /** A list of edges which contains the `Enzymev2`, info from the `GeneEnzymev2`, and the cursor to aid in pagination. */
  edges: Array<Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdManyToManyEdge>;
  /** A list of `Enzymev2` objects. */
  nodes: Array<Enzymev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Enzymev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Enzymev2` edge in the connection, with data from `GeneEnzymev2`. */
export type Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdManyToManyEdge = {
  __typename?: 'Genev2Enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Enzymev2` at the end of the edge. */
  node: Enzymev2;
};

/** A connection to a list of `GeneGroupv2` values, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyConnection = {
  __typename?: 'Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyConnection';
  /** A list of edges which contains the `GeneGroupv2`, info from the `GeneGroupMemberv2`, and the cursor to aid in pagination. */
  edges: Array<Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyEdge>;
  /** A list of `GeneGroupv2` objects. */
  nodes: Array<GeneGroupv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGroupv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyEdge = {
  __typename?: 'Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SByGeneGroupIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sByGeneGroupId: Array<GeneGroupMemberv2>;
  /** The `GeneGroupv2` at the end of the edge. */
  node: GeneGroupv2;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyEdgeGeneGroupMemberv2SByGeneGroupIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndGeneGroupIdManyToManyEdgeGeneGroupMemberv2sByGeneGroupIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};

/** A connection to a list of `GeneGroupv2` values, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyConnection = {
  __typename?: 'Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyConnection';
  /** A list of edges which contains the `GeneGroupv2`, info from the `GeneGroupMemberv2`, and the cursor to aid in pagination. */
  edges: Array<Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyEdge>;
  /** A list of `GeneGroupv2` objects. */
  nodes: Array<GeneGroupv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeneGroupv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyEdge = {
  __typename?: 'Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2SBySubgroupIdConnection: GeneGroupMemberv2sConnection;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sBySubgroupId: Array<GeneGroupMemberv2>;
  /** The `GeneGroupv2` at the end of the edge. */
  node: GeneGroupv2;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyEdgeGeneGroupMemberv2SBySubgroupIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


/** A `GeneGroupv2` edge in the connection, with data from `GeneGroupMemberv2`. */
export type Genev2GeneGroupv2sByGeneGroupMemberv2GeneIdAndSubgroupIdManyToManyEdgeGeneGroupMemberv2sBySubgroupIdArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};

/** A connection to a list of `Orthologv2` values, with data from `GeneHumanOrthologv2`. */
export type Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdManyToManyConnection = {
  __typename?: 'Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdManyToManyConnection';
  /** A list of edges which contains the `Orthologv2`, info from the `GeneHumanOrthologv2`, and the cursor to aid in pagination. */
  edges: Array<Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdManyToManyEdge>;
  /** A list of `Orthologv2` objects. */
  nodes: Array<Orthologv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Orthologv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Orthologv2` edge in the connection, with data from `GeneHumanOrthologv2`. */
export type Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdManyToManyEdge = {
  __typename?: 'Genev2Orthologv2sByGeneHumanOrthologv2GeneIdAndOrthologIdManyToManyEdge';
  accession?: Maybe<Scalars['String']['output']>;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  dioptScore?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The `Orthologv2` at the end of the edge. */
  node: Orthologv2;
  url?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of `Genev2` values. */
export type Genev2sConnection = {
  __typename?: 'Genev2sConnection';
  /** A list of edges which contains the `Genev2` and cursor to aid in pagination. */
  edges: Array<Genev2sEdge>;
  /** A list of `Genev2` objects. */
  nodes: Array<Genev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Genev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Genev2` edge in the connection. */
export type Genev2sEdge = {
  __typename?: 'Genev2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Genev2` at the end of the edge. */
  node: Genev2;
};

/** Methods to use when ordering `Genev2`. */
export enum Genev2sOrderBy {
  AkaAsc = 'AKA_ASC',
  AkaDesc = 'AKA_DESC',
  AntibodyAsc = 'ANTIBODY_ASC',
  AntibodyDesc = 'ANTIBODY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSgmlAsc = 'NAME_SGML_ASC',
  NameSgmlDesc = 'NAME_SGML_DESC',
  Natural = 'NATURAL',
  OrganismIdAsc = 'ORGANISM_ID_ASC',
  OrganismIdDesc = 'ORGANISM_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  SymbolSgmlAsc = 'SYMBOL_SGML_ASC',
  SymbolSgmlDesc = 'SYMBOL_SGML_DESC',
  TestisSpecificityIndexAsc = 'TESTIS_SPECIFICITY_INDEX_ASC',
  TestisSpecificityIndexDesc = 'TESTIS_SPECIFICITY_INDEX_DESC'
}

export type Grpmemberprop = {
  __typename?: 'Grpmemberprop';
  grpmemberId: Scalars['Int']['output'];
  grpmemberpropId: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  typeId: Scalars['Int']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of `Grpmemberprop` values. */
export type GrpmemberpropsConnection = {
  __typename?: 'GrpmemberpropsConnection';
  /** A list of edges which contains the `Grpmemberprop` and cursor to aid in pagination. */
  edges: Array<GrpmemberpropsEdge>;
  /** A list of `Grpmemberprop` objects. */
  nodes: Array<Grpmemberprop>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Grpmemberprop` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Grpmemberprop` edge in the connection. */
export type GrpmemberpropsEdge = {
  __typename?: 'GrpmemberpropsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Grpmemberprop` at the end of the edge. */
  node: Grpmemberprop;
};

export type Insertion = Node & {
  __typename?: 'Insertion';
  /** Reads a single `Allele` that is related to this `Insertion`. */
  allele?: Maybe<Allele>;
  alleleId?: Maybe<Scalars['BigInt']['output']>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByConstructInsertionIdAndAlleleId: InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByConstructInsertionIdAndAlleleIdList: Array<Allele>;
  alsoCarries?: Maybe<Array<Maybe<Tool>>>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructs: Array<Construct>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsConnection: ConstructsConnection;
  encodedToolUses?: Maybe<Array<Maybe<ToolUse>>>;
  encodedTools?: Maybe<Array<Maybe<Tool>>>;
  /** Reads a single `Gene` that is related to this `Insertion`. */
  gene?: Maybe<Gene>;
  geneId?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  insertedElementTypes?: Maybe<Array<Maybe<ToolUse>>>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
  pubCount?: Maybe<Scalars['BigInt']['output']>;
  regRegions?: Maybe<Array<Maybe<Tool>>>;
  stocksCount?: Maybe<Scalars['BigInt']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  tagUses?: Maybe<Array<Maybe<ToolUse>>>;
  taggedWith?: Maybe<Array<Maybe<Tool>>>;
};


export type InsertionAllelesByConstructInsertionIdAndAlleleIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type InsertionAllelesByConstructInsertionIdAndAlleleIdListArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type InsertionConstructsArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type InsertionConstructsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};

/** A connection to a list of `Allele` values, with data from `Construct`. */
export type InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyConnection = {
  __typename?: 'InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyConnection';
  /** A list of edges which contains the `Allele`, info from the `Construct`, and the cursor to aid in pagination. */
  edges: Array<InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyEdge>;
  /** A list of `Allele` objects. */
  nodes: Array<Allele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allele` edge in the connection, with data from `Construct`. */
export type InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyEdge = {
  __typename?: 'InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Construct`. */
  constructs: Array<Construct>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsConnection: ConstructsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Allele` at the end of the edge. */
  node: Allele;
};


/** A `Allele` edge in the connection, with data from `Construct`. */
export type InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyEdgeConstructsArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


/** A `Allele` edge in the connection, with data from `Construct`. */
export type InsertionAllelesByConstructInsertionIdAndAlleleIdManyToManyEdgeConstructsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};

/**
 * A condition to be used against `Insertion` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InsertionCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `geneId` field. */
  geneId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `pubCount` field. */
  pubCount?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `stocksCount` field. */
  stocksCount?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Insertion` values. */
export type InsertionsConnection = {
  __typename?: 'InsertionsConnection';
  /** A list of edges which contains the `Insertion` and cursor to aid in pagination. */
  edges: Array<InsertionsEdge>;
  /** A list of `Insertion` objects. */
  nodes: Array<Insertion>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Insertion` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Insertion` edge in the connection. */
export type InsertionsEdge = {
  __typename?: 'InsertionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Insertion` at the end of the edge. */
  node: Insertion;
};

/** Methods to use when ordering `Insertion`. */
export enum InsertionsOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  FbtiIdAsc = 'FBTI_ID_ASC',
  FbtiIdDesc = 'FBTI_ID_DESC',
  GeneIdAsc = 'GENE_ID_ASC',
  GeneIdDesc = 'GENE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PubCountAsc = 'PUB_COUNT_ASC',
  PubCountDesc = 'PUB_COUNT_DESC',
  StocksCountAsc = 'STOCKS_COUNT_ASC',
  StocksCountDesc = 'STOCKS_COUNT_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

export type Orthologv2 = Node & {
  __typename?: 'Orthologv2';
  /** Reads and enables pagination through a set of `GeneHumanOrthologv2`. */
  geneHumanOrthologv2SByOrthologIdConnection: GeneHumanOrthologv2sConnection;
  /** Reads and enables pagination through a set of `GeneHumanOrthologv2`. */
  geneHumanOrthologv2sByOrthologId: Array<GeneHumanOrthologv2>;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneHumanOrthologv2OrthologIdAndGeneId: Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdList: Array<Genev2>;
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  organismId?: Maybe<Scalars['Int']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  symbolSgml?: Maybe<Scalars['String']['output']>;
};


export type Orthologv2GeneHumanOrthologv2SByOrthologIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneHumanOrthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneHumanOrthologv2sOrderBy>>;
};


export type Orthologv2GeneHumanOrthologv2sByOrthologIdArgs = {
  condition?: InputMaybe<GeneHumanOrthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneHumanOrthologv2sOrderBy>>;
};


export type Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdListArgs = {
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};

/**
 * A condition to be used against `Orthologv2` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type Orthologv2Condition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `organismId` field. */
  organismId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbolSgml` field. */
  symbolSgml?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Genev2` values, with data from `GeneHumanOrthologv2`. */
export type Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdManyToManyConnection = {
  __typename?: 'Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdManyToManyConnection';
  /** A list of edges which contains the `Genev2`, info from the `GeneHumanOrthologv2`, and the cursor to aid in pagination. */
  edges: Array<Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdManyToManyEdge>;
  /** A list of `Genev2` objects. */
  nodes: Array<Genev2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Genev2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Genev2` edge in the connection, with data from `GeneHumanOrthologv2`. */
export type Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdManyToManyEdge = {
  __typename?: 'Orthologv2Genev2sByGeneHumanOrthologv2OrthologIdAndGeneIdManyToManyEdge';
  accession?: Maybe<Scalars['String']['output']>;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  dioptScore?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The `Genev2` at the end of the edge. */
  node: Genev2;
  url?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of `Orthologv2` values. */
export type Orthologv2sConnection = {
  __typename?: 'Orthologv2sConnection';
  /** A list of edges which contains the `Orthologv2` and cursor to aid in pagination. */
  edges: Array<Orthologv2sEdge>;
  /** A list of `Orthologv2` objects. */
  nodes: Array<Orthologv2>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Orthologv2` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Orthologv2` edge in the connection. */
export type Orthologv2sEdge = {
  __typename?: 'Orthologv2sEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Orthologv2` at the end of the edge. */
  node: Orthologv2;
};

/** Methods to use when ordering `Orthologv2`. */
export enum Orthologv2sOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OrganismIdAsc = 'ORGANISM_ID_ASC',
  OrganismIdDesc = 'ORGANISM_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  SymbolSgmlAsc = 'SYMBOL_SGML_ASC',
  SymbolSgmlDesc = 'SYMBOL_SGML_DESC'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Pathway = Node & {
  __typename?: 'Pathway';
  fullname?: Maybe<Scalars['String']['output']>;
  grpId: Scalars['Int']['output'];
  isAnalysis?: Maybe<Scalars['Boolean']['output']>;
  isObsolete?: Maybe<Scalars['Boolean']['output']>;
  /** Reads and enables pagination through a set of `PathwayMember`. */
  membersByFbggId: Array<PathwayMember>;
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `PathwayMember`. */
  pathwayMembersByFbggIdConnection: PathwayMembersConnection;
  typeId?: Maybe<Scalars['Int']['output']>;
  uniquename?: Maybe<Scalars['String']['output']>;
};


export type PathwayMembersByFbggIdArgs = {
  condition?: InputMaybe<PathwayMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayMembersOrderBy>>;
};


export type PathwayPathwayMembersByFbggIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PathwayMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayMembersOrderBy>>;
};

/** A condition to be used against `Pathway` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PathwayCondition = {
  /** Checks for equality with the object’s `grpId` field. */
  grpId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `uniquename` field. */
  uniquename?: InputMaybe<Scalars['String']['input']>;
};

export type PathwayDisease = {
  __typename?: 'PathwayDisease';
  disease?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isExperimental?: Maybe<Scalars['Boolean']['output']>;
  /** Reads a single `PathwayMember` that is related to this `PathwayDisease`. */
  pathwayMember?: Maybe<PathwayMember>;
  pathwayMemberId?: Maybe<Scalars['Int']['output']>;
};

/**
 * A condition to be used against `PathwayDisease` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PathwayDiseaseCondition = {
  /** Checks for equality with the object’s `isExperimental` field. */
  isExperimental?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `pathwayMemberId` field. */
  pathwayMemberId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `PathwayDisease` values. */
export type PathwayDiseasesConnection = {
  __typename?: 'PathwayDiseasesConnection';
  /** A list of edges which contains the `PathwayDisease` and cursor to aid in pagination. */
  edges: Array<PathwayDiseasesEdge>;
  /** A list of `PathwayDisease` objects. */
  nodes: Array<PathwayDisease>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PathwayDisease` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `PathwayDisease` edge in the connection. */
export type PathwayDiseasesEdge = {
  __typename?: 'PathwayDiseasesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PathwayDisease` at the end of the edge. */
  node: PathwayDisease;
};

/** Methods to use when ordering `PathwayDisease`. */
export enum PathwayDiseasesOrderBy {
  IsExperimentalAsc = 'IS_EXPERIMENTAL_ASC',
  IsExperimentalDesc = 'IS_EXPERIMENTAL_DESC',
  Natural = 'NATURAL',
  PathwayMemberIdAsc = 'PATHWAY_MEMBER_ID_ASC',
  PathwayMemberIdDesc = 'PATHWAY_MEMBER_ID_DESC'
}

export type PathwayMember = Node & {
  __typename?: 'PathwayMember';
  aka?: Maybe<Scalars['String']['output']>;
  antibody?: Maybe<Scalars['Boolean']['output']>;
  classicalAlleles?: Maybe<Scalars['JSON']['output']>;
  constructs?: Maybe<Scalars['JSON']['output']>;
  /** Reads a single `Pathway` that is related to this `PathwayMember`. */
  fbgg?: Maybe<Pathway>;
  fbggId?: Maybe<Scalars['String']['output']>;
  fbgnId?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `GeneGroupMembership`. */
  geneGroupMemberships: Array<GeneGroupMembership>;
  /** Reads and enables pagination through a set of `GeneGroupMembership`. */
  geneGroupMembershipsConnection: GeneGroupMembershipsConnection;
  goMolecularFunction?: Maybe<Scalars['JSON']['output']>;
  groupMemberLabel?: Maybe<Scalars['String']['output']>;
  humanOrthologs?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `PathwayDisease`. */
  pathwayDiseases: Array<PathwayDisease>;
  /** Reads and enables pagination through a set of `PathwayDisease`. */
  pathwayDiseasesConnection: PathwayDiseasesConnection;
  pathwayPubs?: Maybe<Scalars['JSON']['output']>;
  pubs?: Maybe<Scalars['JSON']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};


export type PathwayMemberGeneGroupMembershipsArgs = {
  condition?: InputMaybe<GeneGroupMembershipCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMembershipsOrderBy>>;
};


export type PathwayMemberGeneGroupMembershipsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMembershipCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMembershipsOrderBy>>;
};


export type PathwayMemberPathwayDiseasesArgs = {
  condition?: InputMaybe<PathwayDiseaseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayDiseasesOrderBy>>;
};


export type PathwayMemberPathwayDiseasesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PathwayDiseaseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayDiseasesOrderBy>>;
};

/**
 * A condition to be used against `PathwayMember` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PathwayMemberCondition = {
  /** Checks for equality with the object’s `antibody` field. */
  antibody?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `fbggId` field. */
  fbggId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fbgnId` field. */
  fbgnId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `groupMemberLabel` field. */
  groupMemberLabel?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `PathwayMember` values. */
export type PathwayMembersConnection = {
  __typename?: 'PathwayMembersConnection';
  /** A list of edges which contains the `PathwayMember` and cursor to aid in pagination. */
  edges: Array<PathwayMembersEdge>;
  /** A list of `PathwayMember` objects. */
  nodes: Array<PathwayMember>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PathwayMember` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `PathwayMember` edge in the connection. */
export type PathwayMembersEdge = {
  __typename?: 'PathwayMembersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PathwayMember` at the end of the edge. */
  node: PathwayMember;
};

/** Methods to use when ordering `PathwayMember`. */
export enum PathwayMembersOrderBy {
  AntibodyAsc = 'ANTIBODY_ASC',
  AntibodyDesc = 'ANTIBODY_DESC',
  FbggIdAsc = 'FBGG_ID_ASC',
  FbggIdDesc = 'FBGG_ID_DESC',
  FbgnIdAsc = 'FBGN_ID_ASC',
  FbgnIdDesc = 'FBGN_ID_DESC',
  GroupMemberLabelAsc = 'GROUP_MEMBER_LABEL_ASC',
  GroupMemberLabelDesc = 'GROUP_MEMBER_LABEL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Pathway` values. */
export type PathwaysConnection = {
  __typename?: 'PathwaysConnection';
  /** A list of edges which contains the `Pathway` and cursor to aid in pagination. */
  edges: Array<PathwaysEdge>;
  /** A list of `Pathway` objects. */
  nodes: Array<Pathway>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Pathway` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Pathway` edge in the connection. */
export type PathwaysEdge = {
  __typename?: 'PathwaysEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Pathway` at the end of the edge. */
  node: Pathway;
};

/** Methods to use when ordering `Pathway`. */
export enum PathwaysOrderBy {
  GrpIdAsc = 'GRP_ID_ASC',
  GrpIdDesc = 'GRP_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UniquenameAsc = 'UNIQUENAME_ASC',
  UniquenameDesc = 'UNIQUENAME_DESC'
}

export type Pubprop = {
  __typename?: 'Pubprop';
  pubId: Scalars['Int']['output'];
  pubpropId: Scalars['Int']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  typeId: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

/** A connection to a list of `Pubprop` values. */
export type PubpropsConnection = {
  __typename?: 'PubpropsConnection';
  /** A list of edges which contains the `Pubprop` and cursor to aid in pagination. */
  edges: Array<PubpropsEdge>;
  /** A list of `Pubprop` objects. */
  nodes: Array<Pubprop>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Pubprop` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Pubprop` edge in the connection. */
export type PubpropsEdge = {
  __typename?: 'PubpropsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Pubprop` at the end of the edge. */
  node: Pubprop;
};

export type Query = {
  __typename?: 'Query';
  allele?: Maybe<Allele>;
  /** Reads a single `Allele` using its globally unique `ID`. */
  alleleByNodeId?: Maybe<Allele>;
  alleleClass?: Maybe<AlleleClass>;
  /** Reads a single `AlleleClass` using its globally unique `ID`. */
  alleleClassByNodeId?: Maybe<AlleleClass>;
  /** Reads a set of `AlleleClass`. */
  alleleClasses?: Maybe<Array<AlleleClass>>;
  /** Reads and enables pagination through a set of `AlleleClass`. */
  alleleClassesConnection?: Maybe<AlleleClassesConnection>;
  alleleDiseaseVariant?: Maybe<AlleleDiseaseVariant>;
  /** Reads a single `AlleleDiseaseVariant` using its globally unique `ID`. */
  alleleDiseaseVariantByNodeId?: Maybe<AlleleDiseaseVariant>;
  /** Reads a set of `AlleleDiseaseVariant`. */
  alleleDiseaseVariants?: Maybe<Array<AlleleDiseaseVariant>>;
  /** Reads and enables pagination through a set of `AlleleDiseaseVariant`. */
  alleleDiseaseVariantsConnection?: Maybe<AlleleDiseaseVariantsConnection>;
  alleleMutagen?: Maybe<AlleleMutagen>;
  /** Reads a single `AlleleMutagen` using its globally unique `ID`. */
  alleleMutagenByNodeId?: Maybe<AlleleMutagen>;
  /** Reads a set of `AlleleMutagen`. */
  alleleMutagens?: Maybe<Array<AlleleMutagen>>;
  /** Reads and enables pagination through a set of `AlleleMutagen`. */
  alleleMutagensConnection?: Maybe<AlleleMutagensConnection>;
  alleleStock?: Maybe<AlleleStock>;
  /** Reads a single `AlleleStock` using its globally unique `ID`. */
  alleleStockByNodeId?: Maybe<AlleleStock>;
  /** Reads a set of `AlleleStock`. */
  alleleStocks?: Maybe<Array<AlleleStock>>;
  /** Reads and enables pagination through a set of `AlleleStock`. */
  alleleStocksConnection?: Maybe<AlleleStocksConnection>;
  alleleTransgenicProductClass?: Maybe<AlleleTransgenicProductClass>;
  /** Reads a single `AlleleTransgenicProductClass` using its globally unique `ID`. */
  alleleTransgenicProductClassByNodeId?: Maybe<AlleleTransgenicProductClass>;
  /** Reads a set of `AlleleTransgenicProductClass`. */
  alleleTransgenicProductClasses?: Maybe<Array<AlleleTransgenicProductClass>>;
  /** Reads and enables pagination through a set of `AlleleTransgenicProductClass`. */
  alleleTransgenicProductClassesConnection?: Maybe<AlleleTransgenicProductClassesConnection>;
  /** Reads a set of `Allele`. */
  alleles?: Maybe<Array<Allele>>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByFbal?: Maybe<Array<Allele>>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByFbalConnection?: Maybe<AllelesConnection>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesConnection?: Maybe<AllelesConnection>;
  allelev2?: Maybe<Allelev2>;
  /** Reads a single `Allelev2` using its globally unique `ID`. */
  allelev2ByNodeId?: Maybe<Allelev2>;
  /** Reads a set of `Allelev2`. */
  allelev2s?: Maybe<Array<Allelev2>>;
  /** Reads and enables pagination through a set of `Allelev2`. */
  allelev2sConnection?: Maybe<Allelev2sConnection>;
  construct?: Maybe<Construct>;
  /** Reads a single `Construct` using its globally unique `ID`. */
  constructByNodeId?: Maybe<Construct>;
  /** Reads a set of `Construct`. */
  constructs?: Maybe<Array<Construct>>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsConnection?: Maybe<ConstructsConnection>;
  /** Given a feature.uniquename, this function returns a single current fullname or null if none exists. */
  currentFullname?: Maybe<Scalars['String']['output']>;
  /** Given a feature.uniquename, this function returns a single current symbol or null if none exists. */
  currentSymbol?: Maybe<Scalars['String']['output']>;
  /** Given a feature.uniquename and a synonym type, it retrieves a single synonym that is the current value of the type or null. */
  currentSynonym?: Maybe<Scalars['String']['output']>;
  /** Given a FlyBase ID returns the data class prefix e.g. FBgn0000490 -> FBgn */
  dataClass?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `AlleleDiseaseVariant`. */
  diseaseVariantsByFbgn?: Maybe<Array<AlleleDiseaseVariant>>;
  /** Reads and enables pagination through a set of `AlleleDiseaseVariant`. */
  diseaseVariantsByFbgnConnection?: Maybe<AlleleDiseaseVariantsConnection>;
  /** Reads and enables pagination through a set of `AlleleDiseaseVariant`. */
  diseaseVariantsByFbhh?: Maybe<Array<AlleleDiseaseVariant>>;
  /** Reads and enables pagination through a set of `AlleleDiseaseVariant`. */
  diseaseVariantsByFbhhConnection?: Maybe<AlleleDiseaseVariantsConnection>;
  diseasev2?: Maybe<Diseasev2>;
  /** Reads a single `Diseasev2` using its globally unique `ID`. */
  diseasev2ByNodeId?: Maybe<Diseasev2>;
  /** Reads a set of `Diseasev2`. */
  diseasev2s?: Maybe<Array<Diseasev2>>;
  /** Reads and enables pagination through a set of `Diseasev2`. */
  diseasev2sConnection?: Maybe<Diseasev2sConnection>;
  enzymev2?: Maybe<Enzymev2>;
  /** Reads a single `Enzymev2` using its globally unique `ID`. */
  enzymev2ByNodeId?: Maybe<Enzymev2>;
  /** Reads a set of `Enzymev2`. */
  enzymev2s?: Maybe<Array<Enzymev2>>;
  /** Reads and enables pagination through a set of `Enzymev2`. */
  enzymev2sConnection?: Maybe<Enzymev2sConnection>;
  gene?: Maybe<Gene>;
  geneAllelev2?: Maybe<GeneAllelev2>;
  /** Reads a single `GeneAllelev2` using its globally unique `ID`. */
  geneAllelev2ByNodeId?: Maybe<GeneAllelev2>;
  /** Reads a set of `GeneAllelev2`. */
  geneAllelev2s?: Maybe<Array<GeneAllelev2>>;
  /** Reads and enables pagination through a set of `GeneAllelev2`. */
  geneAllelev2sConnection?: Maybe<GeneAllelev2sConnection>;
  /** Reads a single `Gene` using its globally unique `ID`. */
  geneByNodeId?: Maybe<Gene>;
  geneDiseasev2?: Maybe<GeneDiseasev2>;
  /** Reads a single `GeneDiseasev2` using its globally unique `ID`. */
  geneDiseasev2ByNodeId?: Maybe<GeneDiseasev2>;
  /** Reads a set of `GeneDiseasev2`. */
  geneDiseasev2s?: Maybe<Array<GeneDiseasev2>>;
  /** Reads and enables pagination through a set of `GeneDiseasev2`. */
  geneDiseasev2sConnection?: Maybe<GeneDiseasev2sConnection>;
  geneEnzymev2?: Maybe<GeneEnzymev2>;
  /** Reads a single `GeneEnzymev2` using its globally unique `ID`. */
  geneEnzymev2ByNodeId?: Maybe<GeneEnzymev2>;
  /** Reads a set of `GeneEnzymev2`. */
  geneEnzymev2s?: Maybe<Array<GeneEnzymev2>>;
  /** Reads and enables pagination through a set of `GeneEnzymev2`. */
  geneEnzymev2sConnection?: Maybe<GeneEnzymev2sConnection>;
  geneGoMolecularFunctionv2?: Maybe<GeneGoMolecularFunctionv2>;
  /** Reads a single `GeneGoMolecularFunctionv2` using its globally unique `ID`. */
  geneGoMolecularFunctionv2ByNodeId?: Maybe<GeneGoMolecularFunctionv2>;
  /** Reads a set of `GeneGoMolecularFunctionv2`. */
  geneGoMolecularFunctionv2s?: Maybe<Array<GeneGoMolecularFunctionv2>>;
  /** Reads and enables pagination through a set of `GeneGoMolecularFunctionv2`. */
  geneGoMolecularFunctionv2sConnection?: Maybe<GeneGoMolecularFunctionv2sConnection>;
  /** Reads and enables pagination through a set of `PathwayMember`. */
  geneGroupMembers?: Maybe<Array<PathwayMember>>;
  /** Reads and enables pagination through a set of `PathwayMember`. */
  geneGroupMembersConnection?: Maybe<PathwayMembersConnection>;
  /** Reads a set of `GeneGroupMembership`. */
  geneGroupMemberships?: Maybe<Array<GeneGroupMembership>>;
  /** Reads and enables pagination through a set of `GeneGroupMembership`. */
  geneGroupMembershipsConnection?: Maybe<GeneGroupMembershipsConnection>;
  geneGroupMemberv2?: Maybe<GeneGroupMemberv2>;
  geneGroupMemberv2ByGeneIdAndGeneGroupIdAndSubgroupId?: Maybe<GeneGroupMemberv2>;
  /** Reads a single `GeneGroupMemberv2` using its globally unique `ID`. */
  geneGroupMemberv2ByNodeId?: Maybe<GeneGroupMemberv2>;
  /** Reads a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2s?: Maybe<Array<GeneGroupMemberv2>>;
  /** Reads and enables pagination through a set of `GeneGroupMemberv2`. */
  geneGroupMemberv2sConnection?: Maybe<GeneGroupMemberv2sConnection>;
  geneGroupv2?: Maybe<GeneGroupv2>;
  /** Reads a single `GeneGroupv2` using its globally unique `ID`. */
  geneGroupv2ByNodeId?: Maybe<GeneGroupv2>;
  /** Reads a set of `GeneGroupv2`. */
  geneGroupv2s?: Maybe<Array<GeneGroupv2>>;
  /** Reads and enables pagination through a set of `GeneGroupv2`. */
  geneGroupv2sConnection?: Maybe<GeneGroupv2sConnection>;
  geneHumanOrthologv2?: Maybe<GeneHumanOrthologv2>;
  /** Reads a single `GeneHumanOrthologv2` using its globally unique `ID`. */
  geneHumanOrthologv2ByNodeId?: Maybe<GeneHumanOrthologv2>;
  /** Reads a set of `GeneHumanOrthologv2`. */
  geneHumanOrthologv2s?: Maybe<Array<GeneHumanOrthologv2>>;
  /** Reads and enables pagination through a set of `GeneHumanOrthologv2`. */
  geneHumanOrthologv2sConnection?: Maybe<GeneHumanOrthologv2sConnection>;
  /** Reads a set of `Gene`. */
  genes?: Maybe<Array<Gene>>;
  /** Reads and enables pagination through a set of `Gene`. */
  genesConnection?: Maybe<GenesConnection>;
  genev2?: Maybe<Genev2>;
  /** Reads a single `Genev2` using its globally unique `ID`. */
  genev2ByNodeId?: Maybe<Genev2>;
  /** Reads a set of `Genev2`. */
  genev2s?: Maybe<Array<Genev2>>;
  /** Reads and enables pagination through a set of `Genev2`. */
  genev2sConnection?: Maybe<Genev2sConnection>;
  getAllianceVariantsByAllele?: Maybe<VariantsByAlleleResult>;
  getAllianceVariantsByGene?: Maybe<VariantsByGeneResult>;
  /** Reads and enables pagination through a set of `Featureprop`. */
  getFeatureprop?: Maybe<Array<Featureprop>>;
  /** Reads and enables pagination through a set of `Featureprop`. */
  getFeaturepropConnection?: Maybe<FeaturepropsConnection>;
  /** Reads and enables pagination through a set of `FeatureCvterm`. */
  getGeneOntologyTerms?: Maybe<Array<FeatureCvterm>>;
  /** Reads and enables pagination through a set of `FeatureCvterm`. */
  getGeneOntologyTermsConnection?: Maybe<FeatureCvtermsConnection>;
  /** Reads and enables pagination through a set of `Grpmemberprop`. */
  getGrpmemberprop?: Maybe<Array<Grpmemberprop>>;
  /** Reads and enables pagination through a set of `Grpmemberprop`. */
  getGrpmemberpropConnection?: Maybe<GrpmemberpropsConnection>;
  /** Reads and enables pagination through a set of `Pubprop`. */
  getPubprop?: Maybe<Array<Pubprop>>;
  /** Reads and enables pagination through a set of `Pubprop`. */
  getPubpropConnection?: Maybe<PubpropsConnection>;
  insertion?: Maybe<Insertion>;
  /** Reads a single `Insertion` using its globally unique `ID`. */
  insertionByNodeId?: Maybe<Insertion>;
  /** Reads a set of `Insertion`. */
  insertions?: Maybe<Array<Insertion>>;
  /** Reads and enables pagination through a set of `Insertion`. */
  insertionsConnection?: Maybe<InsertionsConnection>;
  /** Given a Gene Ontology evidence code, returns whether or not it is experimental (true) or prediction (false). */
  isGoEvidenceExperimental?: Maybe<Scalars['Boolean']['output']>;
  isPathway?: Maybe<Scalars['Boolean']['output']>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  orthologv2?: Maybe<Orthologv2>;
  /** Reads a single `Orthologv2` using its globally unique `ID`. */
  orthologv2ByNodeId?: Maybe<Orthologv2>;
  /** Reads a set of `Orthologv2`. */
  orthologv2s?: Maybe<Array<Orthologv2>>;
  /** Reads and enables pagination through a set of `Orthologv2`. */
  orthologv2sConnection?: Maybe<Orthologv2sConnection>;
  pathway?: Maybe<Pathway>;
  /** Reads a single `Pathway` using its globally unique `ID`. */
  pathwayByNodeId?: Maybe<Pathway>;
  /** Reads a set of `PathwayDisease`. */
  pathwayDiseases?: Maybe<Array<PathwayDisease>>;
  /** Reads and enables pagination through a set of `PathwayDisease`. */
  pathwayDiseasesConnection?: Maybe<PathwayDiseasesConnection>;
  pathwayMember?: Maybe<PathwayMember>;
  /** Reads a single `PathwayMember` using its globally unique `ID`. */
  pathwayMemberByNodeId?: Maybe<PathwayMember>;
  /** Reads a set of `PathwayMember`. */
  pathwayMembers?: Maybe<Array<PathwayMember>>;
  /** Reads and enables pagination through a set of `PathwayMember`. */
  pathwayMembersConnection?: Maybe<PathwayMembersConnection>;
  /** Reads a set of `Pathway`. */
  pathways?: Maybe<Array<Pathway>>;
  /** Reads and enables pagination through a set of `Pathway`. */
  pathwaysConnection?: Maybe<PathwaysConnection>;
  /** Given a FlyBase ID, returns a count of FlyBase pub records directly associated with it. */
  pubCount?: Maybe<Scalars['BigInt']['output']>;
  /** Given a FlyBase ID, returns a count of FlyBase pub records of the specified type directly associated with it. */
  pubCountByType?: Maybe<Scalars['BigInt']['output']>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  searchExpressionTools?: Maybe<Array<Maybe<ExpressionToolSearchResult>>>;
  splitSystemCombination?: Maybe<SplitSystemCombination>;
  /** Reads a single `SplitSystemCombination` using its globally unique `ID`. */
  splitSystemCombinationByNodeId?: Maybe<SplitSystemCombination>;
  splitSystemCombinationComponentAllele?: Maybe<SplitSystemCombinationComponentAllele>;
  /** Reads a single `SplitSystemCombinationComponentAllele` using its globally unique `ID`. */
  splitSystemCombinationComponentAlleleByNodeId?: Maybe<SplitSystemCombinationComponentAllele>;
  /** Reads a set of `SplitSystemCombinationComponentAllele`. */
  splitSystemCombinationComponentAlleles?: Maybe<Array<SplitSystemCombinationComponentAllele>>;
  /** Reads and enables pagination through a set of `SplitSystemCombinationComponentAllele`. */
  splitSystemCombinationComponentAllelesConnection?: Maybe<SplitSystemCombinationComponentAllelesConnection>;
  /** Reads a set of `SplitSystemCombination`. */
  splitSystemCombinations?: Maybe<Array<SplitSystemCombination>>;
  /** Reads and enables pagination through a set of `SplitSystemCombination`. */
  splitSystemCombinationsByFbal?: Maybe<Array<SplitSystemCombination>>;
  /** Reads and enables pagination through a set of `SplitSystemCombination`. */
  splitSystemCombinationsByFbalConnection?: Maybe<SplitSystemCombinationsConnection>;
  /** Reads and enables pagination through a set of `SplitSystemCombination`. */
  splitSystemCombinationsConnection?: Maybe<SplitSystemCombinationsConnection>;
  tool?: Maybe<Tool>;
  /** Reads a single `Tool` using its globally unique `ID`. */
  toolByNodeId?: Maybe<Tool>;
  toolUse?: Maybe<ToolUse>;
  /** Reads a single `ToolUse` using its globally unique `ID`. */
  toolUseByNodeId?: Maybe<ToolUse>;
  /** Reads a set of `ToolUse`. */
  toolUses?: Maybe<Array<ToolUse>>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection?: Maybe<ToolUsesConnection>;
  /** Reads a set of `Tool`. */
  tools?: Maybe<Array<Tool>>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsConnection?: Maybe<ToolsConnection>;
};


export type QueryAlleleArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryAlleleByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryAlleleClassArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryAlleleClassByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryAlleleClassesArgs = {
  condition?: InputMaybe<AlleleClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleClassesOrderBy>>;
};


export type QueryAlleleClassesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleClassesOrderBy>>;
};


export type QueryAlleleDiseaseVariantArgs = {
  alleleDiseaseVariantId: Scalars['BigInt']['input'];
};


export type QueryAlleleDiseaseVariantByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryAlleleDiseaseVariantsArgs = {
  condition?: InputMaybe<AlleleDiseaseVariantCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleDiseaseVariantsOrderBy>>;
};


export type QueryAlleleDiseaseVariantsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleDiseaseVariantCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleDiseaseVariantsOrderBy>>;
};


export type QueryAlleleMutagenArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryAlleleMutagenByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryAlleleMutagensArgs = {
  condition?: InputMaybe<AlleleMutagenCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleMutagensOrderBy>>;
};


export type QueryAlleleMutagensConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleMutagenCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleMutagensOrderBy>>;
};


export type QueryAlleleStockArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryAlleleStockByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryAlleleStocksArgs = {
  condition?: InputMaybe<AlleleStockCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleStocksOrderBy>>;
};


export type QueryAlleleStocksConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleStockCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleStocksOrderBy>>;
};


export type QueryAlleleTransgenicProductClassArgs = {
  alleleId: Scalars['Int']['input'];
  soId: Scalars['String']['input'];
};


export type QueryAlleleTransgenicProductClassByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryAlleleTransgenicProductClassesArgs = {
  condition?: InputMaybe<AlleleTransgenicProductClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleTransgenicProductClassesOrderBy>>;
};


export type QueryAlleleTransgenicProductClassesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleTransgenicProductClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlleleTransgenicProductClassesOrderBy>>;
};


export type QueryAllelesArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type QueryAllelesByFbalArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllelesByFbalConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllelesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type QueryAllelev2Args = {
  id: Scalars['String']['input'];
};


export type QueryAllelev2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryAllelev2sArgs = {
  condition?: InputMaybe<Allelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Allelev2sOrderBy>>;
};


export type QueryAllelev2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Allelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Allelev2sOrderBy>>;
};


export type QueryConstructArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryConstructByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryConstructsArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type QueryConstructsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type QueryCurrentFullnameArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCurrentSymbolArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCurrentSynonymArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  synonymType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDataClassArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDiseaseVariantsByFbgnArgs = {
  fbgn?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiseaseVariantsByFbgnConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  fbgn?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiseaseVariantsByFbhhArgs = {
  fbhh?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiseaseVariantsByFbhhConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  fbhh?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiseasev2Args = {
  id: Scalars['String']['input'];
};


export type QueryDiseasev2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryDiseasev2sArgs = {
  condition?: InputMaybe<Diseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Diseasev2sOrderBy>>;
};


export type QueryDiseasev2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Diseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Diseasev2sOrderBy>>;
};


export type QueryEnzymev2Args = {
  id: Scalars['String']['input'];
};


export type QueryEnzymev2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryEnzymev2sArgs = {
  condition?: InputMaybe<Enzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Enzymev2sOrderBy>>;
};


export type QueryEnzymev2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Enzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Enzymev2sOrderBy>>;
};


export type QueryGeneArgs = {
  featureId: Scalars['Int']['input'];
};


export type QueryGeneAllelev2Args = {
  alleleId: Scalars['String']['input'];
  geneId: Scalars['String']['input'];
  isConstruct: Scalars['Boolean']['input'];
};


export type QueryGeneAllelev2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneAllelev2sArgs = {
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


export type QueryGeneAllelev2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneAllelev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneAllelev2sOrderBy>>;
};


export type QueryGeneByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneDiseasev2Args = {
  diseaseId: Scalars['String']['input'];
  geneId: Scalars['String']['input'];
  isExperimental: Scalars['Boolean']['input'];
  qualifier: Scalars['String']['input'];
};


export type QueryGeneDiseasev2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneDiseasev2sArgs = {
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


export type QueryGeneDiseasev2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneDiseasev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneDiseasev2sOrderBy>>;
};


export type QueryGeneEnzymev2Args = {
  enzymeId: Scalars['String']['input'];
  geneId: Scalars['String']['input'];
};


export type QueryGeneEnzymev2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneEnzymev2sArgs = {
  condition?: InputMaybe<GeneEnzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneEnzymev2sOrderBy>>;
};


export type QueryGeneEnzymev2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneEnzymev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneEnzymev2sOrderBy>>;
};


export type QueryGeneGoMolecularFunctionv2Args = {
  geneId: Scalars['String']['input'];
  goId: Scalars['String']['input'];
  isExperimental: Scalars['Boolean']['input'];
};


export type QueryGeneGoMolecularFunctionv2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneGoMolecularFunctionv2sArgs = {
  condition?: InputMaybe<GeneGoMolecularFunctionv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGoMolecularFunctionv2sOrderBy>>;
};


export type QueryGeneGoMolecularFunctionv2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGoMolecularFunctionv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGoMolecularFunctionv2sOrderBy>>;
};


export type QueryGeneGroupMembersArgs = {
  fbgg?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  subgroup?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGeneGroupMembersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  fbgg?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  subgroup?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGeneGroupMembershipsArgs = {
  condition?: InputMaybe<GeneGroupMembershipCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMembershipsOrderBy>>;
};


export type QueryGeneGroupMembershipsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMembershipCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMembershipsOrderBy>>;
};


export type QueryGeneGroupMemberv2Args = {
  id: Scalars['Int']['input'];
};


export type QueryGeneGroupMemberv2ByGeneIdAndGeneGroupIdAndSubgroupIdArgs = {
  geneGroupId: Scalars['String']['input'];
  geneId: Scalars['String']['input'];
  subgroupId: Scalars['String']['input'];
};


export type QueryGeneGroupMemberv2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneGroupMemberv2sArgs = {
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type QueryGeneGroupMemberv2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupMemberv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupMemberv2sOrderBy>>;
};


export type QueryGeneGroupv2Args = {
  id: Scalars['String']['input'];
};


export type QueryGeneGroupv2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneGroupv2sArgs = {
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type QueryGeneGroupv2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneGroupv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneGroupv2sOrderBy>>;
};


export type QueryGeneHumanOrthologv2Args = {
  geneId: Scalars['String']['input'];
  orthologId: Scalars['String']['input'];
};


export type QueryGeneHumanOrthologv2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGeneHumanOrthologv2sArgs = {
  condition?: InputMaybe<GeneHumanOrthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneHumanOrthologv2sOrderBy>>;
};


export type QueryGeneHumanOrthologv2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneHumanOrthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeneHumanOrthologv2sOrderBy>>;
};


export type QueryGenesArgs = {
  condition?: InputMaybe<GeneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GenesOrderBy>>;
};


export type QueryGenesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GenesOrderBy>>;
};


export type QueryGenev2Args = {
  id: Scalars['String']['input'];
};


export type QueryGenev2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryGenev2sArgs = {
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type QueryGenev2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Genev2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Genev2sOrderBy>>;
};


export type QueryGetAllianceVariantsByAlleleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<AllianceVariantsByAllele>;
};


export type QueryGetAllianceVariantsByGeneArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<AllianceVariantsByGene>;
};


export type QueryGetFeaturepropArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetFeaturepropConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetGeneOntologyTermsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  goAspect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGeneOntologyTermsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  goAspect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGrpmemberpropArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  grpmemberId?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetGrpmemberpropConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  grpmemberId?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPubpropArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPubpropConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInsertionArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryInsertionByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryInsertionsArgs = {
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


export type QueryInsertionsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InsertionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InsertionsOrderBy>>;
};


export type QueryIsGoEvidenceExperimentalArgs = {
  evidenceCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIsPathwayArgs = {
  cvid?: InputMaybe<Scalars['String']['input']>;
  fbgg?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryOrthologv2Args = {
  id: Scalars['String']['input'];
};


export type QueryOrthologv2ByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryOrthologv2sArgs = {
  condition?: InputMaybe<Orthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Orthologv2sOrderBy>>;
};


export type QueryOrthologv2sConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<Orthologv2Condition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Orthologv2sOrderBy>>;
};


export type QueryPathwayArgs = {
  grpId: Scalars['Int']['input'];
};


export type QueryPathwayByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryPathwayDiseasesArgs = {
  condition?: InputMaybe<PathwayDiseaseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayDiseasesOrderBy>>;
};


export type QueryPathwayDiseasesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PathwayDiseaseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayDiseasesOrderBy>>;
};


export type QueryPathwayMemberArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPathwayMemberByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryPathwayMembersArgs = {
  condition?: InputMaybe<PathwayMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayMembersOrderBy>>;
};


export type QueryPathwayMembersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PathwayMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwayMembersOrderBy>>;
};


export type QueryPathwaysArgs = {
  condition?: InputMaybe<PathwayCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwaysOrderBy>>;
};


export type QueryPathwaysConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PathwayCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PathwaysOrderBy>>;
};


export type QueryPubCountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPubCountByTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  pubType?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchExpressionToolsArgs = {
  expression?: InputMaybe<ExpressionSearchInput>;
  gene?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySplitSystemCombinationArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QuerySplitSystemCombinationByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QuerySplitSystemCombinationComponentAlleleArgs = {
  alleleId: Scalars['Int']['input'];
  splitSystemCombinationId: Scalars['Int']['input'];
};


export type QuerySplitSystemCombinationComponentAlleleByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QuerySplitSystemCombinationComponentAllelesArgs = {
  condition?: InputMaybe<SplitSystemCombinationComponentAlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationComponentAllelesOrderBy>>;
};


export type QuerySplitSystemCombinationComponentAllelesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SplitSystemCombinationComponentAlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationComponentAllelesOrderBy>>;
};


export type QuerySplitSystemCombinationsArgs = {
  condition?: InputMaybe<SplitSystemCombinationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationsOrderBy>>;
};


export type QuerySplitSystemCombinationsByFbalArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySplitSystemCombinationsByFbalConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySplitSystemCombinationsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SplitSystemCombinationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationsOrderBy>>;
};


export type QueryToolArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryToolByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryToolUseArgs = {
  postgresId: Scalars['Int']['input'];
};


export type QueryToolUseByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


export type QueryToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


export type QueryToolsArgs = {
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};


export type QueryToolsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
};

export type SplitSystemCombination = Node & {
  __typename?: 'SplitSystemCombination';
  /** Reads and enables pagination through a set of `Allele`. */
  componentAlleles: Array<Allele>;
  /** Reads and enables pagination through a set of `Allele`. */
  componentAllelesConnection: SplitSystemCombinationAllelesBySplitSystemCombinationComponentAlleleSplitSystemCombinationIdAndAlleleIdManyToManyConnection;
  id?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
  pubCount?: Maybe<Scalars['BigInt']['output']>;
  /** Reads and enables pagination through a set of `SplitSystemCombinationComponentAllele`. */
  splitSystemCombinationComponentAlleles: Array<SplitSystemCombinationComponentAllele>;
  /** Reads and enables pagination through a set of `SplitSystemCombinationComponentAllele`. */
  splitSystemCombinationComponentAllelesConnection: SplitSystemCombinationComponentAllelesConnection;
  stocksCount?: Maybe<Scalars['BigInt']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};


export type SplitSystemCombinationComponentAllelesArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type SplitSystemCombinationComponentAllelesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type SplitSystemCombinationSplitSystemCombinationComponentAllelesArgs = {
  condition?: InputMaybe<SplitSystemCombinationComponentAlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationComponentAllelesOrderBy>>;
};


export type SplitSystemCombinationSplitSystemCombinationComponentAllelesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SplitSystemCombinationComponentAlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SplitSystemCombinationComponentAllelesOrderBy>>;
};

/** A connection to a list of `Allele` values, with data from `SplitSystemCombinationComponentAllele`. */
export type SplitSystemCombinationAllelesBySplitSystemCombinationComponentAlleleSplitSystemCombinationIdAndAlleleIdManyToManyConnection = {
  __typename?: 'SplitSystemCombinationAllelesBySplitSystemCombinationComponentAlleleSplitSystemCombinationIdAndAlleleIdManyToManyConnection';
  /** A list of edges which contains the `Allele`, info from the `SplitSystemCombinationComponentAllele`, and the cursor to aid in pagination. */
  edges: Array<SplitSystemCombinationAllelesBySplitSystemCombinationComponentAlleleSplitSystemCombinationIdAndAlleleIdManyToManyEdge>;
  /** A list of `Allele` objects. */
  nodes: Array<Allele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allele` edge in the connection, with data from `SplitSystemCombinationComponentAllele`. */
export type SplitSystemCombinationAllelesBySplitSystemCombinationComponentAlleleSplitSystemCombinationIdAndAlleleIdManyToManyEdge = {
  __typename?: 'SplitSystemCombinationAllelesBySplitSystemCombinationComponentAlleleSplitSystemCombinationIdAndAlleleIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Allele` at the end of the edge. */
  node: Allele;
};

export type SplitSystemCombinationComponentAllele = Node & {
  __typename?: 'SplitSystemCombinationComponentAllele';
  /** Reads a single `Allele` that is related to this `SplitSystemCombinationComponentAllele`. */
  allele?: Maybe<Allele>;
  alleleId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `SplitSystemCombination` that is related to this `SplitSystemCombinationComponentAllele`. */
  splitSystemCombination?: Maybe<SplitSystemCombination>;
  splitSystemCombinationId: Scalars['Int']['output'];
};

/**
 * A condition to be used against `SplitSystemCombinationComponentAllele` object
 * types. All fields are tested for equality and combined with a logical ‘and.’
 */
export type SplitSystemCombinationComponentAlleleCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `splitSystemCombinationId` field. */
  splitSystemCombinationId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `SplitSystemCombinationComponentAllele` values. */
export type SplitSystemCombinationComponentAllelesConnection = {
  __typename?: 'SplitSystemCombinationComponentAllelesConnection';
  /** A list of edges which contains the `SplitSystemCombinationComponentAllele` and cursor to aid in pagination. */
  edges: Array<SplitSystemCombinationComponentAllelesEdge>;
  /** A list of `SplitSystemCombinationComponentAllele` objects. */
  nodes: Array<SplitSystemCombinationComponentAllele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SplitSystemCombinationComponentAllele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `SplitSystemCombinationComponentAllele` edge in the connection. */
export type SplitSystemCombinationComponentAllelesEdge = {
  __typename?: 'SplitSystemCombinationComponentAllelesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `SplitSystemCombinationComponentAllele` at the end of the edge. */
  node: SplitSystemCombinationComponentAllele;
};

/** Methods to use when ordering `SplitSystemCombinationComponentAllele`. */
export enum SplitSystemCombinationComponentAllelesOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SplitSystemCombinationIdAsc = 'SPLIT_SYSTEM_COMBINATION_ID_ASC',
  SplitSystemCombinationIdDesc = 'SPLIT_SYSTEM_COMBINATION_ID_DESC'
}

/**
 * A condition to be used against `SplitSystemCombination` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type SplitSystemCombinationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `pubCount` field. */
  pubCount?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `stocksCount` field. */
  stocksCount?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `SplitSystemCombination` values. */
export type SplitSystemCombinationsConnection = {
  __typename?: 'SplitSystemCombinationsConnection';
  /** A list of edges which contains the `SplitSystemCombination` and cursor to aid in pagination. */
  edges: Array<SplitSystemCombinationsEdge>;
  /** A list of `SplitSystemCombination` objects. */
  nodes: Array<SplitSystemCombination>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SplitSystemCombination` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `SplitSystemCombination` edge in the connection. */
export type SplitSystemCombinationsEdge = {
  __typename?: 'SplitSystemCombinationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `SplitSystemCombination` at the end of the edge. */
  node: SplitSystemCombination;
};

/** Methods to use when ordering `SplitSystemCombination`. */
export enum SplitSystemCombinationsOrderBy {
  FbcoIdAsc = 'FBCO_ID_ASC',
  FbcoIdDesc = 'FBCO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PubCountAsc = 'PUB_COUNT_ASC',
  PubCountDesc = 'PUB_COUNT_DESC',
  StocksCountAsc = 'STOCKS_COUNT_ASC',
  StocksCountDesc = 'STOCKS_COUNT_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC'
}

export type Tool = Node & {
  __typename?: 'Tool';
  /** Reads a single `Allele` that is related to this `Tool`. */
  allele?: Maybe<Allele>;
  alleleId?: Maybe<Scalars['BigInt']['output']>;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByToolUseToolIdAndAlleleId: ToolAllelesByToolUseToolIdAndAlleleIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Allele`. */
  allelesByToolUseToolIdAndAlleleIdList: Array<Allele>;
  /** Reads a single `Construct` that is related to this `Tool`. */
  construct?: Maybe<Construct>;
  constructId?: Maybe<Scalars['BigInt']['output']>;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsByToolUseToolIdAndConstructId: ToolConstructsByToolUseToolIdAndConstructIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Construct`. */
  constructsByToolUseToolIdAndConstructIdList: Array<Construct>;
  id?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
  relType?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
  /** Reads and enables pagination through a set of `ToolUse`. */
  uses: Array<ToolUse>;
};


export type ToolAllelesByToolUseToolIdAndAlleleIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type ToolAllelesByToolUseToolIdAndAlleleIdListArgs = {
  condition?: InputMaybe<AlleleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllelesOrderBy>>;
};


export type ToolConstructsByToolUseToolIdAndConstructIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type ToolConstructsByToolUseToolIdAndConstructIdListArgs = {
  condition?: InputMaybe<ConstructCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ConstructsOrderBy>>;
};


export type ToolToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


export type ToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};

/** A connection to a list of `Allele` values, with data from `ToolUse`. */
export type ToolAllelesByToolUseToolIdAndAlleleIdManyToManyConnection = {
  __typename?: 'ToolAllelesByToolUseToolIdAndAlleleIdManyToManyConnection';
  /** A list of edges which contains the `Allele`, info from the `ToolUse`, and the cursor to aid in pagination. */
  edges: Array<ToolAllelesByToolUseToolIdAndAlleleIdManyToManyEdge>;
  /** A list of `Allele` objects. */
  nodes: Array<Allele>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Allele` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Allele` edge in the connection, with data from `ToolUse`. */
export type ToolAllelesByToolUseToolIdAndAlleleIdManyToManyEdge = {
  __typename?: 'ToolAllelesByToolUseToolIdAndAlleleIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Allele` at the end of the edge. */
  node: Allele;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUses: Array<ToolUse>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
};


/** A `Allele` edge in the connection, with data from `ToolUse`. */
export type ToolAllelesByToolUseToolIdAndAlleleIdManyToManyEdgeToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


/** A `Allele` edge in the connection, with data from `ToolUse`. */
export type ToolAllelesByToolUseToolIdAndAlleleIdManyToManyEdgeToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};

/** A condition to be used against `Tool` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ToolCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `constructId` field. */
  constructId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `relType` field. */
  relType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Construct` values, with data from `ToolUse`. */
export type ToolConstructsByToolUseToolIdAndConstructIdManyToManyConnection = {
  __typename?: 'ToolConstructsByToolUseToolIdAndConstructIdManyToManyConnection';
  /** A list of edges which contains the `Construct`, info from the `ToolUse`, and the cursor to aid in pagination. */
  edges: Array<ToolConstructsByToolUseToolIdAndConstructIdManyToManyEdge>;
  /** A list of `Construct` objects. */
  nodes: Array<Construct>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Construct` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Construct` edge in the connection, with data from `ToolUse`. */
export type ToolConstructsByToolUseToolIdAndConstructIdManyToManyEdge = {
  __typename?: 'ToolConstructsByToolUseToolIdAndConstructIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Construct` at the end of the edge. */
  node: Construct;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUses: Array<ToolUse>;
  /** Reads and enables pagination through a set of `ToolUse`. */
  toolUsesConnection: ToolUsesConnection;
};


/** A `Construct` edge in the connection, with data from `ToolUse`. */
export type ToolConstructsByToolUseToolIdAndConstructIdManyToManyEdgeToolUsesArgs = {
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};


/** A `Construct` edge in the connection, with data from `ToolUse`. */
export type ToolConstructsByToolUseToolIdAndConstructIdManyToManyEdgeToolUsesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ToolUseCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ToolUsesOrderBy>>;
};

export type ToolUse = Node & {
  __typename?: 'ToolUse';
  /** Reads a single `Allele` that is related to this `ToolUse`. */
  allele?: Maybe<Allele>;
  alleleId?: Maybe<Scalars['BigInt']['output']>;
  /** Reads a single `Construct` that is related to this `ToolUse`. */
  construct?: Maybe<Construct>;
  constructId?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  postgresId: Scalars['Int']['output'];
  /** Reads a single `Tool` that is related to this `ToolUse`. */
  tool?: Maybe<Tool>;
  toolId?: Maybe<Scalars['BigInt']['output']>;
};

/** A condition to be used against `ToolUse` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ToolUseCondition = {
  /** Checks for equality with the object’s `alleleId` field. */
  alleleId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `constructId` field. */
  constructId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postgresId` field. */
  postgresId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `toolId` field. */
  toolId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `ToolUse` values. */
export type ToolUsesConnection = {
  __typename?: 'ToolUsesConnection';
  /** A list of edges which contains the `ToolUse` and cursor to aid in pagination. */
  edges: Array<ToolUsesEdge>;
  /** A list of `ToolUse` objects. */
  nodes: Array<ToolUse>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ToolUse` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ToolUse` edge in the connection. */
export type ToolUsesEdge = {
  __typename?: 'ToolUsesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ToolUse` at the end of the edge. */
  node: ToolUse;
};

/** Methods to use when ordering `ToolUse`. */
export enum ToolUsesOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  ConstructIdAsc = 'CONSTRUCT_ID_ASC',
  ConstructIdDesc = 'CONSTRUCT_ID_DESC',
  FbcvIdAsc = 'FBCV_ID_ASC',
  FbcvIdDesc = 'FBCV_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ToolIdAsc = 'TOOL_ID_ASC',
  ToolIdDesc = 'TOOL_ID_DESC'
}

/** A connection to a list of `Tool` values. */
export type ToolsConnection = {
  __typename?: 'ToolsConnection';
  /** A list of edges which contains the `Tool` and cursor to aid in pagination. */
  edges: Array<ToolsEdge>;
  /** A list of `Tool` objects. */
  nodes: Array<Tool>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tool` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Tool` edge in the connection. */
export type ToolsEdge = {
  __typename?: 'ToolsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Tool` at the end of the edge. */
  node: Tool;
};

/** Methods to use when ordering `Tool`. */
export enum ToolsOrderBy {
  AlleleIdAsc = 'ALLELE_ID_ASC',
  AlleleIdDesc = 'ALLELE_ID_DESC',
  ConstructIdAsc = 'CONSTRUCT_ID_ASC',
  ConstructIdDesc = 'CONSTRUCT_ID_DESC',
  FbidAsc = 'FBID_ASC',
  FbidDesc = 'FBID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RelTypeAsc = 'REL_TYPE_ASC',
  RelTypeDesc = 'REL_TYPE_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC'
}

export type VariantsByAlleleResult = {
  __typename?: 'VariantsByAlleleResult';
  variants?: Maybe<Array<Maybe<AllianceVariant>>>;
};

export type VariantsByGeneResult = {
  __typename?: 'VariantsByGeneResult';
  alleles?: Maybe<Array<Maybe<AllianceAllele>>>;
};

export type FullAlleleFragment = { __typename?: 'Allele', id?: string | null, symbol?: string | null, isConstruct?: boolean | null, stocksCount?: any | null, pubCount?: any | null, knownLesion?: boolean | null, hasImage?: boolean | null, geneIsRegulatoryRegion?: boolean | null, mutagens: Array<{ __typename?: 'AlleleMutagen', id?: string | null, name?: string | null }>, classes: Array<{ __typename?: 'AlleleClass', id?: string | null, name?: string | null }>, insertions: Array<{ __typename?: 'Insertion', id?: string | null, symbol?: string | null }>, constructs: Array<{ __typename?: 'Construct', id?: string | null, symbol?: string | null }>, insertedElementTypes?: Array<{ __typename?: 'ToolUse', id?: string | null, name?: string | null } | null> | null, regRegions?: Array<{ __typename?: 'Tool', id?: string | null, symbol?: string | null } | null> | null, encodedTools?: Array<{ __typename?: 'Tool', id?: string | null, symbol?: string | null } | null> | null, encodedToolUses?: Array<{ __typename?: 'ToolUse', id?: string | null, name?: string | null } | null> | null, taggedWith?: Array<{ __typename?: 'Tool', id?: string | null, symbol?: string | null } | null> | null, tagUses?: Array<{ __typename?: 'ToolUse', id?: string | null, name?: string | null } | null> | null, alsoCarries?: Array<{ __typename?: 'Tool', id?: string | null, symbol?: string | null } | null> | null } & { ' $fragmentName'?: 'FullAlleleFragment' };

export type GeneGroupMemberFragment = { __typename?: 'GeneGroupMemberv2', geneGroupPubs?: any | null, gene?: { __typename?: 'Genev2', id: string, symbol?: string | null, symbolSgml?: string | null, name?: string | null, nameSgml?: string | null, aka?: string | null, pubs?: Array<string | null> | null, antibody?: boolean | null, testisSpecificityIndex?: string | null, cytogenicMap?: Array<string | null> | null, transgenicConstructs: Array<{ __typename?: 'GeneAllelev2', allele?: { __typename?: 'Allelev2', id: string, symbol?: string | null } | null }>, classicalAndInsertionAlleles: Array<{ __typename?: 'GeneAllelev2', allele?: { __typename?: 'Allelev2', id: string, symbol?: string | null } | null }>, geneGroups: Array<{ __typename?: 'GeneGroupMemberv2', geneGroup?: { __typename?: 'GeneGroupv2', id: string, symbol?: string | null, name?: string | null, type?: string | null } | null }>, experimentalDiseaseModels: Array<{ __typename?: 'GeneDiseasev2', disease?: { __typename?: 'Diseasev2', id: string, name?: string | null } | null }>, potentialDiseaseModels: Array<{ __typename?: 'GeneDiseasev2', disease?: { __typename?: 'Diseasev2', id: string, name?: string | null } | null }>, humanOrthologs: Array<{ __typename?: 'GeneHumanOrthologv2', dioptScore?: number | null, name?: string | null, url?: string | null, ortholog?: { __typename?: 'Orthologv2', id: string, symbol?: string | null, organismId?: number | null } | null }>, enzymes: Array<{ __typename?: 'Enzymev2', id: string, name?: string | null }>, experimentalGoMolecularFunctions: Array<{ __typename?: 'GeneGoMolecularFunctionv2', goId: string, goMolecularFunction?: string | null }>, nonExperimentalGoMolecularFunctions: Array<{ __typename?: 'GeneGoMolecularFunctionv2', goId: string, goMolecularFunction?: string | null }> } | null } & { ' $fragmentName'?: 'GeneGroupMemberFragment' };

export type GeneToolKitMostCommonlyUsedQueryVariables = Exact<{
  geneId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GeneToolKitMostCommonlyUsedQuery = { __typename?: 'Query', classicalAndInsertionsAlleles?: Array<{ __typename?: 'Gene', alleles: Array<{ __typename?: 'Allele', id?: string | null, paperCount?: any | null, stocksCount?: any | null, pubCount?: any | null, symbol?: string | null, classes: Array<{ __typename?: 'AlleleClass', name?: string | null }>, tagUses?: Array<{ __typename?: 'ToolUse', name?: string | null } | null> | null }> }> | null, transgenicConstructs?: Array<{ __typename?: 'Gene', alleles: Array<{ __typename?: 'Allele', id?: string | null, paperCount?: any | null, stocksCount?: any | null, pubCount?: any | null, symbol?: string | null, transgenicProductClasses: Array<{ __typename?: 'AlleleTransgenicProductClass', transgenicProductClass?: string | null }>, classes: Array<{ __typename?: 'AlleleClass', name?: string | null }>, regRegions?: Array<{ __typename?: 'Tool', symbol?: string | null } | null> | null, taggedWith?: Array<{ __typename?: 'Tool', symbol?: string | null } | null> | null, tagUses?: Array<{ __typename?: 'ToolUse', name?: string | null } | null> | null }> }> | null };

export type GetAllelesQueryVariables = Exact<{
  fbal_ids: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllelesQuery = { __typename?: 'Query', alleles?: Array<(
    { __typename?: 'Allele' }
    & { ' $fragmentRefs'?: { 'FullAlleleFragment': FullAlleleFragment } }
  )> | null };

export type GeneGroupTablesQueryVariables = Exact<{
  FBgg: Scalars['String']['input'];
}>;


export type GeneGroupTablesQuery = { __typename?: 'Query', geneGroupv2?: { __typename?: 'GeneGroupv2', id: string, type?: string | null, subgroups: Array<{ __typename?: 'GeneGroupv2', id: string, name?: string | null, nameSgml?: string | null, symbol?: string | null, symbolSgml?: string | null, memberships: Array<(
        { __typename?: 'GeneGroupMemberv2' }
        & { ' $fragmentRefs'?: { 'GeneGroupMemberFragment': GeneGroupMemberFragment } }
      )> }>, memberships: Array<(
      { __typename?: 'GeneGroupMemberv2' }
      & { ' $fragmentRefs'?: { 'GeneGroupMemberFragment': GeneGroupMemberFragment } }
    )> } | null };

export type GetSplitSystemCombinationsQueryVariables = Exact<{
  fbal_ids: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type GetSplitSystemCombinationsQuery = { __typename?: 'Query', splitSystemCombinations?: Array<{ __typename?: 'SplitSystemCombination', id?: string | null, pubCount?: any | null, symbol?: string | null, stocksCount?: any | null, componentAlleles: Array<(
      { __typename?: 'Allele' }
      & { ' $fragmentRefs'?: { 'FullAlleleFragment': FullAlleleFragment } }
    )> }> | null };

export type FindToolsQueryVariables = Exact<{
  expression?: InputMaybe<ExpressionSearchInput>;
  gene?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindToolsQuery = { __typename?: 'Query', alleles?: Array<{ __typename?: 'ExpressionToolSearchResult', id: string, expression_terms: Array<{ __typename?: 'AllianceCVTerm', id: string, name?: string | null } | null> } | null> | null };

export const FullAlleleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullAllele"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Allele"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"isConstruct"}},{"kind":"Field","name":{"kind":"Name","value":"stocksCount"}},{"kind":"Field","name":{"kind":"Name","value":"pubCount"}},{"kind":"Field","name":{"kind":"Name","value":"knownLesion"}},{"kind":"Field","name":{"kind":"Name","value":"hasImage"}},{"kind":"Field","name":{"kind":"Name","value":"geneIsRegulatoryRegion"}},{"kind":"Field","name":{"kind":"Name","value":"mutagens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insertions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"constructs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insertedElementTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"regRegions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodedTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodedToolUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taggedWith"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tagUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alsoCarries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}}]} as unknown as DocumentNode<FullAlleleFragment, unknown>;
export const GeneGroupMemberFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GeneGroupMember"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeneGroupMemberv2"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"geneGroupPubs"}},{"kind":"Field","name":{"kind":"Name","value":"gene"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"symbolSgml"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameSgml"}},{"kind":"Field","name":{"kind":"Name","value":"aka"}},{"kind":"Field","name":{"kind":"Name","value":"pubs"}},{"kind":"Field","name":{"kind":"Name","value":"antibody"}},{"kind":"Field","alias":{"kind":"Name","value":"transgenicConstructs"},"name":{"kind":"Name","value":"geneAllelev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isConstruct"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allele"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"classicalAndInsertionAlleles"},"name":{"kind":"Name","value":"geneAllelev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isConstruct"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allele"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"geneGroups"},"name":{"kind":"Name","value":"geneGroupMemberv2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subgroupId"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"geneGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"experimentalDiseaseModels"},"name":{"kind":"Name","value":"geneDiseasev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disease"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"potentialDiseaseModels"},"name":{"kind":"Name","value":"geneDiseasev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disease"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"humanOrthologs"},"name":{"kind":"Name","value":"geneHumanOrthologv2sByGeneId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dioptScore"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ortholog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"organismId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testisSpecificityIndex"}},{"kind":"Field","alias":{"kind":"Name","value":"enzymes"},"name":{"kind":"Name","value":"enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"experimentalGoMolecularFunctions"},"name":{"kind":"Name","value":"geneGoMolecularFunctionv2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"goId"}},{"kind":"Field","name":{"kind":"Name","value":"goMolecularFunction"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"nonExperimentalGoMolecularFunctions"},"name":{"kind":"Name","value":"geneGoMolecularFunctionv2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"goId"}},{"kind":"Field","name":{"kind":"Name","value":"goMolecularFunction"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cytogenicMap"}}]}}]}}]} as unknown as DocumentNode<GeneGroupMemberFragment, unknown>;
export const GeneToolKitMostCommonlyUsedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GeneToolKitMostCommonlyUsed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"geneId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"classicalAndInsertionsAlleles"},"name":{"kind":"Name","value":"genes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geneId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alleles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isConstruct"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"geneIsRegulatoryRegion"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"paperCount"}},{"kind":"Field","name":{"kind":"Name","value":"stocksCount"}},{"kind":"Field","name":{"kind":"Name","value":"pubCount"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tagUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"transgenicConstructs"},"name":{"kind":"Name","value":"genes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geneId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alleles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isConstruct"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"geneIsRegulatoryRegion"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"paperCount"}},{"kind":"Field","name":{"kind":"Name","value":"stocksCount"}},{"kind":"Field","name":{"kind":"Name","value":"pubCount"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"transgenicProductClasses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transgenicProductClass"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"regRegions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taggedWith"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tagUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GeneToolKitMostCommonlyUsedQuery, GeneToolKitMostCommonlyUsedQueryVariables>;
export const GetAllelesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAlleles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fbal_ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"alleles"},"name":{"kind":"Name","value":"allelesByFbal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fbal_ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullAllele"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullAllele"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Allele"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"isConstruct"}},{"kind":"Field","name":{"kind":"Name","value":"stocksCount"}},{"kind":"Field","name":{"kind":"Name","value":"pubCount"}},{"kind":"Field","name":{"kind":"Name","value":"knownLesion"}},{"kind":"Field","name":{"kind":"Name","value":"hasImage"}},{"kind":"Field","name":{"kind":"Name","value":"geneIsRegulatoryRegion"}},{"kind":"Field","name":{"kind":"Name","value":"mutagens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insertions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"constructs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insertedElementTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"regRegions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodedTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodedToolUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taggedWith"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tagUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alsoCarries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}}]} as unknown as DocumentNode<GetAllelesQuery, GetAllelesQueryVariables>;
export const GeneGroupTablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GeneGroupTables"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"FBgg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"geneGroupv2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"FBgg"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"subgroups"},"name":{"kind":"Name","value":"geneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameSgml"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"symbolSgml"}},{"kind":"Field","alias":{"kind":"Name","value":"memberships"},"name":{"kind":"Name","value":"geneGroupMemberv2sBySubgroupId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"geneGroupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"FBgg"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GeneGroupMember"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"memberships"},"name":{"kind":"Name","value":"geneGroupMemberv2sByGeneGroupId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subgroupId"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GeneGroupMember"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GeneGroupMember"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeneGroupMemberv2"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"geneGroupPubs"}},{"kind":"Field","name":{"kind":"Name","value":"gene"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"symbolSgml"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameSgml"}},{"kind":"Field","name":{"kind":"Name","value":"aka"}},{"kind":"Field","name":{"kind":"Name","value":"pubs"}},{"kind":"Field","name":{"kind":"Name","value":"antibody"}},{"kind":"Field","alias":{"kind":"Name","value":"transgenicConstructs"},"name":{"kind":"Name","value":"geneAllelev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isConstruct"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allele"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"classicalAndInsertionAlleles"},"name":{"kind":"Name","value":"geneAllelev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isConstruct"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allele"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"geneGroups"},"name":{"kind":"Name","value":"geneGroupMemberv2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subgroupId"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"geneGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"experimentalDiseaseModels"},"name":{"kind":"Name","value":"geneDiseasev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disease"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"potentialDiseaseModels"},"name":{"kind":"Name","value":"geneDiseasev2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disease"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"humanOrthologs"},"name":{"kind":"Name","value":"geneHumanOrthologv2sByGeneId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dioptScore"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ortholog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"organismId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testisSpecificityIndex"}},{"kind":"Field","alias":{"kind":"Name","value":"enzymes"},"name":{"kind":"Name","value":"enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"experimentalGoMolecularFunctions"},"name":{"kind":"Name","value":"geneGoMolecularFunctionv2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"goId"}},{"kind":"Field","name":{"kind":"Name","value":"goMolecularFunction"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"nonExperimentalGoMolecularFunctions"},"name":{"kind":"Name","value":"geneGoMolecularFunctionv2sByGeneId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isExperimental"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"goId"}},{"kind":"Field","name":{"kind":"Name","value":"goMolecularFunction"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cytogenicMap"}}]}}]}}]} as unknown as DocumentNode<GeneGroupTablesQuery, GeneGroupTablesQueryVariables>;
export const GetSplitSystemCombinationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSplitSystemCombinations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fbal_ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"splitSystemCombinations"},"name":{"kind":"Name","value":"splitSystemCombinationsByFbal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fbal_ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pubCount"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"stocksCount"}},{"kind":"Field","name":{"kind":"Name","value":"componentAlleles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isAlleleof"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullAllele"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullAllele"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Allele"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"isConstruct"}},{"kind":"Field","name":{"kind":"Name","value":"stocksCount"}},{"kind":"Field","name":{"kind":"Name","value":"pubCount"}},{"kind":"Field","name":{"kind":"Name","value":"knownLesion"}},{"kind":"Field","name":{"kind":"Name","value":"hasImage"}},{"kind":"Field","name":{"kind":"Name","value":"geneIsRegulatoryRegion"}},{"kind":"Field","name":{"kind":"Name","value":"mutagens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insertions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"constructs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insertedElementTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"regRegions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodedTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodedToolUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taggedWith"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tagUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alsoCarries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}}]} as unknown as DocumentNode<GetSplitSystemCombinationsQuery, GetSplitSystemCombinationsQueryVariables>;
export const FindToolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findTools"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expression"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ExpressionSearchInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gene"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"alleles"},"name":{"kind":"Name","value":"searchExpressionTools"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"expression"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expression"}}},{"kind":"Argument","name":{"kind":"Name","value":"gene"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gene"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expression_terms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FindToolsQuery, FindToolsQueryVariables>;