import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FieldWrapper<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};



export type GqlAffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: FieldWrapper<Scalars['Int']>;
};

export type GqlAggregateArticle = {
  __typename?: 'AggregateArticle';
  _count?: Maybe<FieldWrapper<GqlArticleCountAggregate>>;
  _avg?: Maybe<FieldWrapper<GqlArticleAvgAggregate>>;
  _sum?: Maybe<FieldWrapper<GqlArticleSumAggregate>>;
  _min?: Maybe<FieldWrapper<GqlArticleMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlArticleMaxAggregate>>;
};

export type GqlAggregateArticlePostProcessor = {
  __typename?: 'AggregateArticlePostProcessor';
  _count?: Maybe<FieldWrapper<GqlArticlePostProcessorCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlArticlePostProcessorMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlArticlePostProcessorMaxAggregate>>;
};

export type GqlAggregateArticleRef = {
  __typename?: 'AggregateArticleRef';
  _count?: Maybe<FieldWrapper<GqlArticleRefCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlArticleRefMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlArticleRefMaxAggregate>>;
};

export type GqlAggregateBucket = {
  __typename?: 'AggregateBucket';
  _count?: Maybe<FieldWrapper<GqlBucketCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlBucketMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlBucketMaxAggregate>>;
};

export type GqlAggregateFeed = {
  __typename?: 'AggregateFeed';
  _count?: Maybe<FieldWrapper<GqlFeedCountAggregate>>;
  _avg?: Maybe<FieldWrapper<GqlFeedAvgAggregate>>;
  _sum?: Maybe<FieldWrapper<GqlFeedSumAggregate>>;
  _min?: Maybe<FieldWrapper<GqlFeedMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlFeedMaxAggregate>>;
};

export type GqlAggregateFeedEvent = {
  __typename?: 'AggregateFeedEvent';
  _count?: Maybe<FieldWrapper<GqlFeedEventCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlFeedEventMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlFeedEventMaxAggregate>>;
};

export type GqlAggregateNoFollowUrl = {
  __typename?: 'AggregateNoFollowUrl';
  _count?: Maybe<FieldWrapper<GqlNoFollowUrlCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlNoFollowUrlMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlNoFollowUrlMaxAggregate>>;
};

export type GqlAggregateNotebook = {
  __typename?: 'AggregateNotebook';
  _count?: Maybe<FieldWrapper<GqlNotebookCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlNotebookMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlNotebookMaxAggregate>>;
};

export type GqlAggregateReleaseThrottle = {
  __typename?: 'AggregateReleaseThrottle';
  _count?: Maybe<FieldWrapper<GqlReleaseThrottleCountAggregate>>;
  _avg?: Maybe<FieldWrapper<GqlReleaseThrottleAvgAggregate>>;
  _sum?: Maybe<FieldWrapper<GqlReleaseThrottleSumAggregate>>;
  _min?: Maybe<FieldWrapper<GqlReleaseThrottleMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlReleaseThrottleMaxAggregate>>;
};

export type GqlAggregateStream = {
  __typename?: 'AggregateStream';
  _count?: Maybe<FieldWrapper<GqlStreamCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlStreamMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlStreamMaxAggregate>>;
};

export type GqlAggregateSubscription = {
  __typename?: 'AggregateSubscription';
  _count?: Maybe<FieldWrapper<GqlSubscriptionCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlSubscriptionMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlSubscriptionMaxAggregate>>;
};

export type GqlAggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<FieldWrapper<GqlUserCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlUserMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlUserMaxAggregate>>;
};

export type GqlArticle = {
  __typename?: 'Article';
  id: FieldWrapper<Scalars['String']>;
  released: FieldWrapper<Scalars['Boolean']>;
  applyPostProcessors: FieldWrapper<Scalars['Boolean']>;
  date_published: FieldWrapper<Scalars['DateTime']>;
  date_modified?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  comment_feed_url?: Maybe<FieldWrapper<Scalars['String']>>;
  source_url?: Maybe<FieldWrapper<Scalars['String']>>;
  url?: Maybe<FieldWrapper<Scalars['String']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  title: FieldWrapper<Scalars['String']>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  scores?: Maybe<FieldWrapper<Scalars['JSON']>>;
  score?: Maybe<FieldWrapper<Scalars['Float']>>;
  lastScoredAt: FieldWrapper<Scalars['DateTime']>;
  content_text: FieldWrapper<Scalars['String']>;
  content_html?: Maybe<FieldWrapper<Scalars['String']>>;
  enclosure?: Maybe<FieldWrapper<Scalars['JSON']>>;
  readability?: Maybe<FieldWrapper<Scalars['JSON']>>;
  has_readability?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  articleRef: Array<FieldWrapper<GqlArticleRef>>;
};


export type GqlArticleArticleRefArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  cursor?: Maybe<GqlArticleRefWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleRefScalarFieldEnum>>;
};

export type GqlArticleAvgAggregate = {
  __typename?: 'ArticleAvgAggregate';
  score?: Maybe<FieldWrapper<Scalars['Float']>>;
};

export type GqlArticleCountAggregate = {
  __typename?: 'ArticleCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  released: FieldWrapper<Scalars['Int']>;
  applyPostProcessors: FieldWrapper<Scalars['Int']>;
  date_published: FieldWrapper<Scalars['Int']>;
  date_modified: FieldWrapper<Scalars['Int']>;
  comment_feed_url: FieldWrapper<Scalars['Int']>;
  source_url: FieldWrapper<Scalars['Int']>;
  url: FieldWrapper<Scalars['Int']>;
  author: FieldWrapper<Scalars['Int']>;
  title: FieldWrapper<Scalars['Int']>;
  tags: FieldWrapper<Scalars['Int']>;
  scores: FieldWrapper<Scalars['Int']>;
  score: FieldWrapper<Scalars['Int']>;
  lastScoredAt: FieldWrapper<Scalars['Int']>;
  content_text: FieldWrapper<Scalars['Int']>;
  content_html: FieldWrapper<Scalars['Int']>;
  enclosure: FieldWrapper<Scalars['Int']>;
  readability: FieldWrapper<Scalars['Int']>;
  has_readability: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlArticleCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  released?: Maybe<Scalars['Boolean']>;
  applyPostProcessors?: Maybe<Scalars['Boolean']>;
  date_published?: Maybe<Scalars['DateTime']>;
  date_modified?: Maybe<Scalars['DateTime']>;
  comment_feed_url?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  scores?: Maybe<Scalars['JSON']>;
  score?: Maybe<Scalars['Float']>;
  lastScoredAt?: Maybe<Scalars['DateTime']>;
  content_text: Scalars['String'];
  content_html?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Scalars['JSON']>;
  readability?: Maybe<Scalars['JSON']>;
  has_readability?: Maybe<Scalars['Boolean']>;
  articleRef?: Maybe<GqlArticleRefCreateNestedManyWithoutArticleInput>;
};

export type GqlArticleCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  released?: Maybe<Scalars['Boolean']>;
  applyPostProcessors?: Maybe<Scalars['Boolean']>;
  date_published?: Maybe<Scalars['DateTime']>;
  date_modified?: Maybe<Scalars['DateTime']>;
  comment_feed_url?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  scores?: Maybe<Scalars['JSON']>;
  score?: Maybe<Scalars['Float']>;
  lastScoredAt?: Maybe<Scalars['DateTime']>;
  content_text: Scalars['String'];
  content_html?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Scalars['JSON']>;
  readability?: Maybe<Scalars['JSON']>;
  has_readability?: Maybe<Scalars['Boolean']>;
};

export type GqlArticleCreateNestedOneWithoutArticleRefInput = {
  create?: Maybe<GqlArticleCreateWithoutArticleRefInput>;
  connectOrCreate?: Maybe<GqlArticleCreateOrConnectWithoutArticleRefInput>;
  connect?: Maybe<GqlArticleWhereUniqueInput>;
};

export type GqlArticleCreateOrConnectWithoutArticleRefInput = {
  where: GqlArticleWhereUniqueInput;
  create: GqlArticleCreateWithoutArticleRefInput;
};

export type GqlArticleCreateWithoutArticleRefInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  released?: Maybe<Scalars['Boolean']>;
  applyPostProcessors?: Maybe<Scalars['Boolean']>;
  date_published?: Maybe<Scalars['DateTime']>;
  date_modified?: Maybe<Scalars['DateTime']>;
  comment_feed_url?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  scores?: Maybe<Scalars['JSON']>;
  score?: Maybe<Scalars['Float']>;
  lastScoredAt?: Maybe<Scalars['DateTime']>;
  content_text: Scalars['String'];
  content_html?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Scalars['JSON']>;
  readability?: Maybe<Scalars['JSON']>;
  has_readability?: Maybe<Scalars['Boolean']>;
};

export type GqlArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  released: FieldWrapper<Scalars['Boolean']>;
  applyPostProcessors: FieldWrapper<Scalars['Boolean']>;
  date_published: FieldWrapper<Scalars['DateTime']>;
  date_modified?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  comment_feed_url?: Maybe<FieldWrapper<Scalars['String']>>;
  source_url?: Maybe<FieldWrapper<Scalars['String']>>;
  url?: Maybe<FieldWrapper<Scalars['String']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  title: FieldWrapper<Scalars['String']>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  scores?: Maybe<FieldWrapper<Scalars['JSON']>>;
  score?: Maybe<FieldWrapper<Scalars['Float']>>;
  lastScoredAt: FieldWrapper<Scalars['DateTime']>;
  content_text: FieldWrapper<Scalars['String']>;
  content_html?: Maybe<FieldWrapper<Scalars['String']>>;
  enclosure?: Maybe<FieldWrapper<Scalars['JSON']>>;
  readability?: Maybe<FieldWrapper<Scalars['JSON']>>;
  has_readability?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  _count?: Maybe<FieldWrapper<GqlArticleCountAggregate>>;
  _avg?: Maybe<FieldWrapper<GqlArticleAvgAggregate>>;
  _sum?: Maybe<FieldWrapper<GqlArticleSumAggregate>>;
  _min?: Maybe<FieldWrapper<GqlArticleMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlArticleMaxAggregate>>;
};

export type GqlArticleMaxAggregate = {
  __typename?: 'ArticleMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  released?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  applyPostProcessors?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  date_published?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  date_modified?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  comment_feed_url?: Maybe<FieldWrapper<Scalars['String']>>;
  source_url?: Maybe<FieldWrapper<Scalars['String']>>;
  url?: Maybe<FieldWrapper<Scalars['String']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  score?: Maybe<FieldWrapper<Scalars['Float']>>;
  lastScoredAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  content_text?: Maybe<FieldWrapper<Scalars['String']>>;
  content_html?: Maybe<FieldWrapper<Scalars['String']>>;
  has_readability?: Maybe<FieldWrapper<Scalars['Boolean']>>;
};

export type GqlArticleMinAggregate = {
  __typename?: 'ArticleMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  released?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  applyPostProcessors?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  date_published?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  date_modified?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  comment_feed_url?: Maybe<FieldWrapper<Scalars['String']>>;
  source_url?: Maybe<FieldWrapper<Scalars['String']>>;
  url?: Maybe<FieldWrapper<Scalars['String']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  score?: Maybe<FieldWrapper<Scalars['Float']>>;
  lastScoredAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  content_text?: Maybe<FieldWrapper<Scalars['String']>>;
  content_html?: Maybe<FieldWrapper<Scalars['String']>>;
  has_readability?: Maybe<FieldWrapper<Scalars['Boolean']>>;
};

export type GqlArticleOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  released?: Maybe<GqlSortOrder>;
  applyPostProcessors?: Maybe<GqlSortOrder>;
  date_published?: Maybe<GqlSortOrder>;
  date_modified?: Maybe<GqlSortOrder>;
  comment_feed_url?: Maybe<GqlSortOrder>;
  source_url?: Maybe<GqlSortOrder>;
  url?: Maybe<GqlSortOrder>;
  author?: Maybe<GqlSortOrder>;
  title?: Maybe<GqlSortOrder>;
  tags?: Maybe<GqlSortOrder>;
  scores?: Maybe<GqlSortOrder>;
  score?: Maybe<GqlSortOrder>;
  lastScoredAt?: Maybe<GqlSortOrder>;
  content_text?: Maybe<GqlSortOrder>;
  content_html?: Maybe<GqlSortOrder>;
  enclosure?: Maybe<GqlSortOrder>;
  readability?: Maybe<GqlSortOrder>;
  has_readability?: Maybe<GqlSortOrder>;
};

export type GqlArticlePostProcessor = {
  __typename?: 'ArticlePostProcessor';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  type: FieldWrapper<Scalars['String']>;
  buckets: Array<FieldWrapper<GqlBucket>>;
};


export type GqlArticlePostProcessorBucketsArgs = {
  where?: Maybe<GqlBucketWhereInput>;
  orderBy?: Maybe<Array<GqlBucketOrderByInput>>;
  cursor?: Maybe<GqlBucketWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlBucketScalarFieldEnum>>;
};

export type GqlArticlePostProcessorCountAggregate = {
  __typename?: 'ArticlePostProcessorCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  updatedAt: FieldWrapper<Scalars['Int']>;
  type: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlArticlePostProcessorCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  type: Scalars['String'];
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutPostProcessorsInput>;
};

export type GqlArticlePostProcessorCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  type: Scalars['String'];
};

export type GqlArticlePostProcessorCreateNestedManyWithoutBucketsInput = {
  create?: Maybe<Array<GqlArticlePostProcessorCreateWithoutBucketsInput>>;
  connectOrCreate?: Maybe<Array<GqlArticlePostProcessorCreateOrConnectWithoutBucketsInput>>;
  connect?: Maybe<Array<GqlArticlePostProcessorWhereUniqueInput>>;
};

export type GqlArticlePostProcessorCreateOrConnectWithoutBucketsInput = {
  where: GqlArticlePostProcessorWhereUniqueInput;
  create: GqlArticlePostProcessorCreateWithoutBucketsInput;
};

export type GqlArticlePostProcessorCreateWithoutBucketsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  type: Scalars['String'];
};

export type GqlArticlePostProcessorGroupBy = {
  __typename?: 'ArticlePostProcessorGroupBy';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  type: FieldWrapper<Scalars['String']>;
  _count?: Maybe<FieldWrapper<GqlArticlePostProcessorCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlArticlePostProcessorMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlArticlePostProcessorMaxAggregate>>;
};

export type GqlArticlePostProcessorListRelationFilter = {
  every?: Maybe<GqlArticlePostProcessorWhereInput>;
  some?: Maybe<GqlArticlePostProcessorWhereInput>;
  none?: Maybe<GqlArticlePostProcessorWhereInput>;
};

export type GqlArticlePostProcessorMaxAggregate = {
  __typename?: 'ArticlePostProcessorMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  type?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlArticlePostProcessorMinAggregate = {
  __typename?: 'ArticlePostProcessorMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  type?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlArticlePostProcessorOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  updatedAt?: Maybe<GqlSortOrder>;
  type?: Maybe<GqlSortOrder>;
};

export enum GqlArticlePostProcessorScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Type = 'type'
}

export type GqlArticlePostProcessorScalarWhereInput = {
  AND?: Maybe<Array<GqlArticlePostProcessorScalarWhereInput>>;
  OR?: Maybe<Array<GqlArticlePostProcessorScalarWhereInput>>;
  NOT?: Maybe<Array<GqlArticlePostProcessorScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  type?: Maybe<GqlStringFilter>;
};

export type GqlArticlePostProcessorScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlArticlePostProcessorScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlArticlePostProcessorScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlArticlePostProcessorScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  type?: Maybe<GqlStringWithAggregatesFilter>;
};

export type GqlArticlePostProcessorUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  type?: Maybe<GqlStringFieldUpdateOperationsInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutPostProcessorsInput>;
};

export type GqlArticlePostProcessorUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  type?: Maybe<GqlStringFieldUpdateOperationsInput>;
};

export type GqlArticlePostProcessorUpdateManyWithWhereWithoutBucketsInput = {
  where: GqlArticlePostProcessorScalarWhereInput;
  data: GqlArticlePostProcessorUpdateManyMutationInput;
};

export type GqlArticlePostProcessorUpdateManyWithoutBucketsInput = {
  create?: Maybe<Array<GqlArticlePostProcessorCreateWithoutBucketsInput>>;
  connectOrCreate?: Maybe<Array<GqlArticlePostProcessorCreateOrConnectWithoutBucketsInput>>;
  upsert?: Maybe<Array<GqlArticlePostProcessorUpsertWithWhereUniqueWithoutBucketsInput>>;
  connect?: Maybe<Array<GqlArticlePostProcessorWhereUniqueInput>>;
  set?: Maybe<Array<GqlArticlePostProcessorWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlArticlePostProcessorWhereUniqueInput>>;
  delete?: Maybe<Array<GqlArticlePostProcessorWhereUniqueInput>>;
  update?: Maybe<Array<GqlArticlePostProcessorUpdateWithWhereUniqueWithoutBucketsInput>>;
  updateMany?: Maybe<Array<GqlArticlePostProcessorUpdateManyWithWhereWithoutBucketsInput>>;
  deleteMany?: Maybe<Array<GqlArticlePostProcessorScalarWhereInput>>;
};

export type GqlArticlePostProcessorUpdateWithWhereUniqueWithoutBucketsInput = {
  where: GqlArticlePostProcessorWhereUniqueInput;
  data: GqlArticlePostProcessorUpdateWithoutBucketsInput;
};

export type GqlArticlePostProcessorUpdateWithoutBucketsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  type?: Maybe<GqlStringFieldUpdateOperationsInput>;
};

export type GqlArticlePostProcessorUpsertWithWhereUniqueWithoutBucketsInput = {
  where: GqlArticlePostProcessorWhereUniqueInput;
  update: GqlArticlePostProcessorUpdateWithoutBucketsInput;
  create: GqlArticlePostProcessorCreateWithoutBucketsInput;
};

export type GqlArticlePostProcessorWhereInput = {
  AND?: Maybe<Array<GqlArticlePostProcessorWhereInput>>;
  OR?: Maybe<Array<GqlArticlePostProcessorWhereInput>>;
  NOT?: Maybe<Array<GqlArticlePostProcessorWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  type?: Maybe<GqlStringFilter>;
  buckets?: Maybe<GqlBucketListRelationFilter>;
};

export type GqlArticlePostProcessorWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GqlArticleRef = {
  __typename?: 'ArticleRef';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  date_released: FieldWrapper<Scalars['DateTime']>;
  ownerId: FieldWrapper<Scalars['String']>;
  favored: FieldWrapper<Scalars['Boolean']>;
  has_seen: FieldWrapper<Scalars['Boolean']>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  articleId: FieldWrapper<Scalars['String']>;
  articleRefId?: Maybe<FieldWrapper<Scalars['String']>>;
  owner: FieldWrapper<GqlUser>;
  article: FieldWrapper<GqlArticle>;
  related: Array<FieldWrapper<GqlArticleRef>>;
  articleRef?: Maybe<FieldWrapper<GqlArticleRef>>;
  stream: Array<FieldWrapper<GqlStream>>;
};


export type GqlArticleRefRelatedArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  cursor?: Maybe<GqlArticleRefWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleRefScalarFieldEnum>>;
};


export type GqlArticleRefStreamArgs = {
  where?: Maybe<GqlStreamWhereInput>;
  orderBy?: Maybe<Array<GqlStreamOrderByInput>>;
  cursor?: Maybe<GqlStreamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlStreamScalarFieldEnum>>;
};

export type GqlArticleRefCountAggregate = {
  __typename?: 'ArticleRefCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  updatedAt: FieldWrapper<Scalars['Int']>;
  date_released: FieldWrapper<Scalars['Int']>;
  ownerId: FieldWrapper<Scalars['Int']>;
  favored: FieldWrapper<Scalars['Int']>;
  has_seen: FieldWrapper<Scalars['Int']>;
  tags: FieldWrapper<Scalars['Int']>;
  articleId: FieldWrapper<Scalars['Int']>;
  articleRefId: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlArticleRefCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserCreateNestedOneWithoutArticleRefsInput>;
  article: GqlArticleCreateNestedOneWithoutArticleRefInput;
  related?: Maybe<GqlArticleRefCreateNestedManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefCreateNestedOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamCreateNestedManyWithoutArticleRefsInput>;
};

export type GqlArticleRefCreateManyArticleInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  articleRefId?: Maybe<Scalars['String']>;
};

export type GqlArticleRefCreateManyArticleInputEnvelope = {
  data: Array<GqlArticleRefCreateManyArticleInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlArticleRefCreateManyArticleRefInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  articleId: Scalars['String'];
};

export type GqlArticleRefCreateManyArticleRefInputEnvelope = {
  data: Array<GqlArticleRefCreateManyArticleRefInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlArticleRefCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  articleId: Scalars['String'];
  articleRefId?: Maybe<Scalars['String']>;
};

export type GqlArticleRefCreateManyOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  articleId: Scalars['String'];
  articleRefId?: Maybe<Scalars['String']>;
};

export type GqlArticleRefCreateManyOwnerInputEnvelope = {
  data: Array<GqlArticleRefCreateManyOwnerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlArticleRefCreateNestedManyWithoutArticleInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutArticleInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutArticleInput>>;
  createMany?: Maybe<GqlArticleRefCreateManyArticleInputEnvelope>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
};

export type GqlArticleRefCreateNestedManyWithoutArticleRefInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutArticleRefInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutArticleRefInput>>;
  createMany?: Maybe<GqlArticleRefCreateManyArticleRefInputEnvelope>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
};

export type GqlArticleRefCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<GqlArticleRefCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
};

export type GqlArticleRefCreateNestedManyWithoutStreamInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutStreamInput>>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
};

export type GqlArticleRefCreateNestedOneWithoutRelatedInput = {
  create?: Maybe<GqlArticleRefCreateWithoutRelatedInput>;
  connectOrCreate?: Maybe<GqlArticleRefCreateOrConnectWithoutRelatedInput>;
  connect?: Maybe<GqlArticleRefWhereUniqueInput>;
};

export type GqlArticleRefCreateOrConnectWithoutArticleInput = {
  where: GqlArticleRefWhereUniqueInput;
  create: GqlArticleRefCreateWithoutArticleInput;
};

export type GqlArticleRefCreateOrConnectWithoutArticleRefInput = {
  where: GqlArticleRefWhereUniqueInput;
  create: GqlArticleRefCreateWithoutArticleRefInput;
};

export type GqlArticleRefCreateOrConnectWithoutOwnerInput = {
  where: GqlArticleRefWhereUniqueInput;
  create: GqlArticleRefCreateWithoutOwnerInput;
};

export type GqlArticleRefCreateOrConnectWithoutRelatedInput = {
  where: GqlArticleRefWhereUniqueInput;
  create: GqlArticleRefCreateWithoutRelatedInput;
};

export type GqlArticleRefCreateOrConnectWithoutStreamInput = {
  where: GqlArticleRefWhereUniqueInput;
  create: GqlArticleRefCreateWithoutStreamInput;
};

export type GqlArticleRefCreateWithoutArticleInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserCreateNestedOneWithoutArticleRefsInput>;
  related?: Maybe<GqlArticleRefCreateNestedManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefCreateNestedOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamCreateNestedManyWithoutArticleRefsInput>;
};

export type GqlArticleRefCreateWithoutArticleRefInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserCreateNestedOneWithoutArticleRefsInput>;
  article: GqlArticleCreateNestedOneWithoutArticleRefInput;
  related?: Maybe<GqlArticleRefCreateNestedManyWithoutArticleRefInput>;
  stream?: Maybe<GqlStreamCreateNestedManyWithoutArticleRefsInput>;
};

export type GqlArticleRefCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  article: GqlArticleCreateNestedOneWithoutArticleRefInput;
  related?: Maybe<GqlArticleRefCreateNestedManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefCreateNestedOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamCreateNestedManyWithoutArticleRefsInput>;
};

export type GqlArticleRefCreateWithoutRelatedInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserCreateNestedOneWithoutArticleRefsInput>;
  article: GqlArticleCreateNestedOneWithoutArticleRefInput;
  articleRef?: Maybe<GqlArticleRefCreateNestedOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamCreateNestedManyWithoutArticleRefsInput>;
};

export type GqlArticleRefCreateWithoutStreamInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  date_released?: Maybe<Scalars['DateTime']>;
  favored?: Maybe<Scalars['Boolean']>;
  has_seen?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserCreateNestedOneWithoutArticleRefsInput>;
  article: GqlArticleCreateNestedOneWithoutArticleRefInput;
  related?: Maybe<GqlArticleRefCreateNestedManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefCreateNestedOneWithoutRelatedInput>;
};

export type GqlArticleRefGroupBy = {
  __typename?: 'ArticleRefGroupBy';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  date_released: FieldWrapper<Scalars['DateTime']>;
  ownerId: FieldWrapper<Scalars['String']>;
  favored: FieldWrapper<Scalars['Boolean']>;
  has_seen: FieldWrapper<Scalars['Boolean']>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  articleId: FieldWrapper<Scalars['String']>;
  articleRefId?: Maybe<FieldWrapper<Scalars['String']>>;
  _count?: Maybe<FieldWrapper<GqlArticleRefCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlArticleRefMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlArticleRefMaxAggregate>>;
};

export type GqlArticleRefListRelationFilter = {
  every?: Maybe<GqlArticleRefWhereInput>;
  some?: Maybe<GqlArticleRefWhereInput>;
  none?: Maybe<GqlArticleRefWhereInput>;
};

export type GqlArticleRefMaxAggregate = {
  __typename?: 'ArticleRefMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  date_released?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
  favored?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  has_seen?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  articleId?: Maybe<FieldWrapper<Scalars['String']>>;
  articleRefId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlArticleRefMinAggregate = {
  __typename?: 'ArticleRefMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  date_released?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
  favored?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  has_seen?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  articleId?: Maybe<FieldWrapper<Scalars['String']>>;
  articleRefId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlArticleRefOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  updatedAt?: Maybe<GqlSortOrder>;
  date_released?: Maybe<GqlSortOrder>;
  ownerId?: Maybe<GqlSortOrder>;
  favored?: Maybe<GqlSortOrder>;
  has_seen?: Maybe<GqlSortOrder>;
  tags?: Maybe<GqlSortOrder>;
  articleId?: Maybe<GqlSortOrder>;
  articleRefId?: Maybe<GqlSortOrder>;
};

export type GqlArticleRefRelationFilter = {
  is?: Maybe<GqlArticleRefWhereInput>;
  isNot?: Maybe<GqlArticleRefWhereInput>;
};

export enum GqlArticleRefScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  DateReleased = 'date_released',
  OwnerId = 'ownerId',
  Favored = 'favored',
  HasSeen = 'has_seen',
  Tags = 'tags',
  ArticleId = 'articleId',
  ArticleRefId = 'articleRefId'
}

export type GqlArticleRefScalarWhereInput = {
  AND?: Maybe<Array<GqlArticleRefScalarWhereInput>>;
  OR?: Maybe<Array<GqlArticleRefScalarWhereInput>>;
  NOT?: Maybe<Array<GqlArticleRefScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  date_released?: Maybe<GqlDateTimeFilter>;
  ownerId?: Maybe<GqlStringFilter>;
  favored?: Maybe<GqlBoolFilter>;
  has_seen?: Maybe<GqlBoolFilter>;
  tags?: Maybe<GqlJsonNullableFilter>;
  articleId?: Maybe<GqlStringFilter>;
  articleRefId?: Maybe<GqlStringNullableFilter>;
};

export type GqlArticleRefScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlArticleRefScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlArticleRefScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlArticleRefScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  date_released?: Maybe<GqlDateTimeWithAggregatesFilter>;
  ownerId?: Maybe<GqlStringWithAggregatesFilter>;
  favored?: Maybe<GqlBoolWithAggregatesFilter>;
  has_seen?: Maybe<GqlBoolWithAggregatesFilter>;
  tags?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  articleId?: Maybe<GqlStringWithAggregatesFilter>;
  articleRefId?: Maybe<GqlStringNullableWithAggregatesFilter>;
};

export type GqlArticleRefUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_released?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  favored?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  has_seen?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutArticleRefsInput>;
  article?: Maybe<GqlArticleUpdateOneRequiredWithoutArticleRefInput>;
  related?: Maybe<GqlArticleRefUpdateManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefUpdateOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamUpdateManyWithoutArticleRefsInput>;
};

export type GqlArticleRefUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_released?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  favored?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  has_seen?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
};

export type GqlArticleRefUpdateManyWithWhereWithoutArticleInput = {
  where: GqlArticleRefScalarWhereInput;
  data: GqlArticleRefUpdateManyMutationInput;
};

export type GqlArticleRefUpdateManyWithWhereWithoutArticleRefInput = {
  where: GqlArticleRefScalarWhereInput;
  data: GqlArticleRefUpdateManyMutationInput;
};

export type GqlArticleRefUpdateManyWithWhereWithoutOwnerInput = {
  where: GqlArticleRefScalarWhereInput;
  data: GqlArticleRefUpdateManyMutationInput;
};

export type GqlArticleRefUpdateManyWithWhereWithoutStreamInput = {
  where: GqlArticleRefScalarWhereInput;
  data: GqlArticleRefUpdateManyMutationInput;
};

export type GqlArticleRefUpdateManyWithoutArticleInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutArticleInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutArticleInput>>;
  upsert?: Maybe<Array<GqlArticleRefUpsertWithWhereUniqueWithoutArticleInput>>;
  createMany?: Maybe<GqlArticleRefCreateManyArticleInputEnvelope>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  set?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  delete?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  update?: Maybe<Array<GqlArticleRefUpdateWithWhereUniqueWithoutArticleInput>>;
  updateMany?: Maybe<Array<GqlArticleRefUpdateManyWithWhereWithoutArticleInput>>;
  deleteMany?: Maybe<Array<GqlArticleRefScalarWhereInput>>;
};

export type GqlArticleRefUpdateManyWithoutArticleRefInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutArticleRefInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutArticleRefInput>>;
  upsert?: Maybe<Array<GqlArticleRefUpsertWithWhereUniqueWithoutArticleRefInput>>;
  createMany?: Maybe<GqlArticleRefCreateManyArticleRefInputEnvelope>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  set?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  delete?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  update?: Maybe<Array<GqlArticleRefUpdateWithWhereUniqueWithoutArticleRefInput>>;
  updateMany?: Maybe<Array<GqlArticleRefUpdateManyWithWhereWithoutArticleRefInput>>;
  deleteMany?: Maybe<Array<GqlArticleRefScalarWhereInput>>;
};

export type GqlArticleRefUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<GqlArticleRefUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<GqlArticleRefCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  set?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  delete?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  update?: Maybe<Array<GqlArticleRefUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<GqlArticleRefUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<GqlArticleRefScalarWhereInput>>;
};

export type GqlArticleRefUpdateManyWithoutStreamInput = {
  create?: Maybe<Array<GqlArticleRefCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlArticleRefCreateOrConnectWithoutStreamInput>>;
  upsert?: Maybe<Array<GqlArticleRefUpsertWithWhereUniqueWithoutStreamInput>>;
  connect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  set?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  delete?: Maybe<Array<GqlArticleRefWhereUniqueInput>>;
  update?: Maybe<Array<GqlArticleRefUpdateWithWhereUniqueWithoutStreamInput>>;
  updateMany?: Maybe<Array<GqlArticleRefUpdateManyWithWhereWithoutStreamInput>>;
  deleteMany?: Maybe<Array<GqlArticleRefScalarWhereInput>>;
};

export type GqlArticleRefUpdateOneWithoutRelatedInput = {
  create?: Maybe<GqlArticleRefCreateWithoutRelatedInput>;
  connectOrCreate?: Maybe<GqlArticleRefCreateOrConnectWithoutRelatedInput>;
  upsert?: Maybe<GqlArticleRefUpsertWithoutRelatedInput>;
  connect?: Maybe<GqlArticleRefWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GqlArticleRefUpdateWithoutRelatedInput>;
};

export type GqlArticleRefUpdateWithWhereUniqueWithoutArticleInput = {
  where: GqlArticleRefWhereUniqueInput;
  data: GqlArticleRefUpdateWithoutArticleInput;
};

export type GqlArticleRefUpdateWithWhereUniqueWithoutArticleRefInput = {
  where: GqlArticleRefWhereUniqueInput;
  data: GqlArticleRefUpdateWithoutArticleRefInput;
};

export type GqlArticleRefUpdateWithWhereUniqueWithoutOwnerInput = {
  where: GqlArticleRefWhereUniqueInput;
  data: GqlArticleRefUpdateWithoutOwnerInput;
};

export type GqlArticleRefUpdateWithWhereUniqueWithoutStreamInput = {
  where: GqlArticleRefWhereUniqueInput;
  data: GqlArticleRefUpdateWithoutStreamInput;
};

export type GqlArticleRefUpdateWithoutArticleInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_released?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  favored?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  has_seen?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutArticleRefsInput>;
  related?: Maybe<GqlArticleRefUpdateManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefUpdateOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamUpdateManyWithoutArticleRefsInput>;
};

export type GqlArticleRefUpdateWithoutArticleRefInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_released?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  favored?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  has_seen?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutArticleRefsInput>;
  article?: Maybe<GqlArticleUpdateOneRequiredWithoutArticleRefInput>;
  related?: Maybe<GqlArticleRefUpdateManyWithoutArticleRefInput>;
  stream?: Maybe<GqlStreamUpdateManyWithoutArticleRefsInput>;
};

export type GqlArticleRefUpdateWithoutOwnerInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_released?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  favored?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  has_seen?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  article?: Maybe<GqlArticleUpdateOneRequiredWithoutArticleRefInput>;
  related?: Maybe<GqlArticleRefUpdateManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefUpdateOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamUpdateManyWithoutArticleRefsInput>;
};

export type GqlArticleRefUpdateWithoutRelatedInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_released?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  favored?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  has_seen?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutArticleRefsInput>;
  article?: Maybe<GqlArticleUpdateOneRequiredWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefUpdateOneWithoutRelatedInput>;
  stream?: Maybe<GqlStreamUpdateManyWithoutArticleRefsInput>;
};

export type GqlArticleRefUpdateWithoutStreamInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_released?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  favored?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  has_seen?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutArticleRefsInput>;
  article?: Maybe<GqlArticleUpdateOneRequiredWithoutArticleRefInput>;
  related?: Maybe<GqlArticleRefUpdateManyWithoutArticleRefInput>;
  articleRef?: Maybe<GqlArticleRefUpdateOneWithoutRelatedInput>;
};

export type GqlArticleRefUpsertWithWhereUniqueWithoutArticleInput = {
  where: GqlArticleRefWhereUniqueInput;
  update: GqlArticleRefUpdateWithoutArticleInput;
  create: GqlArticleRefCreateWithoutArticleInput;
};

export type GqlArticleRefUpsertWithWhereUniqueWithoutArticleRefInput = {
  where: GqlArticleRefWhereUniqueInput;
  update: GqlArticleRefUpdateWithoutArticleRefInput;
  create: GqlArticleRefCreateWithoutArticleRefInput;
};

export type GqlArticleRefUpsertWithWhereUniqueWithoutOwnerInput = {
  where: GqlArticleRefWhereUniqueInput;
  update: GqlArticleRefUpdateWithoutOwnerInput;
  create: GqlArticleRefCreateWithoutOwnerInput;
};

export type GqlArticleRefUpsertWithWhereUniqueWithoutStreamInput = {
  where: GqlArticleRefWhereUniqueInput;
  update: GqlArticleRefUpdateWithoutStreamInput;
  create: GqlArticleRefCreateWithoutStreamInput;
};

export type GqlArticleRefUpsertWithoutRelatedInput = {
  update: GqlArticleRefUpdateWithoutRelatedInput;
  create: GqlArticleRefCreateWithoutRelatedInput;
};

export type GqlArticleRefWhereInput = {
  AND?: Maybe<Array<GqlArticleRefWhereInput>>;
  OR?: Maybe<Array<GqlArticleRefWhereInput>>;
  NOT?: Maybe<Array<GqlArticleRefWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  date_released?: Maybe<GqlDateTimeFilter>;
  owner?: Maybe<GqlUserRelationFilter>;
  ownerId?: Maybe<GqlStringFilter>;
  favored?: Maybe<GqlBoolFilter>;
  has_seen?: Maybe<GqlBoolFilter>;
  tags?: Maybe<GqlJsonNullableFilter>;
  article?: Maybe<GqlArticleRelationFilter>;
  articleId?: Maybe<GqlStringFilter>;
  related?: Maybe<GqlArticleRefListRelationFilter>;
  articleRef?: Maybe<GqlArticleRefRelationFilter>;
  articleRefId?: Maybe<GqlStringNullableFilter>;
  stream?: Maybe<GqlStreamListRelationFilter>;
};

export type GqlArticleRefWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GqlArticleRelationFilter = {
  is?: Maybe<GqlArticleWhereInput>;
  isNot?: Maybe<GqlArticleWhereInput>;
};

export enum GqlArticleScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Released = 'released',
  ApplyPostProcessors = 'applyPostProcessors',
  DatePublished = 'date_published',
  DateModified = 'date_modified',
  CommentFeedUrl = 'comment_feed_url',
  SourceUrl = 'source_url',
  Url = 'url',
  Author = 'author',
  Title = 'title',
  Tags = 'tags',
  Scores = 'scores',
  Score = 'score',
  LastScoredAt = 'lastScoredAt',
  ContentText = 'content_text',
  ContentHtml = 'content_html',
  Enclosure = 'enclosure',
  Readability = 'readability',
  HasReadability = 'has_readability'
}

export type GqlArticleScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlArticleScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlArticleScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlArticleScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  released?: Maybe<GqlBoolWithAggregatesFilter>;
  applyPostProcessors?: Maybe<GqlBoolWithAggregatesFilter>;
  date_published?: Maybe<GqlDateTimeWithAggregatesFilter>;
  date_modified?: Maybe<GqlDateTimeNullableWithAggregatesFilter>;
  comment_feed_url?: Maybe<GqlStringNullableWithAggregatesFilter>;
  source_url?: Maybe<GqlStringNullableWithAggregatesFilter>;
  url?: Maybe<GqlStringNullableWithAggregatesFilter>;
  author?: Maybe<GqlStringNullableWithAggregatesFilter>;
  title?: Maybe<GqlStringWithAggregatesFilter>;
  tags?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  scores?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  score?: Maybe<GqlFloatNullableWithAggregatesFilter>;
  lastScoredAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  content_text?: Maybe<GqlStringWithAggregatesFilter>;
  content_html?: Maybe<GqlStringNullableWithAggregatesFilter>;
  enclosure?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  readability?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  has_readability?: Maybe<GqlBoolNullableWithAggregatesFilter>;
};

export type GqlArticleSumAggregate = {
  __typename?: 'ArticleSumAggregate';
  score?: Maybe<FieldWrapper<Scalars['Float']>>;
};

export type GqlArticleUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  released?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  applyPostProcessors?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  date_published?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_modified?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  comment_feed_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  source_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  scores?: Maybe<Scalars['JSON']>;
  score?: Maybe<GqlNullableFloatFieldUpdateOperationsInput>;
  lastScoredAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  content_text?: Maybe<GqlStringFieldUpdateOperationsInput>;
  content_html?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  enclosure?: Maybe<Scalars['JSON']>;
  readability?: Maybe<Scalars['JSON']>;
  has_readability?: Maybe<GqlNullableBoolFieldUpdateOperationsInput>;
  articleRef?: Maybe<GqlArticleRefUpdateManyWithoutArticleInput>;
};

export type GqlArticleUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  released?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  applyPostProcessors?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  date_published?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_modified?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  comment_feed_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  source_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  scores?: Maybe<Scalars['JSON']>;
  score?: Maybe<GqlNullableFloatFieldUpdateOperationsInput>;
  lastScoredAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  content_text?: Maybe<GqlStringFieldUpdateOperationsInput>;
  content_html?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  enclosure?: Maybe<Scalars['JSON']>;
  readability?: Maybe<Scalars['JSON']>;
  has_readability?: Maybe<GqlNullableBoolFieldUpdateOperationsInput>;
};

export type GqlArticleUpdateOneRequiredWithoutArticleRefInput = {
  create?: Maybe<GqlArticleCreateWithoutArticleRefInput>;
  connectOrCreate?: Maybe<GqlArticleCreateOrConnectWithoutArticleRefInput>;
  upsert?: Maybe<GqlArticleUpsertWithoutArticleRefInput>;
  connect?: Maybe<GqlArticleWhereUniqueInput>;
  update?: Maybe<GqlArticleUpdateWithoutArticleRefInput>;
};

export type GqlArticleUpdateWithoutArticleRefInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  released?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  applyPostProcessors?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  date_published?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  date_modified?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  comment_feed_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  source_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  scores?: Maybe<Scalars['JSON']>;
  score?: Maybe<GqlNullableFloatFieldUpdateOperationsInput>;
  lastScoredAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  content_text?: Maybe<GqlStringFieldUpdateOperationsInput>;
  content_html?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  enclosure?: Maybe<Scalars['JSON']>;
  readability?: Maybe<Scalars['JSON']>;
  has_readability?: Maybe<GqlNullableBoolFieldUpdateOperationsInput>;
};

export type GqlArticleUpsertWithoutArticleRefInput = {
  update: GqlArticleUpdateWithoutArticleRefInput;
  create: GqlArticleCreateWithoutArticleRefInput;
};

export type GqlArticleWhereInput = {
  AND?: Maybe<Array<GqlArticleWhereInput>>;
  OR?: Maybe<Array<GqlArticleWhereInput>>;
  NOT?: Maybe<Array<GqlArticleWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  released?: Maybe<GqlBoolFilter>;
  applyPostProcessors?: Maybe<GqlBoolFilter>;
  date_published?: Maybe<GqlDateTimeFilter>;
  date_modified?: Maybe<GqlDateTimeNullableFilter>;
  comment_feed_url?: Maybe<GqlStringNullableFilter>;
  source_url?: Maybe<GqlStringNullableFilter>;
  url?: Maybe<GqlStringNullableFilter>;
  author?: Maybe<GqlStringNullableFilter>;
  title?: Maybe<GqlStringFilter>;
  tags?: Maybe<GqlJsonNullableFilter>;
  scores?: Maybe<GqlJsonNullableFilter>;
  score?: Maybe<GqlFloatNullableFilter>;
  lastScoredAt?: Maybe<GqlDateTimeFilter>;
  content_text?: Maybe<GqlStringFilter>;
  content_html?: Maybe<GqlStringNullableFilter>;
  enclosure?: Maybe<GqlJsonNullableFilter>;
  articleRef?: Maybe<GqlArticleRefListRelationFilter>;
  readability?: Maybe<GqlJsonNullableFilter>;
  has_readability?: Maybe<GqlBoolNullableFilter>;
};

export type GqlArticleWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GqlBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type GqlBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolFilter>;
};

export type GqlBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolNullableFilter>;
};

export type GqlBoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedBoolNullableFilter>;
  _max?: Maybe<GqlNestedBoolNullableFilter>;
};

export type GqlBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedBoolFilter>;
  _max?: Maybe<GqlNestedBoolFilter>;
};

export type GqlBucket = {
  __typename?: 'Bucket';
  id: FieldWrapper<Scalars['String']>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  listed: FieldWrapper<Scalars['Boolean']>;
  in_focus: FieldWrapper<Scalars['Boolean']>;
  used_for?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  title: FieldWrapper<Scalars['String']>;
  ownerId: FieldWrapper<Scalars['String']>;
  filter_expr?: Maybe<FieldWrapper<Scalars['JSON']>>;
  retention_policy?: Maybe<FieldWrapper<Scalars['JSON']>>;
  replay_policy?: Maybe<FieldWrapper<Scalars['JSON']>>;
  content_resolution?: Maybe<FieldWrapper<Scalars['JSON']>>;
  lastPostProcessedAt: FieldWrapper<Scalars['DateTime']>;
  streamId: FieldWrapper<Scalars['String']>;
  owner: FieldWrapper<GqlUser>;
  subscriptions: Array<FieldWrapper<GqlSubscription>>;
  postProcessors: Array<FieldWrapper<GqlArticlePostProcessor>>;
  stream: FieldWrapper<GqlStream>;
};


export type GqlBucketSubscriptionsArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  cursor?: Maybe<GqlSubscriptionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlSubscriptionScalarFieldEnum>>;
};


export type GqlBucketPostProcessorsArgs = {
  where?: Maybe<GqlArticlePostProcessorWhereInput>;
  orderBy?: Maybe<Array<GqlArticlePostProcessorOrderByInput>>;
  cursor?: Maybe<GqlArticlePostProcessorWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticlePostProcessorScalarFieldEnum>>;
};

export type GqlBucketCountAggregate = {
  __typename?: 'BucketCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  description: FieldWrapper<Scalars['Int']>;
  listed: FieldWrapper<Scalars['Int']>;
  in_focus: FieldWrapper<Scalars['Int']>;
  used_for: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  updatedAt: FieldWrapper<Scalars['Int']>;
  title: FieldWrapper<Scalars['Int']>;
  ownerId: FieldWrapper<Scalars['Int']>;
  filter_expr: FieldWrapper<Scalars['Int']>;
  retention_policy: FieldWrapper<Scalars['Int']>;
  replay_policy: FieldWrapper<Scalars['Int']>;
  content_resolution: FieldWrapper<Scalars['Int']>;
  lastPostProcessedAt: FieldWrapper<Scalars['Int']>;
  streamId: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlBucketCreateInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
  owner: GqlUserCreateNestedOneWithoutBucketsInput;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutBucketInput>;
  postProcessors?: Maybe<GqlArticlePostProcessorCreateNestedManyWithoutBucketsInput>;
  stream: GqlStreamCreateNestedOneWithoutBucketsInput;
};

export type GqlBucketCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  ownerId: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
  streamId: Scalars['String'];
};

export type GqlBucketCreateManyOwnerInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
  streamId: Scalars['String'];
};

export type GqlBucketCreateManyOwnerInputEnvelope = {
  data: Array<GqlBucketCreateManyOwnerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlBucketCreateManyStreamInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  ownerId: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
};

export type GqlBucketCreateManyStreamInputEnvelope = {
  data: Array<GqlBucketCreateManyStreamInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlBucketCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlBucketCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlBucketCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<GqlBucketCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
};

export type GqlBucketCreateNestedManyWithoutPostProcessorsInput = {
  create?: Maybe<Array<GqlBucketCreateWithoutPostProcessorsInput>>;
  connectOrCreate?: Maybe<Array<GqlBucketCreateOrConnectWithoutPostProcessorsInput>>;
  connect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
};

export type GqlBucketCreateNestedManyWithoutStreamInput = {
  create?: Maybe<Array<GqlBucketCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlBucketCreateOrConnectWithoutStreamInput>>;
  createMany?: Maybe<GqlBucketCreateManyStreamInputEnvelope>;
  connect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
};

export type GqlBucketCreateNestedOneWithoutSubscriptionsInput = {
  create?: Maybe<GqlBucketCreateWithoutSubscriptionsInput>;
  connectOrCreate?: Maybe<GqlBucketCreateOrConnectWithoutSubscriptionsInput>;
  connect?: Maybe<GqlBucketWhereUniqueInput>;
};

export type GqlBucketCreateOrConnectWithoutOwnerInput = {
  where: GqlBucketWhereUniqueInput;
  create: GqlBucketCreateWithoutOwnerInput;
};

export type GqlBucketCreateOrConnectWithoutPostProcessorsInput = {
  where: GqlBucketWhereUniqueInput;
  create: GqlBucketCreateWithoutPostProcessorsInput;
};

export type GqlBucketCreateOrConnectWithoutStreamInput = {
  where: GqlBucketWhereUniqueInput;
  create: GqlBucketCreateWithoutStreamInput;
};

export type GqlBucketCreateOrConnectWithoutSubscriptionsInput = {
  where: GqlBucketWhereUniqueInput;
  create: GqlBucketCreateWithoutSubscriptionsInput;
};

export type GqlBucketCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutBucketInput>;
  postProcessors?: Maybe<GqlArticlePostProcessorCreateNestedManyWithoutBucketsInput>;
  stream: GqlStreamCreateNestedOneWithoutBucketsInput;
};

export type GqlBucketCreateWithoutPostProcessorsInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
  owner: GqlUserCreateNestedOneWithoutBucketsInput;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutBucketInput>;
  stream: GqlStreamCreateNestedOneWithoutBucketsInput;
};

export type GqlBucketCreateWithoutStreamInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
  owner: GqlUserCreateNestedOneWithoutBucketsInput;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutBucketInput>;
  postProcessors?: Maybe<GqlArticlePostProcessorCreateNestedManyWithoutBucketsInput>;
};

export type GqlBucketCreateWithoutSubscriptionsInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  listed?: Maybe<Scalars['Boolean']>;
  in_focus?: Maybe<Scalars['Boolean']>;
  used_for?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<Scalars['DateTime']>;
  owner: GqlUserCreateNestedOneWithoutBucketsInput;
  postProcessors?: Maybe<GqlArticlePostProcessorCreateNestedManyWithoutBucketsInput>;
  stream: GqlStreamCreateNestedOneWithoutBucketsInput;
};

export type GqlBucketGroupBy = {
  __typename?: 'BucketGroupBy';
  id: FieldWrapper<Scalars['String']>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  listed: FieldWrapper<Scalars['Boolean']>;
  in_focus: FieldWrapper<Scalars['Boolean']>;
  used_for?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  title: FieldWrapper<Scalars['String']>;
  ownerId: FieldWrapper<Scalars['String']>;
  filter_expr?: Maybe<FieldWrapper<Scalars['JSON']>>;
  retention_policy?: Maybe<FieldWrapper<Scalars['JSON']>>;
  replay_policy?: Maybe<FieldWrapper<Scalars['JSON']>>;
  content_resolution?: Maybe<FieldWrapper<Scalars['JSON']>>;
  lastPostProcessedAt: FieldWrapper<Scalars['DateTime']>;
  streamId: FieldWrapper<Scalars['String']>;
  _count?: Maybe<FieldWrapper<GqlBucketCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlBucketMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlBucketMaxAggregate>>;
};

export type GqlBucketListRelationFilter = {
  every?: Maybe<GqlBucketWhereInput>;
  some?: Maybe<GqlBucketWhereInput>;
  none?: Maybe<GqlBucketWhereInput>;
};

export type GqlBucketMaxAggregate = {
  __typename?: 'BucketMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  listed?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  in_focus?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  used_for?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
  lastPostProcessedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  streamId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlBucketMinAggregate = {
  __typename?: 'BucketMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  listed?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  in_focus?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  used_for?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
  lastPostProcessedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  streamId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlBucketOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  description?: Maybe<GqlSortOrder>;
  listed?: Maybe<GqlSortOrder>;
  in_focus?: Maybe<GqlSortOrder>;
  used_for?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  updatedAt?: Maybe<GqlSortOrder>;
  title?: Maybe<GqlSortOrder>;
  ownerId?: Maybe<GqlSortOrder>;
  filter_expr?: Maybe<GqlSortOrder>;
  retention_policy?: Maybe<GqlSortOrder>;
  replay_policy?: Maybe<GqlSortOrder>;
  content_resolution?: Maybe<GqlSortOrder>;
  lastPostProcessedAt?: Maybe<GqlSortOrder>;
  streamId?: Maybe<GqlSortOrder>;
};

export type GqlBucketRelationFilter = {
  is?: Maybe<GqlBucketWhereInput>;
  isNot?: Maybe<GqlBucketWhereInput>;
};

export enum GqlBucketScalarFieldEnum {
  Id = 'id',
  Description = 'description',
  Listed = 'listed',
  InFocus = 'in_focus',
  UsedFor = 'used_for',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  OwnerId = 'ownerId',
  FilterExpr = 'filter_expr',
  RetentionPolicy = 'retention_policy',
  ReplayPolicy = 'replay_policy',
  ContentResolution = 'content_resolution',
  LastPostProcessedAt = 'lastPostProcessedAt',
  StreamId = 'streamId'
}

export type GqlBucketScalarWhereInput = {
  AND?: Maybe<Array<GqlBucketScalarWhereInput>>;
  OR?: Maybe<Array<GqlBucketScalarWhereInput>>;
  NOT?: Maybe<Array<GqlBucketScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  description?: Maybe<GqlStringNullableFilter>;
  listed?: Maybe<GqlBoolFilter>;
  in_focus?: Maybe<GqlBoolFilter>;
  used_for?: Maybe<GqlStringNullableFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  title?: Maybe<GqlStringFilter>;
  ownerId?: Maybe<GqlStringFilter>;
  filter_expr?: Maybe<GqlJsonNullableFilter>;
  retention_policy?: Maybe<GqlJsonNullableFilter>;
  replay_policy?: Maybe<GqlJsonNullableFilter>;
  content_resolution?: Maybe<GqlJsonNullableFilter>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFilter>;
  streamId?: Maybe<GqlStringFilter>;
};

export type GqlBucketScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlBucketScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlBucketScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlBucketScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  description?: Maybe<GqlStringNullableWithAggregatesFilter>;
  listed?: Maybe<GqlBoolWithAggregatesFilter>;
  in_focus?: Maybe<GqlBoolWithAggregatesFilter>;
  used_for?: Maybe<GqlStringNullableWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  title?: Maybe<GqlStringWithAggregatesFilter>;
  ownerId?: Maybe<GqlStringWithAggregatesFilter>;
  filter_expr?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  retention_policy?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  replay_policy?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  content_resolution?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  lastPostProcessedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  streamId?: Maybe<GqlStringWithAggregatesFilter>;
};

export type GqlBucketUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  in_focus?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  used_for?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutBucketsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutBucketInput>;
  postProcessors?: Maybe<GqlArticlePostProcessorUpdateManyWithoutBucketsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutBucketsInput>;
};

export type GqlBucketUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  in_focus?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  used_for?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
};

export type GqlBucketUpdateManyWithWhereWithoutOwnerInput = {
  where: GqlBucketScalarWhereInput;
  data: GqlBucketUpdateManyMutationInput;
};

export type GqlBucketUpdateManyWithWhereWithoutPostProcessorsInput = {
  where: GqlBucketScalarWhereInput;
  data: GqlBucketUpdateManyMutationInput;
};

export type GqlBucketUpdateManyWithWhereWithoutStreamInput = {
  where: GqlBucketScalarWhereInput;
  data: GqlBucketUpdateManyMutationInput;
};

export type GqlBucketUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlBucketCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlBucketCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<GqlBucketUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<GqlBucketCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  set?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  delete?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  update?: Maybe<Array<GqlBucketUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<GqlBucketUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<GqlBucketScalarWhereInput>>;
};

export type GqlBucketUpdateManyWithoutPostProcessorsInput = {
  create?: Maybe<Array<GqlBucketCreateWithoutPostProcessorsInput>>;
  connectOrCreate?: Maybe<Array<GqlBucketCreateOrConnectWithoutPostProcessorsInput>>;
  upsert?: Maybe<Array<GqlBucketUpsertWithWhereUniqueWithoutPostProcessorsInput>>;
  connect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  set?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  delete?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  update?: Maybe<Array<GqlBucketUpdateWithWhereUniqueWithoutPostProcessorsInput>>;
  updateMany?: Maybe<Array<GqlBucketUpdateManyWithWhereWithoutPostProcessorsInput>>;
  deleteMany?: Maybe<Array<GqlBucketScalarWhereInput>>;
};

export type GqlBucketUpdateManyWithoutStreamInput = {
  create?: Maybe<Array<GqlBucketCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlBucketCreateOrConnectWithoutStreamInput>>;
  upsert?: Maybe<Array<GqlBucketUpsertWithWhereUniqueWithoutStreamInput>>;
  createMany?: Maybe<GqlBucketCreateManyStreamInputEnvelope>;
  connect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  set?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  delete?: Maybe<Array<GqlBucketWhereUniqueInput>>;
  update?: Maybe<Array<GqlBucketUpdateWithWhereUniqueWithoutStreamInput>>;
  updateMany?: Maybe<Array<GqlBucketUpdateManyWithWhereWithoutStreamInput>>;
  deleteMany?: Maybe<Array<GqlBucketScalarWhereInput>>;
};

export type GqlBucketUpdateOneRequiredWithoutSubscriptionsInput = {
  create?: Maybe<GqlBucketCreateWithoutSubscriptionsInput>;
  connectOrCreate?: Maybe<GqlBucketCreateOrConnectWithoutSubscriptionsInput>;
  upsert?: Maybe<GqlBucketUpsertWithoutSubscriptionsInput>;
  connect?: Maybe<GqlBucketWhereUniqueInput>;
  update?: Maybe<GqlBucketUpdateWithoutSubscriptionsInput>;
};

export type GqlBucketUpdateWithWhereUniqueWithoutOwnerInput = {
  where: GqlBucketWhereUniqueInput;
  data: GqlBucketUpdateWithoutOwnerInput;
};

export type GqlBucketUpdateWithWhereUniqueWithoutPostProcessorsInput = {
  where: GqlBucketWhereUniqueInput;
  data: GqlBucketUpdateWithoutPostProcessorsInput;
};

export type GqlBucketUpdateWithWhereUniqueWithoutStreamInput = {
  where: GqlBucketWhereUniqueInput;
  data: GqlBucketUpdateWithoutStreamInput;
};

export type GqlBucketUpdateWithoutOwnerInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  in_focus?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  used_for?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutBucketInput>;
  postProcessors?: Maybe<GqlArticlePostProcessorUpdateManyWithoutBucketsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutBucketsInput>;
};

export type GqlBucketUpdateWithoutPostProcessorsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  in_focus?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  used_for?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutBucketsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutBucketInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutBucketsInput>;
};

export type GqlBucketUpdateWithoutStreamInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  in_focus?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  used_for?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutBucketsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutBucketInput>;
  postProcessors?: Maybe<GqlArticlePostProcessorUpdateManyWithoutBucketsInput>;
};

export type GqlBucketUpdateWithoutSubscriptionsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  in_focus?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  used_for?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  filter_expr?: Maybe<Scalars['JSON']>;
  retention_policy?: Maybe<Scalars['JSON']>;
  replay_policy?: Maybe<Scalars['JSON']>;
  content_resolution?: Maybe<Scalars['JSON']>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutBucketsInput>;
  postProcessors?: Maybe<GqlArticlePostProcessorUpdateManyWithoutBucketsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutBucketsInput>;
};

export type GqlBucketUpsertWithWhereUniqueWithoutOwnerInput = {
  where: GqlBucketWhereUniqueInput;
  update: GqlBucketUpdateWithoutOwnerInput;
  create: GqlBucketCreateWithoutOwnerInput;
};

export type GqlBucketUpsertWithWhereUniqueWithoutPostProcessorsInput = {
  where: GqlBucketWhereUniqueInput;
  update: GqlBucketUpdateWithoutPostProcessorsInput;
  create: GqlBucketCreateWithoutPostProcessorsInput;
};

export type GqlBucketUpsertWithWhereUniqueWithoutStreamInput = {
  where: GqlBucketWhereUniqueInput;
  update: GqlBucketUpdateWithoutStreamInput;
  create: GqlBucketCreateWithoutStreamInput;
};

export type GqlBucketUpsertWithoutSubscriptionsInput = {
  update: GqlBucketUpdateWithoutSubscriptionsInput;
  create: GqlBucketCreateWithoutSubscriptionsInput;
};

export type GqlBucketWhereInput = {
  AND?: Maybe<Array<GqlBucketWhereInput>>;
  OR?: Maybe<Array<GqlBucketWhereInput>>;
  NOT?: Maybe<Array<GqlBucketWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  description?: Maybe<GqlStringNullableFilter>;
  listed?: Maybe<GqlBoolFilter>;
  in_focus?: Maybe<GqlBoolFilter>;
  used_for?: Maybe<GqlStringNullableFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  title?: Maybe<GqlStringFilter>;
  owner?: Maybe<GqlUserRelationFilter>;
  ownerId?: Maybe<GqlStringFilter>;
  subscriptions?: Maybe<GqlSubscriptionListRelationFilter>;
  filter_expr?: Maybe<GqlJsonNullableFilter>;
  retention_policy?: Maybe<GqlJsonNullableFilter>;
  replay_policy?: Maybe<GqlJsonNullableFilter>;
  content_resolution?: Maybe<GqlJsonNullableFilter>;
  lastPostProcessedAt?: Maybe<GqlDateTimeFilter>;
  postProcessors?: Maybe<GqlArticlePostProcessorListRelationFilter>;
  stream?: Maybe<GqlStreamRelationFilter>;
  streamId?: Maybe<GqlStringFilter>;
};

export type GqlBucketWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type GqlDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type GqlDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeFilter>;
};

export type GqlDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeNullableFilter>;
};

export type GqlDateTimeNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedDateTimeNullableFilter>;
  _max?: Maybe<GqlNestedDateTimeNullableFilter>;
};

export type GqlDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedDateTimeFilter>;
  _max?: Maybe<GqlNestedDateTimeFilter>;
};

export type GqlDiscoveredFeeds = {
  __typename?: 'DiscoveredFeeds';
  nativeFeeds?: Maybe<Array<FieldWrapper<GqlNativeFeedRef>>>;
  generatedFeeds?: Maybe<FieldWrapper<GqlProxyFeeds>>;
};

export type GqlFeed = {
  __typename?: 'Feed';
  id: FieldWrapper<Scalars['String']>;
  feed_url: FieldWrapper<Scalars['String']>;
  home_page_url?: Maybe<FieldWrapper<Scalars['String']>>;
  fulltext_data?: Maybe<FieldWrapper<Scalars['String']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  lang?: Maybe<FieldWrapper<Scalars['String']>>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  enclosures?: Maybe<FieldWrapper<Scalars['JSON']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  expired: FieldWrapper<Scalars['Boolean']>;
  broken: FieldWrapper<Scalars['Boolean']>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  status: FieldWrapper<Scalars['String']>;
  streamId: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  stream: FieldWrapper<GqlStream>;
  subscriptions: Array<FieldWrapper<GqlSubscription>>;
  events: Array<FieldWrapper<GqlFeedEvent>>;
};


export type GqlFeedSubscriptionsArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  cursor?: Maybe<GqlSubscriptionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlSubscriptionScalarFieldEnum>>;
};


export type GqlFeedEventsArgs = {
  where?: Maybe<GqlFeedEventWhereInput>;
  orderBy?: Maybe<Array<GqlFeedEventOrderByInput>>;
  cursor?: Maybe<GqlFeedEventWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlFeedEventScalarFieldEnum>>;
};

export type GqlFeedAvgAggregate = {
  __typename?: 'FeedAvgAggregate';
  harvestIntervalMinutes?: Maybe<FieldWrapper<Scalars['Float']>>;
};

export type GqlFeedCountAggregate = {
  __typename?: 'FeedCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  feed_url: FieldWrapper<Scalars['Int']>;
  home_page_url: FieldWrapper<Scalars['Int']>;
  fulltext_data: FieldWrapper<Scalars['Int']>;
  title: FieldWrapper<Scalars['Int']>;
  lang: FieldWrapper<Scalars['Int']>;
  tags: FieldWrapper<Scalars['Int']>;
  enclosures: FieldWrapper<Scalars['Int']>;
  author: FieldWrapper<Scalars['Int']>;
  expired: FieldWrapper<Scalars['Int']>;
  broken: FieldWrapper<Scalars['Int']>;
  description: FieldWrapper<Scalars['Int']>;
  status: FieldWrapper<Scalars['Int']>;
  harvestIntervalMinutes: FieldWrapper<Scalars['Int']>;
  nextHarvestAt: FieldWrapper<Scalars['Int']>;
  streamId: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  updatedAt: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlFeedCreateInput = {
  id?: Maybe<Scalars['String']>;
  feed_url: Scalars['String'];
  home_page_url?: Maybe<Scalars['String']>;
  fulltext_data?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  broken?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  harvestIntervalMinutes?: Maybe<Scalars['Int']>;
  nextHarvestAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stream: GqlStreamCreateNestedOneWithoutFeedsInput;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutFeedInput>;
  events?: Maybe<GqlFeedEventCreateNestedManyWithoutFeedInput>;
};

export type GqlFeedCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  feed_url: Scalars['String'];
  home_page_url?: Maybe<Scalars['String']>;
  fulltext_data?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  broken?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  harvestIntervalMinutes?: Maybe<Scalars['Int']>;
  nextHarvestAt?: Maybe<Scalars['DateTime']>;
  streamId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GqlFeedCreateManyStreamInput = {
  id?: Maybe<Scalars['String']>;
  feed_url: Scalars['String'];
  home_page_url?: Maybe<Scalars['String']>;
  fulltext_data?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  broken?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  harvestIntervalMinutes?: Maybe<Scalars['Int']>;
  nextHarvestAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GqlFeedCreateManyStreamInputEnvelope = {
  data: Array<GqlFeedCreateManyStreamInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlFeedCreateNestedManyWithoutStreamInput = {
  create?: Maybe<Array<GqlFeedCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlFeedCreateOrConnectWithoutStreamInput>>;
  createMany?: Maybe<GqlFeedCreateManyStreamInputEnvelope>;
  connect?: Maybe<Array<GqlFeedWhereUniqueInput>>;
};

export type GqlFeedCreateNestedOneWithoutEventsInput = {
  create?: Maybe<GqlFeedCreateWithoutEventsInput>;
  connectOrCreate?: Maybe<GqlFeedCreateOrConnectWithoutEventsInput>;
  connect?: Maybe<GqlFeedWhereUniqueInput>;
};

export type GqlFeedCreateNestedOneWithoutSubscriptionsInput = {
  create?: Maybe<GqlFeedCreateWithoutSubscriptionsInput>;
  connectOrCreate?: Maybe<GqlFeedCreateOrConnectWithoutSubscriptionsInput>;
  connect?: Maybe<GqlFeedWhereUniqueInput>;
};

export type GqlFeedCreateOrConnectWithoutEventsInput = {
  where: GqlFeedWhereUniqueInput;
  create: GqlFeedCreateWithoutEventsInput;
};

export type GqlFeedCreateOrConnectWithoutStreamInput = {
  where: GqlFeedWhereUniqueInput;
  create: GqlFeedCreateWithoutStreamInput;
};

export type GqlFeedCreateOrConnectWithoutSubscriptionsInput = {
  where: GqlFeedWhereUniqueInput;
  create: GqlFeedCreateWithoutSubscriptionsInput;
};

export type GqlFeedCreateWithoutEventsInput = {
  id?: Maybe<Scalars['String']>;
  feed_url: Scalars['String'];
  home_page_url?: Maybe<Scalars['String']>;
  fulltext_data?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  broken?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  harvestIntervalMinutes?: Maybe<Scalars['Int']>;
  nextHarvestAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stream: GqlStreamCreateNestedOneWithoutFeedsInput;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutFeedInput>;
};

export type GqlFeedCreateWithoutStreamInput = {
  id?: Maybe<Scalars['String']>;
  feed_url: Scalars['String'];
  home_page_url?: Maybe<Scalars['String']>;
  fulltext_data?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  broken?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  harvestIntervalMinutes?: Maybe<Scalars['Int']>;
  nextHarvestAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutFeedInput>;
  events?: Maybe<GqlFeedEventCreateNestedManyWithoutFeedInput>;
};

export type GqlFeedCreateWithoutSubscriptionsInput = {
  id?: Maybe<Scalars['String']>;
  feed_url: Scalars['String'];
  home_page_url?: Maybe<Scalars['String']>;
  fulltext_data?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  broken?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  harvestIntervalMinutes?: Maybe<Scalars['Int']>;
  nextHarvestAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stream: GqlStreamCreateNestedOneWithoutFeedsInput;
  events?: Maybe<GqlFeedEventCreateNestedManyWithoutFeedInput>;
};

export type GqlFeedEvent = {
  __typename?: 'FeedEvent';
  id: FieldWrapper<Scalars['String']>;
  message: FieldWrapper<Scalars['JSON']>;
  feedId: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  is_error: FieldWrapper<Scalars['Boolean']>;
  feed: FieldWrapper<GqlFeed>;
};

export type GqlFeedEventCountAggregate = {
  __typename?: 'FeedEventCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  message: FieldWrapper<Scalars['Int']>;
  feedId: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  is_error: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlFeedEventCreateInput = {
  id?: Maybe<Scalars['String']>;
  message: Scalars['JSON'];
  createdAt?: Maybe<Scalars['DateTime']>;
  is_error?: Maybe<Scalars['Boolean']>;
  feed: GqlFeedCreateNestedOneWithoutEventsInput;
};

export type GqlFeedEventCreateManyFeedInput = {
  id?: Maybe<Scalars['String']>;
  message: Scalars['JSON'];
  createdAt?: Maybe<Scalars['DateTime']>;
  is_error?: Maybe<Scalars['Boolean']>;
};

export type GqlFeedEventCreateManyFeedInputEnvelope = {
  data: Array<GqlFeedEventCreateManyFeedInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlFeedEventCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  message: Scalars['JSON'];
  feedId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  is_error?: Maybe<Scalars['Boolean']>;
};

export type GqlFeedEventCreateNestedManyWithoutFeedInput = {
  create?: Maybe<Array<GqlFeedEventCreateWithoutFeedInput>>;
  connectOrCreate?: Maybe<Array<GqlFeedEventCreateOrConnectWithoutFeedInput>>;
  createMany?: Maybe<GqlFeedEventCreateManyFeedInputEnvelope>;
  connect?: Maybe<Array<GqlFeedEventWhereUniqueInput>>;
};

export type GqlFeedEventCreateOrConnectWithoutFeedInput = {
  where: GqlFeedEventWhereUniqueInput;
  create: GqlFeedEventCreateWithoutFeedInput;
};

export type GqlFeedEventCreateWithoutFeedInput = {
  id?: Maybe<Scalars['String']>;
  message: Scalars['JSON'];
  createdAt?: Maybe<Scalars['DateTime']>;
  is_error?: Maybe<Scalars['Boolean']>;
};

export type GqlFeedEventGroupBy = {
  __typename?: 'FeedEventGroupBy';
  id: FieldWrapper<Scalars['String']>;
  message: FieldWrapper<Scalars['JSON']>;
  feedId: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  is_error: FieldWrapper<Scalars['Boolean']>;
  _count?: Maybe<FieldWrapper<GqlFeedEventCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlFeedEventMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlFeedEventMaxAggregate>>;
};

export type GqlFeedEventListRelationFilter = {
  every?: Maybe<GqlFeedEventWhereInput>;
  some?: Maybe<GqlFeedEventWhereInput>;
  none?: Maybe<GqlFeedEventWhereInput>;
};

export type GqlFeedEventMaxAggregate = {
  __typename?: 'FeedEventMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  feedId?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  is_error?: Maybe<FieldWrapper<Scalars['Boolean']>>;
};

export type GqlFeedEventMinAggregate = {
  __typename?: 'FeedEventMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  feedId?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  is_error?: Maybe<FieldWrapper<Scalars['Boolean']>>;
};

export type GqlFeedEventOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  message?: Maybe<GqlSortOrder>;
  feedId?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  is_error?: Maybe<GqlSortOrder>;
};

export enum GqlFeedEventScalarFieldEnum {
  Id = 'id',
  Message = 'message',
  FeedId = 'feedId',
  CreatedAt = 'createdAt',
  IsError = 'is_error'
}

export type GqlFeedEventScalarWhereInput = {
  AND?: Maybe<Array<GqlFeedEventScalarWhereInput>>;
  OR?: Maybe<Array<GqlFeedEventScalarWhereInput>>;
  NOT?: Maybe<Array<GqlFeedEventScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  message?: Maybe<GqlJsonFilter>;
  feedId?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  is_error?: Maybe<GqlBoolFilter>;
};

export type GqlFeedEventScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlFeedEventScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlFeedEventScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlFeedEventScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  message?: Maybe<GqlJsonWithAggregatesFilter>;
  feedId?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  is_error?: Maybe<GqlBoolWithAggregatesFilter>;
};

export type GqlFeedEventUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  message?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  is_error?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  feed?: Maybe<GqlFeedUpdateOneRequiredWithoutEventsInput>;
};

export type GqlFeedEventUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  message?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  is_error?: Maybe<GqlBoolFieldUpdateOperationsInput>;
};

export type GqlFeedEventUpdateManyWithWhereWithoutFeedInput = {
  where: GqlFeedEventScalarWhereInput;
  data: GqlFeedEventUpdateManyMutationInput;
};

export type GqlFeedEventUpdateManyWithoutFeedInput = {
  create?: Maybe<Array<GqlFeedEventCreateWithoutFeedInput>>;
  connectOrCreate?: Maybe<Array<GqlFeedEventCreateOrConnectWithoutFeedInput>>;
  upsert?: Maybe<Array<GqlFeedEventUpsertWithWhereUniqueWithoutFeedInput>>;
  createMany?: Maybe<GqlFeedEventCreateManyFeedInputEnvelope>;
  connect?: Maybe<Array<GqlFeedEventWhereUniqueInput>>;
  set?: Maybe<Array<GqlFeedEventWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlFeedEventWhereUniqueInput>>;
  delete?: Maybe<Array<GqlFeedEventWhereUniqueInput>>;
  update?: Maybe<Array<GqlFeedEventUpdateWithWhereUniqueWithoutFeedInput>>;
  updateMany?: Maybe<Array<GqlFeedEventUpdateManyWithWhereWithoutFeedInput>>;
  deleteMany?: Maybe<Array<GqlFeedEventScalarWhereInput>>;
};

export type GqlFeedEventUpdateWithWhereUniqueWithoutFeedInput = {
  where: GqlFeedEventWhereUniqueInput;
  data: GqlFeedEventUpdateWithoutFeedInput;
};

export type GqlFeedEventUpdateWithoutFeedInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  message?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  is_error?: Maybe<GqlBoolFieldUpdateOperationsInput>;
};

export type GqlFeedEventUpsertWithWhereUniqueWithoutFeedInput = {
  where: GqlFeedEventWhereUniqueInput;
  update: GqlFeedEventUpdateWithoutFeedInput;
  create: GqlFeedEventCreateWithoutFeedInput;
};

export type GqlFeedEventWhereInput = {
  AND?: Maybe<Array<GqlFeedEventWhereInput>>;
  OR?: Maybe<Array<GqlFeedEventWhereInput>>;
  NOT?: Maybe<Array<GqlFeedEventWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  message?: Maybe<GqlJsonFilter>;
  feed?: Maybe<GqlFeedRelationFilter>;
  feedId?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  is_error?: Maybe<GqlBoolFilter>;
};

export type GqlFeedEventWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GqlFeedGroupBy = {
  __typename?: 'FeedGroupBy';
  id: FieldWrapper<Scalars['String']>;
  feed_url: FieldWrapper<Scalars['String']>;
  home_page_url?: Maybe<FieldWrapper<Scalars['String']>>;
  fulltext_data?: Maybe<FieldWrapper<Scalars['String']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  lang?: Maybe<FieldWrapper<Scalars['String']>>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  enclosures?: Maybe<FieldWrapper<Scalars['JSON']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  expired: FieldWrapper<Scalars['Boolean']>;
  broken: FieldWrapper<Scalars['Boolean']>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  status: FieldWrapper<Scalars['String']>;
  harvestIntervalMinutes?: Maybe<FieldWrapper<Scalars['Int']>>;
  nextHarvestAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  streamId: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  _count?: Maybe<FieldWrapper<GqlFeedCountAggregate>>;
  _avg?: Maybe<FieldWrapper<GqlFeedAvgAggregate>>;
  _sum?: Maybe<FieldWrapper<GqlFeedSumAggregate>>;
  _min?: Maybe<FieldWrapper<GqlFeedMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlFeedMaxAggregate>>;
};

export type GqlFeedListRelationFilter = {
  every?: Maybe<GqlFeedWhereInput>;
  some?: Maybe<GqlFeedWhereInput>;
  none?: Maybe<GqlFeedWhereInput>;
};

export type GqlFeedMaxAggregate = {
  __typename?: 'FeedMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  feed_url?: Maybe<FieldWrapper<Scalars['String']>>;
  home_page_url?: Maybe<FieldWrapper<Scalars['String']>>;
  fulltext_data?: Maybe<FieldWrapper<Scalars['String']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  lang?: Maybe<FieldWrapper<Scalars['String']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  expired?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  broken?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  status?: Maybe<FieldWrapper<Scalars['String']>>;
  harvestIntervalMinutes?: Maybe<FieldWrapper<Scalars['Int']>>;
  nextHarvestAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  streamId?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
};

export type GqlFeedMinAggregate = {
  __typename?: 'FeedMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  feed_url?: Maybe<FieldWrapper<Scalars['String']>>;
  home_page_url?: Maybe<FieldWrapper<Scalars['String']>>;
  fulltext_data?: Maybe<FieldWrapper<Scalars['String']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  lang?: Maybe<FieldWrapper<Scalars['String']>>;
  author?: Maybe<FieldWrapper<Scalars['String']>>;
  expired?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  broken?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  status?: Maybe<FieldWrapper<Scalars['String']>>;
  harvestIntervalMinutes?: Maybe<FieldWrapper<Scalars['Int']>>;
  nextHarvestAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  streamId?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
};

export type GqlFeedOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  feed_url?: Maybe<GqlSortOrder>;
  home_page_url?: Maybe<GqlSortOrder>;
  fulltext_data?: Maybe<GqlSortOrder>;
  title?: Maybe<GqlSortOrder>;
  lang?: Maybe<GqlSortOrder>;
  tags?: Maybe<GqlSortOrder>;
  enclosures?: Maybe<GqlSortOrder>;
  author?: Maybe<GqlSortOrder>;
  expired?: Maybe<GqlSortOrder>;
  broken?: Maybe<GqlSortOrder>;
  description?: Maybe<GqlSortOrder>;
  status?: Maybe<GqlSortOrder>;
  harvestIntervalMinutes?: Maybe<GqlSortOrder>;
  nextHarvestAt?: Maybe<GqlSortOrder>;
  streamId?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  updatedAt?: Maybe<GqlSortOrder>;
};

export type GqlFeedRelationFilter = {
  is?: Maybe<GqlFeedWhereInput>;
  isNot?: Maybe<GqlFeedWhereInput>;
};

export enum GqlFeedScalarFieldEnum {
  Id = 'id',
  FeedUrl = 'feed_url',
  HomePageUrl = 'home_page_url',
  FulltextData = 'fulltext_data',
  Title = 'title',
  Lang = 'lang',
  Tags = 'tags',
  Enclosures = 'enclosures',
  Author = 'author',
  Expired = 'expired',
  Broken = 'broken',
  Description = 'description',
  Status = 'status',
  HarvestIntervalMinutes = 'harvestIntervalMinutes',
  NextHarvestAt = 'nextHarvestAt',
  StreamId = 'streamId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type GqlFeedScalarWhereInput = {
  AND?: Maybe<Array<GqlFeedScalarWhereInput>>;
  OR?: Maybe<Array<GqlFeedScalarWhereInput>>;
  NOT?: Maybe<Array<GqlFeedScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  feed_url?: Maybe<GqlStringFilter>;
  home_page_url?: Maybe<GqlStringNullableFilter>;
  fulltext_data?: Maybe<GqlStringNullableFilter>;
  title?: Maybe<GqlStringNullableFilter>;
  lang?: Maybe<GqlStringNullableFilter>;
  tags?: Maybe<GqlJsonNullableFilter>;
  enclosures?: Maybe<GqlJsonNullableFilter>;
  author?: Maybe<GqlStringNullableFilter>;
  expired?: Maybe<GqlBoolFilter>;
  broken?: Maybe<GqlBoolFilter>;
  description?: Maybe<GqlStringNullableFilter>;
  status?: Maybe<GqlStringFilter>;
  harvestIntervalMinutes?: Maybe<GqlIntNullableFilter>;
  nextHarvestAt?: Maybe<GqlDateTimeNullableFilter>;
  streamId?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
};

export type GqlFeedScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlFeedScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlFeedScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlFeedScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  feed_url?: Maybe<GqlStringWithAggregatesFilter>;
  home_page_url?: Maybe<GqlStringNullableWithAggregatesFilter>;
  fulltext_data?: Maybe<GqlStringNullableWithAggregatesFilter>;
  title?: Maybe<GqlStringNullableWithAggregatesFilter>;
  lang?: Maybe<GqlStringNullableWithAggregatesFilter>;
  tags?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  enclosures?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  author?: Maybe<GqlStringNullableWithAggregatesFilter>;
  expired?: Maybe<GqlBoolWithAggregatesFilter>;
  broken?: Maybe<GqlBoolWithAggregatesFilter>;
  description?: Maybe<GqlStringNullableWithAggregatesFilter>;
  status?: Maybe<GqlStringWithAggregatesFilter>;
  harvestIntervalMinutes?: Maybe<GqlIntNullableWithAggregatesFilter>;
  nextHarvestAt?: Maybe<GqlDateTimeNullableWithAggregatesFilter>;
  streamId?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
};

export type GqlFeedSumAggregate = {
  __typename?: 'FeedSumAggregate';
  harvestIntervalMinutes?: Maybe<FieldWrapper<Scalars['Int']>>;
};

export type GqlFeedUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  feed_url?: Maybe<GqlStringFieldUpdateOperationsInput>;
  home_page_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  fulltext_data?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  lang?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  expired?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  broken?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  status?: Maybe<GqlStringFieldUpdateOperationsInput>;
  harvestIntervalMinutes?: Maybe<GqlNullableIntFieldUpdateOperationsInput>;
  nextHarvestAt?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutFeedsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutFeedInput>;
  events?: Maybe<GqlFeedEventUpdateManyWithoutFeedInput>;
};

export type GqlFeedUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  feed_url?: Maybe<GqlStringFieldUpdateOperationsInput>;
  home_page_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  fulltext_data?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  lang?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  expired?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  broken?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  status?: Maybe<GqlStringFieldUpdateOperationsInput>;
  harvestIntervalMinutes?: Maybe<GqlNullableIntFieldUpdateOperationsInput>;
  nextHarvestAt?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
};

export type GqlFeedUpdateManyWithWhereWithoutStreamInput = {
  where: GqlFeedScalarWhereInput;
  data: GqlFeedUpdateManyMutationInput;
};

export type GqlFeedUpdateManyWithoutStreamInput = {
  create?: Maybe<Array<GqlFeedCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlFeedCreateOrConnectWithoutStreamInput>>;
  upsert?: Maybe<Array<GqlFeedUpsertWithWhereUniqueWithoutStreamInput>>;
  createMany?: Maybe<GqlFeedCreateManyStreamInputEnvelope>;
  connect?: Maybe<Array<GqlFeedWhereUniqueInput>>;
  set?: Maybe<Array<GqlFeedWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlFeedWhereUniqueInput>>;
  delete?: Maybe<Array<GqlFeedWhereUniqueInput>>;
  update?: Maybe<Array<GqlFeedUpdateWithWhereUniqueWithoutStreamInput>>;
  updateMany?: Maybe<Array<GqlFeedUpdateManyWithWhereWithoutStreamInput>>;
  deleteMany?: Maybe<Array<GqlFeedScalarWhereInput>>;
};

export type GqlFeedUpdateOneRequiredWithoutEventsInput = {
  create?: Maybe<GqlFeedCreateWithoutEventsInput>;
  connectOrCreate?: Maybe<GqlFeedCreateOrConnectWithoutEventsInput>;
  upsert?: Maybe<GqlFeedUpsertWithoutEventsInput>;
  connect?: Maybe<GqlFeedWhereUniqueInput>;
  update?: Maybe<GqlFeedUpdateWithoutEventsInput>;
};

export type GqlFeedUpdateOneRequiredWithoutSubscriptionsInput = {
  create?: Maybe<GqlFeedCreateWithoutSubscriptionsInput>;
  connectOrCreate?: Maybe<GqlFeedCreateOrConnectWithoutSubscriptionsInput>;
  upsert?: Maybe<GqlFeedUpsertWithoutSubscriptionsInput>;
  connect?: Maybe<GqlFeedWhereUniqueInput>;
  update?: Maybe<GqlFeedUpdateWithoutSubscriptionsInput>;
};

export type GqlFeedUpdateWithWhereUniqueWithoutStreamInput = {
  where: GqlFeedWhereUniqueInput;
  data: GqlFeedUpdateWithoutStreamInput;
};

export type GqlFeedUpdateWithoutEventsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  feed_url?: Maybe<GqlStringFieldUpdateOperationsInput>;
  home_page_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  fulltext_data?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  lang?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  expired?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  broken?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  status?: Maybe<GqlStringFieldUpdateOperationsInput>;
  harvestIntervalMinutes?: Maybe<GqlNullableIntFieldUpdateOperationsInput>;
  nextHarvestAt?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutFeedsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutFeedInput>;
};

export type GqlFeedUpdateWithoutStreamInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  feed_url?: Maybe<GqlStringFieldUpdateOperationsInput>;
  home_page_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  fulltext_data?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  lang?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  expired?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  broken?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  status?: Maybe<GqlStringFieldUpdateOperationsInput>;
  harvestIntervalMinutes?: Maybe<GqlNullableIntFieldUpdateOperationsInput>;
  nextHarvestAt?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutFeedInput>;
  events?: Maybe<GqlFeedEventUpdateManyWithoutFeedInput>;
};

export type GqlFeedUpdateWithoutSubscriptionsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  feed_url?: Maybe<GqlStringFieldUpdateOperationsInput>;
  home_page_url?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  fulltext_data?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  title?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  lang?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  enclosures?: Maybe<Scalars['JSON']>;
  author?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  expired?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  broken?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  status?: Maybe<GqlStringFieldUpdateOperationsInput>;
  harvestIntervalMinutes?: Maybe<GqlNullableIntFieldUpdateOperationsInput>;
  nextHarvestAt?: Maybe<GqlNullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutFeedsInput>;
  events?: Maybe<GqlFeedEventUpdateManyWithoutFeedInput>;
};

export type GqlFeedUpsertWithWhereUniqueWithoutStreamInput = {
  where: GqlFeedWhereUniqueInput;
  update: GqlFeedUpdateWithoutStreamInput;
  create: GqlFeedCreateWithoutStreamInput;
};

export type GqlFeedUpsertWithoutEventsInput = {
  update: GqlFeedUpdateWithoutEventsInput;
  create: GqlFeedCreateWithoutEventsInput;
};

export type GqlFeedUpsertWithoutSubscriptionsInput = {
  update: GqlFeedUpdateWithoutSubscriptionsInput;
  create: GqlFeedCreateWithoutSubscriptionsInput;
};

export type GqlFeedWhereInput = {
  AND?: Maybe<Array<GqlFeedWhereInput>>;
  OR?: Maybe<Array<GqlFeedWhereInput>>;
  NOT?: Maybe<Array<GqlFeedWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  feed_url?: Maybe<GqlStringFilter>;
  home_page_url?: Maybe<GqlStringNullableFilter>;
  fulltext_data?: Maybe<GqlStringNullableFilter>;
  title?: Maybe<GqlStringNullableFilter>;
  lang?: Maybe<GqlStringNullableFilter>;
  tags?: Maybe<GqlJsonNullableFilter>;
  enclosures?: Maybe<GqlJsonNullableFilter>;
  author?: Maybe<GqlStringNullableFilter>;
  expired?: Maybe<GqlBoolFilter>;
  broken?: Maybe<GqlBoolFilter>;
  description?: Maybe<GqlStringNullableFilter>;
  status?: Maybe<GqlStringFilter>;
  harvestIntervalMinutes?: Maybe<GqlIntNullableFilter>;
  nextHarvestAt?: Maybe<GqlDateTimeNullableFilter>;
  stream?: Maybe<GqlStreamRelationFilter>;
  streamId?: Maybe<GqlStringFilter>;
  subscriptions?: Maybe<GqlSubscriptionListRelationFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  events?: Maybe<GqlFeedEventListRelationFilter>;
};

export type GqlFeedWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  feed_url?: Maybe<Scalars['String']>;
};

export type GqlFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<GqlNestedFloatNullableFilter>;
};

export type GqlFloatNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<GqlNestedFloatNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _avg?: Maybe<GqlNestedFloatNullableFilter>;
  _sum?: Maybe<GqlNestedFloatNullableFilter>;
  _min?: Maybe<GqlNestedFloatNullableFilter>;
  _max?: Maybe<GqlNestedFloatNullableFilter>;
};

export type GqlIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type GqlIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntFilter>;
};

export type GqlIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntNullableFilter>;
};

export type GqlIntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _avg?: Maybe<GqlNestedFloatNullableFilter>;
  _sum?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedIntNullableFilter>;
  _max?: Maybe<GqlNestedIntNullableFilter>;
};

export type GqlIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _avg?: Maybe<GqlNestedFloatFilter>;
  _sum?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedIntFilter>;
  _max?: Maybe<GqlNestedIntFilter>;
};


export type GqlJsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type GqlJsonNullableFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type GqlJsonNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedJsonNullableFilter>;
  _max?: Maybe<GqlNestedJsonNullableFilter>;
};

export type GqlJsonWithAggregatesFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
  _count?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedJsonFilter>;
  _max?: Maybe<GqlNestedJsonFilter>;
};

export type GqlMutation = {
  __typename?: 'Mutation';
  createArticle: FieldWrapper<GqlArticle>;
  createManyArticle: FieldWrapper<GqlAffectedRowsOutput>;
  deleteArticle?: Maybe<FieldWrapper<GqlArticle>>;
  updateArticle?: Maybe<FieldWrapper<GqlArticle>>;
  deleteManyArticle: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyArticle: FieldWrapper<GqlAffectedRowsOutput>;
  upsertArticle: FieldWrapper<GqlArticle>;
  createArticlePostProcessor: FieldWrapper<GqlArticlePostProcessor>;
  createManyArticlePostProcessor: FieldWrapper<GqlAffectedRowsOutput>;
  deleteArticlePostProcessor?: Maybe<FieldWrapper<GqlArticlePostProcessor>>;
  updateArticlePostProcessor?: Maybe<FieldWrapper<GqlArticlePostProcessor>>;
  deleteManyArticlePostProcessor: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyArticlePostProcessor: FieldWrapper<GqlAffectedRowsOutput>;
  upsertArticlePostProcessor: FieldWrapper<GqlArticlePostProcessor>;
  createArticleRef: FieldWrapper<GqlArticleRef>;
  createManyArticleRef: FieldWrapper<GqlAffectedRowsOutput>;
  deleteArticleRef?: Maybe<FieldWrapper<GqlArticleRef>>;
  updateArticleRef?: Maybe<FieldWrapper<GqlArticleRef>>;
  deleteManyArticleRef: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyArticleRef: FieldWrapper<GqlAffectedRowsOutput>;
  upsertArticleRef: FieldWrapper<GqlArticleRef>;
  createBucket: FieldWrapper<GqlBucket>;
  createManyBucket: FieldWrapper<GqlAffectedRowsOutput>;
  deleteBucket?: Maybe<FieldWrapper<GqlBucket>>;
  updateBucket?: Maybe<FieldWrapper<GqlBucket>>;
  deleteManyBucket: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyBucket: FieldWrapper<GqlAffectedRowsOutput>;
  upsertBucket: FieldWrapper<GqlBucket>;
  createFeed: FieldWrapper<GqlFeed>;
  createManyFeed: FieldWrapper<GqlAffectedRowsOutput>;
  deleteFeed?: Maybe<FieldWrapper<GqlFeed>>;
  updateFeed?: Maybe<FieldWrapper<GqlFeed>>;
  deleteManyFeed: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyFeed: FieldWrapper<GqlAffectedRowsOutput>;
  upsertFeed: FieldWrapper<GqlFeed>;
  createFeedEvent: FieldWrapper<GqlFeedEvent>;
  createManyFeedEvent: FieldWrapper<GqlAffectedRowsOutput>;
  deleteFeedEvent?: Maybe<FieldWrapper<GqlFeedEvent>>;
  updateFeedEvent?: Maybe<FieldWrapper<GqlFeedEvent>>;
  deleteManyFeedEvent: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyFeedEvent: FieldWrapper<GqlAffectedRowsOutput>;
  upsertFeedEvent: FieldWrapper<GqlFeedEvent>;
  createNoFollowUrl: FieldWrapper<GqlNoFollowUrl>;
  createManyNoFollowUrl: FieldWrapper<GqlAffectedRowsOutput>;
  deleteNoFollowUrl?: Maybe<FieldWrapper<GqlNoFollowUrl>>;
  updateNoFollowUrl?: Maybe<FieldWrapper<GqlNoFollowUrl>>;
  deleteManyNoFollowUrl: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyNoFollowUrl: FieldWrapper<GqlAffectedRowsOutput>;
  upsertNoFollowUrl: FieldWrapper<GqlNoFollowUrl>;
  createNotebook: FieldWrapper<GqlNotebook>;
  createManyNotebook: FieldWrapper<GqlAffectedRowsOutput>;
  deleteNotebook?: Maybe<FieldWrapper<GqlNotebook>>;
  updateNotebook?: Maybe<FieldWrapper<GqlNotebook>>;
  deleteManyNotebook: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyNotebook: FieldWrapper<GqlAffectedRowsOutput>;
  upsertNotebook: FieldWrapper<GqlNotebook>;
  createReleaseThrottle: FieldWrapper<GqlReleaseThrottle>;
  createManyReleaseThrottle: FieldWrapper<GqlAffectedRowsOutput>;
  deleteReleaseThrottle?: Maybe<FieldWrapper<GqlReleaseThrottle>>;
  updateReleaseThrottle?: Maybe<FieldWrapper<GqlReleaseThrottle>>;
  deleteManyReleaseThrottle: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyReleaseThrottle: FieldWrapper<GqlAffectedRowsOutput>;
  upsertReleaseThrottle: FieldWrapper<GqlReleaseThrottle>;
  createStream: FieldWrapper<GqlStream>;
  createManyStream: FieldWrapper<GqlAffectedRowsOutput>;
  deleteStream?: Maybe<FieldWrapper<GqlStream>>;
  updateStream?: Maybe<FieldWrapper<GqlStream>>;
  deleteManyStream: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyStream: FieldWrapper<GqlAffectedRowsOutput>;
  upsertStream: FieldWrapper<GqlStream>;
  createSubscription: FieldWrapper<GqlSubscription>;
  createManySubscription: FieldWrapper<GqlAffectedRowsOutput>;
  deleteSubscription?: Maybe<FieldWrapper<GqlSubscription>>;
  updateSubscription?: Maybe<FieldWrapper<GqlSubscription>>;
  deleteManySubscription: FieldWrapper<GqlAffectedRowsOutput>;
  updateManySubscription: FieldWrapper<GqlAffectedRowsOutput>;
  upsertSubscription: FieldWrapper<GqlSubscription>;
  createUser: FieldWrapper<GqlUser>;
  createManyUser: FieldWrapper<GqlAffectedRowsOutput>;
  deleteUser?: Maybe<FieldWrapper<GqlUser>>;
  updateUser?: Maybe<FieldWrapper<GqlUser>>;
  deleteManyUser: FieldWrapper<GqlAffectedRowsOutput>;
  updateManyUser: FieldWrapper<GqlAffectedRowsOutput>;
  upsertUser: FieldWrapper<GqlUser>;
  subscribeToFeed: FieldWrapper<GqlSubscription>;
};


export type GqlMutationCreateArticleArgs = {
  data: GqlArticleCreateInput;
};


export type GqlMutationCreateManyArticleArgs = {
  data: Array<GqlArticleCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteArticleArgs = {
  where: GqlArticleWhereUniqueInput;
};


export type GqlMutationUpdateArticleArgs = {
  data: GqlArticleUpdateInput;
  where: GqlArticleWhereUniqueInput;
};


export type GqlMutationDeleteManyArticleArgs = {
  where?: Maybe<GqlArticleWhereInput>;
};


export type GqlMutationUpdateManyArticleArgs = {
  data: GqlArticleUpdateManyMutationInput;
  where?: Maybe<GqlArticleWhereInput>;
};


export type GqlMutationUpsertArticleArgs = {
  where: GqlArticleWhereUniqueInput;
  create: GqlArticleCreateInput;
  update: GqlArticleUpdateInput;
};


export type GqlMutationCreateArticlePostProcessorArgs = {
  data: GqlArticlePostProcessorCreateInput;
};


export type GqlMutationCreateManyArticlePostProcessorArgs = {
  data: Array<GqlArticlePostProcessorCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteArticlePostProcessorArgs = {
  where: GqlArticlePostProcessorWhereUniqueInput;
};


export type GqlMutationUpdateArticlePostProcessorArgs = {
  data: GqlArticlePostProcessorUpdateInput;
  where: GqlArticlePostProcessorWhereUniqueInput;
};


export type GqlMutationDeleteManyArticlePostProcessorArgs = {
  where?: Maybe<GqlArticlePostProcessorWhereInput>;
};


export type GqlMutationUpdateManyArticlePostProcessorArgs = {
  data: GqlArticlePostProcessorUpdateManyMutationInput;
  where?: Maybe<GqlArticlePostProcessorWhereInput>;
};


export type GqlMutationUpsertArticlePostProcessorArgs = {
  where: GqlArticlePostProcessorWhereUniqueInput;
  create: GqlArticlePostProcessorCreateInput;
  update: GqlArticlePostProcessorUpdateInput;
};


export type GqlMutationCreateArticleRefArgs = {
  data: GqlArticleRefCreateInput;
};


export type GqlMutationCreateManyArticleRefArgs = {
  data: Array<GqlArticleRefCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteArticleRefArgs = {
  where: GqlArticleRefWhereUniqueInput;
};


export type GqlMutationUpdateArticleRefArgs = {
  data: GqlArticleRefUpdateInput;
  where: GqlArticleRefWhereUniqueInput;
};


export type GqlMutationDeleteManyArticleRefArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
};


export type GqlMutationUpdateManyArticleRefArgs = {
  data: GqlArticleRefUpdateManyMutationInput;
  where?: Maybe<GqlArticleRefWhereInput>;
};


export type GqlMutationUpsertArticleRefArgs = {
  where: GqlArticleRefWhereUniqueInput;
  create: GqlArticleRefCreateInput;
  update: GqlArticleRefUpdateInput;
};


export type GqlMutationCreateBucketArgs = {
  data: GqlBucketCreateInput;
};


export type GqlMutationCreateManyBucketArgs = {
  data: Array<GqlBucketCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteBucketArgs = {
  where: GqlBucketWhereUniqueInput;
};


export type GqlMutationUpdateBucketArgs = {
  data: GqlBucketUpdateInput;
  where: GqlBucketWhereUniqueInput;
};


export type GqlMutationDeleteManyBucketArgs = {
  where?: Maybe<GqlBucketWhereInput>;
};


export type GqlMutationUpdateManyBucketArgs = {
  data: GqlBucketUpdateManyMutationInput;
  where?: Maybe<GqlBucketWhereInput>;
};


export type GqlMutationUpsertBucketArgs = {
  where: GqlBucketWhereUniqueInput;
  create: GqlBucketCreateInput;
  update: GqlBucketUpdateInput;
};


export type GqlMutationCreateFeedArgs = {
  data: GqlFeedCreateInput;
};


export type GqlMutationCreateManyFeedArgs = {
  data: Array<GqlFeedCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteFeedArgs = {
  where: GqlFeedWhereUniqueInput;
};


export type GqlMutationUpdateFeedArgs = {
  data: GqlFeedUpdateInput;
  where: GqlFeedWhereUniqueInput;
};


export type GqlMutationDeleteManyFeedArgs = {
  where?: Maybe<GqlFeedWhereInput>;
};


export type GqlMutationUpdateManyFeedArgs = {
  data: GqlFeedUpdateManyMutationInput;
  where?: Maybe<GqlFeedWhereInput>;
};


export type GqlMutationUpsertFeedArgs = {
  where: GqlFeedWhereUniqueInput;
  create: GqlFeedCreateInput;
  update: GqlFeedUpdateInput;
};


export type GqlMutationCreateFeedEventArgs = {
  data: GqlFeedEventCreateInput;
};


export type GqlMutationCreateManyFeedEventArgs = {
  data: Array<GqlFeedEventCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteFeedEventArgs = {
  where: GqlFeedEventWhereUniqueInput;
};


export type GqlMutationUpdateFeedEventArgs = {
  data: GqlFeedEventUpdateInput;
  where: GqlFeedEventWhereUniqueInput;
};


export type GqlMutationDeleteManyFeedEventArgs = {
  where?: Maybe<GqlFeedEventWhereInput>;
};


export type GqlMutationUpdateManyFeedEventArgs = {
  data: GqlFeedEventUpdateManyMutationInput;
  where?: Maybe<GqlFeedEventWhereInput>;
};


export type GqlMutationUpsertFeedEventArgs = {
  where: GqlFeedEventWhereUniqueInput;
  create: GqlFeedEventCreateInput;
  update: GqlFeedEventUpdateInput;
};


export type GqlMutationCreateNoFollowUrlArgs = {
  data: GqlNoFollowUrlCreateInput;
};


export type GqlMutationCreateManyNoFollowUrlArgs = {
  data: Array<GqlNoFollowUrlCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteNoFollowUrlArgs = {
  where: GqlNoFollowUrlWhereUniqueInput;
};


export type GqlMutationUpdateNoFollowUrlArgs = {
  data: GqlNoFollowUrlUpdateInput;
  where: GqlNoFollowUrlWhereUniqueInput;
};


export type GqlMutationDeleteManyNoFollowUrlArgs = {
  where?: Maybe<GqlNoFollowUrlWhereInput>;
};


export type GqlMutationUpdateManyNoFollowUrlArgs = {
  data: GqlNoFollowUrlUpdateManyMutationInput;
  where?: Maybe<GqlNoFollowUrlWhereInput>;
};


export type GqlMutationUpsertNoFollowUrlArgs = {
  where: GqlNoFollowUrlWhereUniqueInput;
  create: GqlNoFollowUrlCreateInput;
  update: GqlNoFollowUrlUpdateInput;
};


export type GqlMutationCreateNotebookArgs = {
  data: GqlNotebookCreateInput;
};


export type GqlMutationCreateManyNotebookArgs = {
  data: Array<GqlNotebookCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteNotebookArgs = {
  where: GqlNotebookWhereUniqueInput;
};


export type GqlMutationUpdateNotebookArgs = {
  data: GqlNotebookUpdateInput;
  where: GqlNotebookWhereUniqueInput;
};


export type GqlMutationDeleteManyNotebookArgs = {
  where?: Maybe<GqlNotebookWhereInput>;
};


export type GqlMutationUpdateManyNotebookArgs = {
  data: GqlNotebookUpdateManyMutationInput;
  where?: Maybe<GqlNotebookWhereInput>;
};


export type GqlMutationUpsertNotebookArgs = {
  where: GqlNotebookWhereUniqueInput;
  create: GqlNotebookCreateInput;
  update: GqlNotebookUpdateInput;
};


export type GqlMutationCreateReleaseThrottleArgs = {
  data: GqlReleaseThrottleCreateInput;
};


export type GqlMutationCreateManyReleaseThrottleArgs = {
  data: Array<GqlReleaseThrottleCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteReleaseThrottleArgs = {
  where: GqlReleaseThrottleWhereUniqueInput;
};


export type GqlMutationUpdateReleaseThrottleArgs = {
  data: GqlReleaseThrottleUpdateInput;
  where: GqlReleaseThrottleWhereUniqueInput;
};


export type GqlMutationDeleteManyReleaseThrottleArgs = {
  where?: Maybe<GqlReleaseThrottleWhereInput>;
};


export type GqlMutationUpdateManyReleaseThrottleArgs = {
  data: GqlReleaseThrottleUpdateManyMutationInput;
  where?: Maybe<GqlReleaseThrottleWhereInput>;
};


export type GqlMutationUpsertReleaseThrottleArgs = {
  where: GqlReleaseThrottleWhereUniqueInput;
  create: GqlReleaseThrottleCreateInput;
  update: GqlReleaseThrottleUpdateInput;
};


export type GqlMutationCreateStreamArgs = {
  data: GqlStreamCreateInput;
};


export type GqlMutationCreateManyStreamArgs = {
  data: Array<GqlStreamCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteStreamArgs = {
  where: GqlStreamWhereUniqueInput;
};


export type GqlMutationUpdateStreamArgs = {
  data: GqlStreamUpdateInput;
  where: GqlStreamWhereUniqueInput;
};


export type GqlMutationDeleteManyStreamArgs = {
  where?: Maybe<GqlStreamWhereInput>;
};


export type GqlMutationUpdateManyStreamArgs = {
  data: GqlStreamUpdateManyMutationInput;
  where?: Maybe<GqlStreamWhereInput>;
};


export type GqlMutationUpsertStreamArgs = {
  where: GqlStreamWhereUniqueInput;
  create: GqlStreamCreateInput;
  update: GqlStreamUpdateInput;
};


export type GqlMutationCreateSubscriptionArgs = {
  data: GqlSubscriptionCreateInput;
};


export type GqlMutationCreateManySubscriptionArgs = {
  data: Array<GqlSubscriptionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteSubscriptionArgs = {
  where: GqlSubscriptionWhereUniqueInput;
};


export type GqlMutationUpdateSubscriptionArgs = {
  data: GqlSubscriptionUpdateInput;
  where: GqlSubscriptionWhereUniqueInput;
};


export type GqlMutationDeleteManySubscriptionArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
};


export type GqlMutationUpdateManySubscriptionArgs = {
  data: GqlSubscriptionUpdateManyMutationInput;
  where?: Maybe<GqlSubscriptionWhereInput>;
};


export type GqlMutationUpsertSubscriptionArgs = {
  where: GqlSubscriptionWhereUniqueInput;
  create: GqlSubscriptionCreateInput;
  update: GqlSubscriptionUpdateInput;
};


export type GqlMutationCreateUserArgs = {
  data: GqlUserCreateInput;
};


export type GqlMutationCreateManyUserArgs = {
  data: Array<GqlUserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationDeleteUserArgs = {
  where: GqlUserWhereUniqueInput;
};


export type GqlMutationUpdateUserArgs = {
  data: GqlUserUpdateInput;
  where: GqlUserWhereUniqueInput;
};


export type GqlMutationDeleteManyUserArgs = {
  where?: Maybe<GqlUserWhereInput>;
};


export type GqlMutationUpdateManyUserArgs = {
  data: GqlUserUpdateManyMutationInput;
  where?: Maybe<GqlUserWhereInput>;
};


export type GqlMutationUpsertUserArgs = {
  where: GqlUserWhereUniqueInput;
  create: GqlUserCreateInput;
  update: GqlUserUpdateInput;
};


export type GqlMutationSubscribeToFeedArgs = {
  email: Scalars['String'];
  bucketId: Scalars['String'];
  feedUrl: Scalars['String'];
};

export type GqlNativeFeedRef = {
  __typename?: 'NativeFeedRef';
  feed_url: FieldWrapper<Scalars['String']>;
  title: FieldWrapper<Scalars['String']>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlNestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolFilter>;
};

export type GqlNestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolNullableFilter>;
};

export type GqlNestedBoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedBoolNullableFilter>;
  _max?: Maybe<GqlNestedBoolNullableFilter>;
};

export type GqlNestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<GqlNestedBoolWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedBoolFilter>;
  _max?: Maybe<GqlNestedBoolFilter>;
};

export type GqlNestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeFilter>;
};

export type GqlNestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeNullableFilter>;
};

export type GqlNestedDateTimeNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedDateTimeNullableFilter>;
  _max?: Maybe<GqlNestedDateTimeNullableFilter>;
};

export type GqlNestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<GqlNestedDateTimeWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedDateTimeFilter>;
  _max?: Maybe<GqlNestedDateTimeFilter>;
};

export type GqlNestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<GqlNestedFloatFilter>;
};

export type GqlNestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<GqlNestedFloatNullableFilter>;
};

export type GqlNestedFloatNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<GqlNestedFloatNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _avg?: Maybe<GqlNestedFloatNullableFilter>;
  _sum?: Maybe<GqlNestedFloatNullableFilter>;
  _min?: Maybe<GqlNestedFloatNullableFilter>;
  _max?: Maybe<GqlNestedFloatNullableFilter>;
};

export type GqlNestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntFilter>;
};

export type GqlNestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntNullableFilter>;
};

export type GqlNestedIntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _avg?: Maybe<GqlNestedFloatNullableFilter>;
  _sum?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedIntNullableFilter>;
  _max?: Maybe<GqlNestedIntNullableFilter>;
};

export type GqlNestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<GqlNestedIntWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _avg?: Maybe<GqlNestedFloatFilter>;
  _sum?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedIntFilter>;
  _max?: Maybe<GqlNestedIntFilter>;
};

export type GqlNestedJsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type GqlNestedJsonNullableFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type GqlNestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringFilter>;
};

export type GqlNestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringNullableFilter>;
};

export type GqlNestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedStringNullableFilter>;
  _max?: Maybe<GqlNestedStringNullableFilter>;
};

export type GqlNestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedStringFilter>;
  _max?: Maybe<GqlNestedStringFilter>;
};

export type GqlNoFollowUrl = {
  __typename?: 'NoFollowUrl';
  id: FieldWrapper<Scalars['String']>;
  url_prefix: FieldWrapper<Scalars['String']>;
};

export type GqlNoFollowUrlCountAggregate = {
  __typename?: 'NoFollowUrlCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  url_prefix: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlNoFollowUrlCreateInput = {
  id?: Maybe<Scalars['String']>;
  url_prefix: Scalars['String'];
};

export type GqlNoFollowUrlCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  url_prefix: Scalars['String'];
};

export type GqlNoFollowUrlGroupBy = {
  __typename?: 'NoFollowUrlGroupBy';
  id: FieldWrapper<Scalars['String']>;
  url_prefix: FieldWrapper<Scalars['String']>;
  _count?: Maybe<FieldWrapper<GqlNoFollowUrlCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlNoFollowUrlMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlNoFollowUrlMaxAggregate>>;
};

export type GqlNoFollowUrlMaxAggregate = {
  __typename?: 'NoFollowUrlMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  url_prefix?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlNoFollowUrlMinAggregate = {
  __typename?: 'NoFollowUrlMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  url_prefix?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlNoFollowUrlOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  url_prefix?: Maybe<GqlSortOrder>;
};

export enum GqlNoFollowUrlScalarFieldEnum {
  Id = 'id',
  UrlPrefix = 'url_prefix'
}

export type GqlNoFollowUrlScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlNoFollowUrlScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlNoFollowUrlScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlNoFollowUrlScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  url_prefix?: Maybe<GqlStringWithAggregatesFilter>;
};

export type GqlNoFollowUrlUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  url_prefix?: Maybe<GqlStringFieldUpdateOperationsInput>;
};

export type GqlNoFollowUrlUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  url_prefix?: Maybe<GqlStringFieldUpdateOperationsInput>;
};

export type GqlNoFollowUrlWhereInput = {
  AND?: Maybe<Array<GqlNoFollowUrlWhereInput>>;
  OR?: Maybe<Array<GqlNoFollowUrlWhereInput>>;
  NOT?: Maybe<Array<GqlNoFollowUrlWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  url_prefix?: Maybe<GqlStringFilter>;
};

export type GqlNoFollowUrlWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  url_prefix?: Maybe<Scalars['String']>;
};

export type GqlNotebook = {
  __typename?: 'Notebook';
  id: FieldWrapper<Scalars['String']>;
  name: FieldWrapper<Scalars['String']>;
  description: FieldWrapper<Scalars['String']>;
  readonly: FieldWrapper<Scalars['Boolean']>;
  listed: FieldWrapper<Scalars['Boolean']>;
  streamId: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  ownerId: FieldWrapper<Scalars['String']>;
  stream: FieldWrapper<GqlStream>;
  owner: FieldWrapper<GqlUser>;
};

export type GqlNotebookCountAggregate = {
  __typename?: 'NotebookCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  name: FieldWrapper<Scalars['Int']>;
  description: FieldWrapper<Scalars['Int']>;
  readonly: FieldWrapper<Scalars['Int']>;
  listed: FieldWrapper<Scalars['Int']>;
  streamId: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  updatedAt: FieldWrapper<Scalars['Int']>;
  ownerId: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlNotebookCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  listed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stream: GqlStreamCreateNestedOneWithoutNotebooksInput;
  owner: GqlUserCreateNestedOneWithoutNotebooksInput;
};

export type GqlNotebookCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  listed?: Maybe<Scalars['Boolean']>;
  streamId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId: Scalars['String'];
};

export type GqlNotebookCreateManyOwnerInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  listed?: Maybe<Scalars['Boolean']>;
  streamId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GqlNotebookCreateManyOwnerInputEnvelope = {
  data: Array<GqlNotebookCreateManyOwnerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlNotebookCreateManyStreamInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  listed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId: Scalars['String'];
};

export type GqlNotebookCreateManyStreamInputEnvelope = {
  data: Array<GqlNotebookCreateManyStreamInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlNotebookCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlNotebookCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlNotebookCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<GqlNotebookCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
};

export type GqlNotebookCreateNestedManyWithoutStreamInput = {
  create?: Maybe<Array<GqlNotebookCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlNotebookCreateOrConnectWithoutStreamInput>>;
  createMany?: Maybe<GqlNotebookCreateManyStreamInputEnvelope>;
  connect?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
};

export type GqlNotebookCreateOrConnectWithoutOwnerInput = {
  where: GqlNotebookWhereUniqueInput;
  create: GqlNotebookCreateWithoutOwnerInput;
};

export type GqlNotebookCreateOrConnectWithoutStreamInput = {
  where: GqlNotebookWhereUniqueInput;
  create: GqlNotebookCreateWithoutStreamInput;
};

export type GqlNotebookCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  listed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stream: GqlStreamCreateNestedOneWithoutNotebooksInput;
};

export type GqlNotebookCreateWithoutStreamInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  listed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  owner: GqlUserCreateNestedOneWithoutNotebooksInput;
};

export type GqlNotebookGroupBy = {
  __typename?: 'NotebookGroupBy';
  id: FieldWrapper<Scalars['String']>;
  name: FieldWrapper<Scalars['String']>;
  description: FieldWrapper<Scalars['String']>;
  readonly: FieldWrapper<Scalars['Boolean']>;
  listed: FieldWrapper<Scalars['Boolean']>;
  streamId: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  ownerId: FieldWrapper<Scalars['String']>;
  _count?: Maybe<FieldWrapper<GqlNotebookCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlNotebookMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlNotebookMaxAggregate>>;
};

export type GqlNotebookListRelationFilter = {
  every?: Maybe<GqlNotebookWhereInput>;
  some?: Maybe<GqlNotebookWhereInput>;
  none?: Maybe<GqlNotebookWhereInput>;
};

export type GqlNotebookMaxAggregate = {
  __typename?: 'NotebookMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  name?: Maybe<FieldWrapper<Scalars['String']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  readonly?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  listed?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  streamId?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlNotebookMinAggregate = {
  __typename?: 'NotebookMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  name?: Maybe<FieldWrapper<Scalars['String']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  readonly?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  listed?: Maybe<FieldWrapper<Scalars['Boolean']>>;
  streamId?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlNotebookNameOwnerIdCompoundUniqueInput = {
  name: Scalars['String'];
  ownerId: Scalars['String'];
};

export type GqlNotebookOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  name?: Maybe<GqlSortOrder>;
  description?: Maybe<GqlSortOrder>;
  readonly?: Maybe<GqlSortOrder>;
  listed?: Maybe<GqlSortOrder>;
  streamId?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  updatedAt?: Maybe<GqlSortOrder>;
  ownerId?: Maybe<GqlSortOrder>;
};

export enum GqlNotebookScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  Readonly = 'readonly',
  Listed = 'listed',
  StreamId = 'streamId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId'
}

export type GqlNotebookScalarWhereInput = {
  AND?: Maybe<Array<GqlNotebookScalarWhereInput>>;
  OR?: Maybe<Array<GqlNotebookScalarWhereInput>>;
  NOT?: Maybe<Array<GqlNotebookScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  name?: Maybe<GqlStringFilter>;
  description?: Maybe<GqlStringFilter>;
  readonly?: Maybe<GqlBoolFilter>;
  listed?: Maybe<GqlBoolFilter>;
  streamId?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  ownerId?: Maybe<GqlStringFilter>;
};

export type GqlNotebookScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlNotebookScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlNotebookScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlNotebookScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  name?: Maybe<GqlStringWithAggregatesFilter>;
  description?: Maybe<GqlStringWithAggregatesFilter>;
  readonly?: Maybe<GqlBoolWithAggregatesFilter>;
  listed?: Maybe<GqlBoolWithAggregatesFilter>;
  streamId?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  ownerId?: Maybe<GqlStringWithAggregatesFilter>;
};

export type GqlNotebookUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlStringFieldUpdateOperationsInput>;
  readonly?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutNotebooksInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutNotebooksInput>;
};

export type GqlNotebookUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlStringFieldUpdateOperationsInput>;
  readonly?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
};

export type GqlNotebookUpdateManyWithWhereWithoutOwnerInput = {
  where: GqlNotebookScalarWhereInput;
  data: GqlNotebookUpdateManyMutationInput;
};

export type GqlNotebookUpdateManyWithWhereWithoutStreamInput = {
  where: GqlNotebookScalarWhereInput;
  data: GqlNotebookUpdateManyMutationInput;
};

export type GqlNotebookUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlNotebookCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlNotebookCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<GqlNotebookUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<GqlNotebookCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  set?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  delete?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  update?: Maybe<Array<GqlNotebookUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<GqlNotebookUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<GqlNotebookScalarWhereInput>>;
};

export type GqlNotebookUpdateManyWithoutStreamInput = {
  create?: Maybe<Array<GqlNotebookCreateWithoutStreamInput>>;
  connectOrCreate?: Maybe<Array<GqlNotebookCreateOrConnectWithoutStreamInput>>;
  upsert?: Maybe<Array<GqlNotebookUpsertWithWhereUniqueWithoutStreamInput>>;
  createMany?: Maybe<GqlNotebookCreateManyStreamInputEnvelope>;
  connect?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  set?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  delete?: Maybe<Array<GqlNotebookWhereUniqueInput>>;
  update?: Maybe<Array<GqlNotebookUpdateWithWhereUniqueWithoutStreamInput>>;
  updateMany?: Maybe<Array<GqlNotebookUpdateManyWithWhereWithoutStreamInput>>;
  deleteMany?: Maybe<Array<GqlNotebookScalarWhereInput>>;
};

export type GqlNotebookUpdateWithWhereUniqueWithoutOwnerInput = {
  where: GqlNotebookWhereUniqueInput;
  data: GqlNotebookUpdateWithoutOwnerInput;
};

export type GqlNotebookUpdateWithWhereUniqueWithoutStreamInput = {
  where: GqlNotebookWhereUniqueInput;
  data: GqlNotebookUpdateWithoutStreamInput;
};

export type GqlNotebookUpdateWithoutOwnerInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlStringFieldUpdateOperationsInput>;
  readonly?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  stream?: Maybe<GqlStreamUpdateOneRequiredWithoutNotebooksInput>;
};

export type GqlNotebookUpdateWithoutStreamInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlStringFieldUpdateOperationsInput>;
  readonly?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  listed?: Maybe<GqlBoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutNotebooksInput>;
};

export type GqlNotebookUpsertWithWhereUniqueWithoutOwnerInput = {
  where: GqlNotebookWhereUniqueInput;
  update: GqlNotebookUpdateWithoutOwnerInput;
  create: GqlNotebookCreateWithoutOwnerInput;
};

export type GqlNotebookUpsertWithWhereUniqueWithoutStreamInput = {
  where: GqlNotebookWhereUniqueInput;
  update: GqlNotebookUpdateWithoutStreamInput;
  create: GqlNotebookCreateWithoutStreamInput;
};

export type GqlNotebookWhereInput = {
  AND?: Maybe<Array<GqlNotebookWhereInput>>;
  OR?: Maybe<Array<GqlNotebookWhereInput>>;
  NOT?: Maybe<Array<GqlNotebookWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  name?: Maybe<GqlStringFilter>;
  description?: Maybe<GqlStringFilter>;
  readonly?: Maybe<GqlBoolFilter>;
  listed?: Maybe<GqlBoolFilter>;
  stream?: Maybe<GqlStreamRelationFilter>;
  streamId?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  owner?: Maybe<GqlUserRelationFilter>;
  ownerId?: Maybe<GqlStringFilter>;
};

export type GqlNotebookWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name_ownerId?: Maybe<GqlNotebookNameOwnerIdCompoundUniqueInput>;
};

export type GqlNullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type GqlNullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type GqlNullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type GqlNullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type GqlNullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type GqlProxyArticle = {
  __typename?: 'ProxyArticle';
  title: FieldWrapper<Scalars['String']>;
  link: FieldWrapper<Scalars['String']>;
  summary?: Maybe<Array<FieldWrapper<Scalars['String']>>>;
  content?: Maybe<FieldWrapper<Scalars['String']>>;
  text?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlProxyArticleRule = {
  __typename?: 'ProxyArticleRule';
  count?: Maybe<FieldWrapper<Scalars['Float']>>;
  score?: Maybe<FieldWrapper<Scalars['Float']>>;
  linkXPath: FieldWrapper<Scalars['String']>;
  extendContext: FieldWrapper<Scalars['String']>;
  contextXPath: FieldWrapper<Scalars['String']>;
  id: FieldWrapper<Scalars['String']>;
};

export type GqlProxyFeed = {
  __typename?: 'ProxyFeed';
  rule: FieldWrapper<GqlProxyArticleRule>;
  articles: Array<FieldWrapper<GqlProxyArticle>>;
};

export type GqlProxyFeeds = {
  __typename?: 'ProxyFeeds';
  url: FieldWrapper<Scalars['String']>;
  html: FieldWrapper<Scalars['String']>;
  feeds: Array<FieldWrapper<GqlProxyFeed>>;
};

export type GqlQuery = {
  __typename?: 'Query';
  article?: Maybe<FieldWrapper<GqlArticle>>;
  findFirstArticle?: Maybe<FieldWrapper<GqlArticle>>;
  articles: Array<FieldWrapper<GqlArticle>>;
  aggregateArticle: FieldWrapper<GqlAggregateArticle>;
  groupByArticle: Array<FieldWrapper<GqlArticleGroupBy>>;
  articlePostProcessor?: Maybe<FieldWrapper<GqlArticlePostProcessor>>;
  findFirstArticlePostProcessor?: Maybe<FieldWrapper<GqlArticlePostProcessor>>;
  articlePostProcessors: Array<FieldWrapper<GqlArticlePostProcessor>>;
  aggregateArticlePostProcessor: FieldWrapper<GqlAggregateArticlePostProcessor>;
  groupByArticlePostProcessor: Array<FieldWrapper<GqlArticlePostProcessorGroupBy>>;
  articleRef?: Maybe<FieldWrapper<GqlArticleRef>>;
  findFirstArticleRef?: Maybe<FieldWrapper<GqlArticleRef>>;
  articleRefs: Array<FieldWrapper<GqlArticleRef>>;
  aggregateArticleRef: FieldWrapper<GqlAggregateArticleRef>;
  groupByArticleRef: Array<FieldWrapper<GqlArticleRefGroupBy>>;
  bucket?: Maybe<FieldWrapper<GqlBucket>>;
  findFirstBucket?: Maybe<FieldWrapper<GqlBucket>>;
  buckets: Array<FieldWrapper<GqlBucket>>;
  aggregateBucket: FieldWrapper<GqlAggregateBucket>;
  groupByBucket: Array<FieldWrapper<GqlBucketGroupBy>>;
  feed?: Maybe<FieldWrapper<GqlFeed>>;
  findFirstFeed?: Maybe<FieldWrapper<GqlFeed>>;
  feeds: Array<FieldWrapper<GqlFeed>>;
  aggregateFeed: FieldWrapper<GqlAggregateFeed>;
  groupByFeed: Array<FieldWrapper<GqlFeedGroupBy>>;
  feedEvent?: Maybe<FieldWrapper<GqlFeedEvent>>;
  findFirstFeedEvent?: Maybe<FieldWrapper<GqlFeedEvent>>;
  feedEvents: Array<FieldWrapper<GqlFeedEvent>>;
  aggregateFeedEvent: FieldWrapper<GqlAggregateFeedEvent>;
  groupByFeedEvent: Array<FieldWrapper<GqlFeedEventGroupBy>>;
  noFollowUrl?: Maybe<FieldWrapper<GqlNoFollowUrl>>;
  findFirstNoFollowUrl?: Maybe<FieldWrapper<GqlNoFollowUrl>>;
  noFollowUrls: Array<FieldWrapper<GqlNoFollowUrl>>;
  aggregateNoFollowUrl: FieldWrapper<GqlAggregateNoFollowUrl>;
  groupByNoFollowUrl: Array<FieldWrapper<GqlNoFollowUrlGroupBy>>;
  notebook?: Maybe<FieldWrapper<GqlNotebook>>;
  findFirstNotebook?: Maybe<FieldWrapper<GqlNotebook>>;
  notebooks: Array<FieldWrapper<GqlNotebook>>;
  aggregateNotebook: FieldWrapper<GqlAggregateNotebook>;
  groupByNotebook: Array<FieldWrapper<GqlNotebookGroupBy>>;
  releaseThrottle?: Maybe<FieldWrapper<GqlReleaseThrottle>>;
  findFirstReleaseThrottle?: Maybe<FieldWrapper<GqlReleaseThrottle>>;
  releaseThrottles: Array<FieldWrapper<GqlReleaseThrottle>>;
  aggregateReleaseThrottle: FieldWrapper<GqlAggregateReleaseThrottle>;
  groupByReleaseThrottle: Array<FieldWrapper<GqlReleaseThrottleGroupBy>>;
  stream?: Maybe<FieldWrapper<GqlStream>>;
  findFirstStream?: Maybe<FieldWrapper<GqlStream>>;
  streams: Array<FieldWrapper<GqlStream>>;
  aggregateStream: FieldWrapper<GqlAggregateStream>;
  groupByStream: Array<FieldWrapper<GqlStreamGroupBy>>;
  subscription?: Maybe<FieldWrapper<GqlSubscription>>;
  findFirstSubscription?: Maybe<FieldWrapper<GqlSubscription>>;
  subscriptions: Array<FieldWrapper<GqlSubscription>>;
  aggregateSubscription: FieldWrapper<GqlAggregateSubscription>;
  groupBySubscription: Array<FieldWrapper<GqlSubscriptionGroupBy>>;
  user?: Maybe<FieldWrapper<GqlUser>>;
  findFirstUser?: Maybe<FieldWrapper<GqlUser>>;
  users: Array<FieldWrapper<GqlUser>>;
  aggregateUser: FieldWrapper<GqlAggregateUser>;
  groupByUser: Array<FieldWrapper<GqlUserGroupBy>>;
  discoverFeedsByUrl: FieldWrapper<GqlDiscoveredFeeds>;
  articlesForFeedUrl: Array<FieldWrapper<GqlArticle>>;
};


export type GqlQueryArticleArgs = {
  where: GqlArticleWhereUniqueInput;
};


export type GqlQueryFindFirstArticleArgs = {
  where?: Maybe<GqlArticleWhereInput>;
  orderBy?: Maybe<Array<GqlArticleOrderByInput>>;
  cursor?: Maybe<GqlArticleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleScalarFieldEnum>>;
};


export type GqlQueryArticlesArgs = {
  where?: Maybe<GqlArticleWhereInput>;
  orderBy?: Maybe<Array<GqlArticleOrderByInput>>;
  cursor?: Maybe<GqlArticleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleScalarFieldEnum>>;
};


export type GqlQueryAggregateArticleArgs = {
  where?: Maybe<GqlArticleWhereInput>;
  orderBy?: Maybe<Array<GqlArticleOrderByInput>>;
  cursor?: Maybe<GqlArticleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByArticleArgs = {
  where?: Maybe<GqlArticleWhereInput>;
  orderBy?: Maybe<Array<GqlArticleOrderByInput>>;
  by: Array<GqlArticleScalarFieldEnum>;
  having?: Maybe<GqlArticleScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryArticlePostProcessorArgs = {
  where: GqlArticlePostProcessorWhereUniqueInput;
};


export type GqlQueryFindFirstArticlePostProcessorArgs = {
  where?: Maybe<GqlArticlePostProcessorWhereInput>;
  orderBy?: Maybe<Array<GqlArticlePostProcessorOrderByInput>>;
  cursor?: Maybe<GqlArticlePostProcessorWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticlePostProcessorScalarFieldEnum>>;
};


export type GqlQueryArticlePostProcessorsArgs = {
  where?: Maybe<GqlArticlePostProcessorWhereInput>;
  orderBy?: Maybe<Array<GqlArticlePostProcessorOrderByInput>>;
  cursor?: Maybe<GqlArticlePostProcessorWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticlePostProcessorScalarFieldEnum>>;
};


export type GqlQueryAggregateArticlePostProcessorArgs = {
  where?: Maybe<GqlArticlePostProcessorWhereInput>;
  orderBy?: Maybe<Array<GqlArticlePostProcessorOrderByInput>>;
  cursor?: Maybe<GqlArticlePostProcessorWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByArticlePostProcessorArgs = {
  where?: Maybe<GqlArticlePostProcessorWhereInput>;
  orderBy?: Maybe<Array<GqlArticlePostProcessorOrderByInput>>;
  by: Array<GqlArticlePostProcessorScalarFieldEnum>;
  having?: Maybe<GqlArticlePostProcessorScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryArticleRefArgs = {
  where: GqlArticleRefWhereUniqueInput;
};


export type GqlQueryFindFirstArticleRefArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  cursor?: Maybe<GqlArticleRefWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleRefScalarFieldEnum>>;
};


export type GqlQueryArticleRefsArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  cursor?: Maybe<GqlArticleRefWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleRefScalarFieldEnum>>;
};


export type GqlQueryAggregateArticleRefArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  cursor?: Maybe<GqlArticleRefWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByArticleRefArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  by: Array<GqlArticleRefScalarFieldEnum>;
  having?: Maybe<GqlArticleRefScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryBucketArgs = {
  where: GqlBucketWhereUniqueInput;
};


export type GqlQueryFindFirstBucketArgs = {
  where?: Maybe<GqlBucketWhereInput>;
  orderBy?: Maybe<Array<GqlBucketOrderByInput>>;
  cursor?: Maybe<GqlBucketWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlBucketScalarFieldEnum>>;
};


export type GqlQueryBucketsArgs = {
  where?: Maybe<GqlBucketWhereInput>;
  orderBy?: Maybe<Array<GqlBucketOrderByInput>>;
  cursor?: Maybe<GqlBucketWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlBucketScalarFieldEnum>>;
};


export type GqlQueryAggregateBucketArgs = {
  where?: Maybe<GqlBucketWhereInput>;
  orderBy?: Maybe<Array<GqlBucketOrderByInput>>;
  cursor?: Maybe<GqlBucketWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByBucketArgs = {
  where?: Maybe<GqlBucketWhereInput>;
  orderBy?: Maybe<Array<GqlBucketOrderByInput>>;
  by: Array<GqlBucketScalarFieldEnum>;
  having?: Maybe<GqlBucketScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryFeedArgs = {
  where: GqlFeedWhereUniqueInput;
};


export type GqlQueryFindFirstFeedArgs = {
  where?: Maybe<GqlFeedWhereInput>;
  orderBy?: Maybe<Array<GqlFeedOrderByInput>>;
  cursor?: Maybe<GqlFeedWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlFeedScalarFieldEnum>>;
};


export type GqlQueryFeedsArgs = {
  where?: Maybe<GqlFeedWhereInput>;
  orderBy?: Maybe<Array<GqlFeedOrderByInput>>;
  cursor?: Maybe<GqlFeedWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlFeedScalarFieldEnum>>;
};


export type GqlQueryAggregateFeedArgs = {
  where?: Maybe<GqlFeedWhereInput>;
  orderBy?: Maybe<Array<GqlFeedOrderByInput>>;
  cursor?: Maybe<GqlFeedWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByFeedArgs = {
  where?: Maybe<GqlFeedWhereInput>;
  orderBy?: Maybe<Array<GqlFeedOrderByInput>>;
  by: Array<GqlFeedScalarFieldEnum>;
  having?: Maybe<GqlFeedScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryFeedEventArgs = {
  where: GqlFeedEventWhereUniqueInput;
};


export type GqlQueryFindFirstFeedEventArgs = {
  where?: Maybe<GqlFeedEventWhereInput>;
  orderBy?: Maybe<Array<GqlFeedEventOrderByInput>>;
  cursor?: Maybe<GqlFeedEventWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlFeedEventScalarFieldEnum>>;
};


export type GqlQueryFeedEventsArgs = {
  where?: Maybe<GqlFeedEventWhereInput>;
  orderBy?: Maybe<Array<GqlFeedEventOrderByInput>>;
  cursor?: Maybe<GqlFeedEventWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlFeedEventScalarFieldEnum>>;
};


export type GqlQueryAggregateFeedEventArgs = {
  where?: Maybe<GqlFeedEventWhereInput>;
  orderBy?: Maybe<Array<GqlFeedEventOrderByInput>>;
  cursor?: Maybe<GqlFeedEventWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByFeedEventArgs = {
  where?: Maybe<GqlFeedEventWhereInput>;
  orderBy?: Maybe<Array<GqlFeedEventOrderByInput>>;
  by: Array<GqlFeedEventScalarFieldEnum>;
  having?: Maybe<GqlFeedEventScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryNoFollowUrlArgs = {
  where: GqlNoFollowUrlWhereUniqueInput;
};


export type GqlQueryFindFirstNoFollowUrlArgs = {
  where?: Maybe<GqlNoFollowUrlWhereInput>;
  orderBy?: Maybe<Array<GqlNoFollowUrlOrderByInput>>;
  cursor?: Maybe<GqlNoFollowUrlWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlNoFollowUrlScalarFieldEnum>>;
};


export type GqlQueryNoFollowUrlsArgs = {
  where?: Maybe<GqlNoFollowUrlWhereInput>;
  orderBy?: Maybe<Array<GqlNoFollowUrlOrderByInput>>;
  cursor?: Maybe<GqlNoFollowUrlWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlNoFollowUrlScalarFieldEnum>>;
};


export type GqlQueryAggregateNoFollowUrlArgs = {
  where?: Maybe<GqlNoFollowUrlWhereInput>;
  orderBy?: Maybe<Array<GqlNoFollowUrlOrderByInput>>;
  cursor?: Maybe<GqlNoFollowUrlWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByNoFollowUrlArgs = {
  where?: Maybe<GqlNoFollowUrlWhereInput>;
  orderBy?: Maybe<Array<GqlNoFollowUrlOrderByInput>>;
  by: Array<GqlNoFollowUrlScalarFieldEnum>;
  having?: Maybe<GqlNoFollowUrlScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryNotebookArgs = {
  where: GqlNotebookWhereUniqueInput;
};


export type GqlQueryFindFirstNotebookArgs = {
  where?: Maybe<GqlNotebookWhereInput>;
  orderBy?: Maybe<Array<GqlNotebookOrderByInput>>;
  cursor?: Maybe<GqlNotebookWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlNotebookScalarFieldEnum>>;
};


export type GqlQueryNotebooksArgs = {
  where?: Maybe<GqlNotebookWhereInput>;
  orderBy?: Maybe<Array<GqlNotebookOrderByInput>>;
  cursor?: Maybe<GqlNotebookWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlNotebookScalarFieldEnum>>;
};


export type GqlQueryAggregateNotebookArgs = {
  where?: Maybe<GqlNotebookWhereInput>;
  orderBy?: Maybe<Array<GqlNotebookOrderByInput>>;
  cursor?: Maybe<GqlNotebookWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByNotebookArgs = {
  where?: Maybe<GqlNotebookWhereInput>;
  orderBy?: Maybe<Array<GqlNotebookOrderByInput>>;
  by: Array<GqlNotebookScalarFieldEnum>;
  having?: Maybe<GqlNotebookScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryReleaseThrottleArgs = {
  where: GqlReleaseThrottleWhereUniqueInput;
};


export type GqlQueryFindFirstReleaseThrottleArgs = {
  where?: Maybe<GqlReleaseThrottleWhereInput>;
  orderBy?: Maybe<Array<GqlReleaseThrottleOrderByInput>>;
  cursor?: Maybe<GqlReleaseThrottleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlReleaseThrottleScalarFieldEnum>>;
};


export type GqlQueryReleaseThrottlesArgs = {
  where?: Maybe<GqlReleaseThrottleWhereInput>;
  orderBy?: Maybe<Array<GqlReleaseThrottleOrderByInput>>;
  cursor?: Maybe<GqlReleaseThrottleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlReleaseThrottleScalarFieldEnum>>;
};


export type GqlQueryAggregateReleaseThrottleArgs = {
  where?: Maybe<GqlReleaseThrottleWhereInput>;
  orderBy?: Maybe<Array<GqlReleaseThrottleOrderByInput>>;
  cursor?: Maybe<GqlReleaseThrottleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByReleaseThrottleArgs = {
  where?: Maybe<GqlReleaseThrottleWhereInput>;
  orderBy?: Maybe<Array<GqlReleaseThrottleOrderByInput>>;
  by: Array<GqlReleaseThrottleScalarFieldEnum>;
  having?: Maybe<GqlReleaseThrottleScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryStreamArgs = {
  where: GqlStreamWhereUniqueInput;
};


export type GqlQueryFindFirstStreamArgs = {
  where?: Maybe<GqlStreamWhereInput>;
  orderBy?: Maybe<Array<GqlStreamOrderByInput>>;
  cursor?: Maybe<GqlStreamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlStreamScalarFieldEnum>>;
};


export type GqlQueryStreamsArgs = {
  where?: Maybe<GqlStreamWhereInput>;
  orderBy?: Maybe<Array<GqlStreamOrderByInput>>;
  cursor?: Maybe<GqlStreamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlStreamScalarFieldEnum>>;
};


export type GqlQueryAggregateStreamArgs = {
  where?: Maybe<GqlStreamWhereInput>;
  orderBy?: Maybe<Array<GqlStreamOrderByInput>>;
  cursor?: Maybe<GqlStreamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByStreamArgs = {
  where?: Maybe<GqlStreamWhereInput>;
  orderBy?: Maybe<Array<GqlStreamOrderByInput>>;
  by: Array<GqlStreamScalarFieldEnum>;
  having?: Maybe<GqlStreamScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQuerySubscriptionArgs = {
  where: GqlSubscriptionWhereUniqueInput;
};


export type GqlQueryFindFirstSubscriptionArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  cursor?: Maybe<GqlSubscriptionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlSubscriptionScalarFieldEnum>>;
};


export type GqlQuerySubscriptionsArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  cursor?: Maybe<GqlSubscriptionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlSubscriptionScalarFieldEnum>>;
};


export type GqlQueryAggregateSubscriptionArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  cursor?: Maybe<GqlSubscriptionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupBySubscriptionArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  by: Array<GqlSubscriptionScalarFieldEnum>;
  having?: Maybe<GqlSubscriptionScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryUserArgs = {
  where: GqlUserWhereUniqueInput;
};


export type GqlQueryFindFirstUserArgs = {
  where?: Maybe<GqlUserWhereInput>;
  orderBy?: Maybe<Array<GqlUserOrderByInput>>;
  cursor?: Maybe<GqlUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlUserScalarFieldEnum>>;
};


export type GqlQueryUsersArgs = {
  where?: Maybe<GqlUserWhereInput>;
  orderBy?: Maybe<Array<GqlUserOrderByInput>>;
  cursor?: Maybe<GqlUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlUserScalarFieldEnum>>;
};


export type GqlQueryAggregateUserArgs = {
  where?: Maybe<GqlUserWhereInput>;
  orderBy?: Maybe<Array<GqlUserOrderByInput>>;
  cursor?: Maybe<GqlUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryGroupByUserArgs = {
  where?: Maybe<GqlUserWhereInput>;
  orderBy?: Maybe<Array<GqlUserOrderByInput>>;
  by: Array<GqlUserScalarFieldEnum>;
  having?: Maybe<GqlUserScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type GqlQueryDiscoverFeedsByUrlArgs = {
  url: Scalars['String'];
};


export type GqlQueryArticlesForFeedUrlArgs = {
  feedUrl: Scalars['String'];
};

export type GqlReleaseThrottle = {
  __typename?: 'ReleaseThrottle';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  take: FieldWrapper<Scalars['Int']>;
  window: FieldWrapper<Scalars['String']>;
  scoreCriteria?: Maybe<FieldWrapper<Scalars['String']>>;
  subscriptions: Array<FieldWrapper<GqlSubscription>>;
};


export type GqlReleaseThrottleSubscriptionsArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  cursor?: Maybe<GqlSubscriptionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlSubscriptionScalarFieldEnum>>;
};

export type GqlReleaseThrottleAvgAggregate = {
  __typename?: 'ReleaseThrottleAvgAggregate';
  take?: Maybe<FieldWrapper<Scalars['Float']>>;
};

export type GqlReleaseThrottleCountAggregate = {
  __typename?: 'ReleaseThrottleCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  updatedAt: FieldWrapper<Scalars['Int']>;
  take: FieldWrapper<Scalars['Int']>;
  window: FieldWrapper<Scalars['Int']>;
  scoreCriteria: FieldWrapper<Scalars['Int']>;
  nextReleaseAt: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlReleaseThrottleCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  take?: Maybe<Scalars['Int']>;
  window?: Maybe<Scalars['String']>;
  scoreCriteria?: Maybe<Scalars['String']>;
  nextReleaseAt?: Maybe<Scalars['DateTime']>;
  subscriptions?: Maybe<GqlSubscriptionCreateNestedManyWithoutThrottleInput>;
};

export type GqlReleaseThrottleCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  take?: Maybe<Scalars['Int']>;
  window?: Maybe<Scalars['String']>;
  scoreCriteria?: Maybe<Scalars['String']>;
  nextReleaseAt?: Maybe<Scalars['DateTime']>;
};

export type GqlReleaseThrottleCreateNestedOneWithoutSubscriptionsInput = {
  create?: Maybe<GqlReleaseThrottleCreateWithoutSubscriptionsInput>;
  connectOrCreate?: Maybe<GqlReleaseThrottleCreateOrConnectWithoutSubscriptionsInput>;
  connect?: Maybe<GqlReleaseThrottleWhereUniqueInput>;
};

export type GqlReleaseThrottleCreateOrConnectWithoutSubscriptionsInput = {
  where: GqlReleaseThrottleWhereUniqueInput;
  create: GqlReleaseThrottleCreateWithoutSubscriptionsInput;
};

export type GqlReleaseThrottleCreateWithoutSubscriptionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  take?: Maybe<Scalars['Int']>;
  window?: Maybe<Scalars['String']>;
  scoreCriteria?: Maybe<Scalars['String']>;
  nextReleaseAt?: Maybe<Scalars['DateTime']>;
};

export type GqlReleaseThrottleGroupBy = {
  __typename?: 'ReleaseThrottleGroupBy';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  take: FieldWrapper<Scalars['Int']>;
  window: FieldWrapper<Scalars['String']>;
  scoreCriteria?: Maybe<FieldWrapper<Scalars['String']>>;
  nextReleaseAt: FieldWrapper<Scalars['DateTime']>;
  _count?: Maybe<FieldWrapper<GqlReleaseThrottleCountAggregate>>;
  _avg?: Maybe<FieldWrapper<GqlReleaseThrottleAvgAggregate>>;
  _sum?: Maybe<FieldWrapper<GqlReleaseThrottleSumAggregate>>;
  _min?: Maybe<FieldWrapper<GqlReleaseThrottleMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlReleaseThrottleMaxAggregate>>;
};

export type GqlReleaseThrottleMaxAggregate = {
  __typename?: 'ReleaseThrottleMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  take?: Maybe<FieldWrapper<Scalars['Int']>>;
  window?: Maybe<FieldWrapper<Scalars['String']>>;
  scoreCriteria?: Maybe<FieldWrapper<Scalars['String']>>;
  nextReleaseAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
};

export type GqlReleaseThrottleMinAggregate = {
  __typename?: 'ReleaseThrottleMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  take?: Maybe<FieldWrapper<Scalars['Int']>>;
  window?: Maybe<FieldWrapper<Scalars['String']>>;
  scoreCriteria?: Maybe<FieldWrapper<Scalars['String']>>;
  nextReleaseAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
};

export type GqlReleaseThrottleOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  updatedAt?: Maybe<GqlSortOrder>;
  take?: Maybe<GqlSortOrder>;
  window?: Maybe<GqlSortOrder>;
  scoreCriteria?: Maybe<GqlSortOrder>;
  nextReleaseAt?: Maybe<GqlSortOrder>;
};

export type GqlReleaseThrottleRelationFilter = {
  is?: Maybe<GqlReleaseThrottleWhereInput>;
  isNot?: Maybe<GqlReleaseThrottleWhereInput>;
};

export enum GqlReleaseThrottleScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Take = 'take',
  Window = 'window',
  ScoreCriteria = 'scoreCriteria',
  NextReleaseAt = 'nextReleaseAt'
}

export type GqlReleaseThrottleScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlReleaseThrottleScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlReleaseThrottleScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlReleaseThrottleScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  take?: Maybe<GqlIntWithAggregatesFilter>;
  window?: Maybe<GqlStringWithAggregatesFilter>;
  scoreCriteria?: Maybe<GqlStringNullableWithAggregatesFilter>;
  nextReleaseAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
};

export type GqlReleaseThrottleSumAggregate = {
  __typename?: 'ReleaseThrottleSumAggregate';
  take?: Maybe<FieldWrapper<Scalars['Int']>>;
};

export type GqlReleaseThrottleUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  take?: Maybe<GqlIntFieldUpdateOperationsInput>;
  window?: Maybe<GqlStringFieldUpdateOperationsInput>;
  scoreCriteria?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  nextReleaseAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  subscriptions?: Maybe<GqlSubscriptionUpdateManyWithoutThrottleInput>;
};

export type GqlReleaseThrottleUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  take?: Maybe<GqlIntFieldUpdateOperationsInput>;
  window?: Maybe<GqlStringFieldUpdateOperationsInput>;
  scoreCriteria?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  nextReleaseAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
};

export type GqlReleaseThrottleUpdateOneWithoutSubscriptionsInput = {
  create?: Maybe<GqlReleaseThrottleCreateWithoutSubscriptionsInput>;
  connectOrCreate?: Maybe<GqlReleaseThrottleCreateOrConnectWithoutSubscriptionsInput>;
  upsert?: Maybe<GqlReleaseThrottleUpsertWithoutSubscriptionsInput>;
  connect?: Maybe<GqlReleaseThrottleWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GqlReleaseThrottleUpdateWithoutSubscriptionsInput>;
};

export type GqlReleaseThrottleUpdateWithoutSubscriptionsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  take?: Maybe<GqlIntFieldUpdateOperationsInput>;
  window?: Maybe<GqlStringFieldUpdateOperationsInput>;
  scoreCriteria?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  nextReleaseAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
};

export type GqlReleaseThrottleUpsertWithoutSubscriptionsInput = {
  update: GqlReleaseThrottleUpdateWithoutSubscriptionsInput;
  create: GqlReleaseThrottleCreateWithoutSubscriptionsInput;
};

export type GqlReleaseThrottleWhereInput = {
  AND?: Maybe<Array<GqlReleaseThrottleWhereInput>>;
  OR?: Maybe<Array<GqlReleaseThrottleWhereInput>>;
  NOT?: Maybe<Array<GqlReleaseThrottleWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  take?: Maybe<GqlIntFilter>;
  window?: Maybe<GqlStringFilter>;
  scoreCriteria?: Maybe<GqlStringNullableFilter>;
  nextReleaseAt?: Maybe<GqlDateTimeFilter>;
  subscriptions?: Maybe<GqlSubscriptionListRelationFilter>;
};

export type GqlReleaseThrottleWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum GqlSortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type GqlStream = {
  __typename?: 'Stream';
  id: FieldWrapper<Scalars['String']>;
  articleRefs: Array<FieldWrapper<GqlArticleRef>>;
  feeds: Array<FieldWrapper<GqlFeed>>;
  buckets: Array<FieldWrapper<GqlBucket>>;
  notebooks: Array<FieldWrapper<GqlNotebook>>;
};


export type GqlStreamArticleRefsArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  cursor?: Maybe<GqlArticleRefWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleRefScalarFieldEnum>>;
};


export type GqlStreamFeedsArgs = {
  where?: Maybe<GqlFeedWhereInput>;
  orderBy?: Maybe<Array<GqlFeedOrderByInput>>;
  cursor?: Maybe<GqlFeedWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlFeedScalarFieldEnum>>;
};


export type GqlStreamBucketsArgs = {
  where?: Maybe<GqlBucketWhereInput>;
  orderBy?: Maybe<Array<GqlBucketOrderByInput>>;
  cursor?: Maybe<GqlBucketWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlBucketScalarFieldEnum>>;
};


export type GqlStreamNotebooksArgs = {
  where?: Maybe<GqlNotebookWhereInput>;
  orderBy?: Maybe<Array<GqlNotebookOrderByInput>>;
  cursor?: Maybe<GqlNotebookWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlNotebookScalarFieldEnum>>;
};

export type GqlStreamCountAggregate = {
  __typename?: 'StreamCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlStreamCreateInput = {
  id?: Maybe<Scalars['String']>;
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutStreamInput>;
  feeds?: Maybe<GqlFeedCreateNestedManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutStreamInput>;
};

export type GqlStreamCreateManyInput = {
  id?: Maybe<Scalars['String']>;
};

export type GqlStreamCreateNestedManyWithoutArticleRefsInput = {
  create?: Maybe<Array<GqlStreamCreateWithoutArticleRefsInput>>;
  connectOrCreate?: Maybe<Array<GqlStreamCreateOrConnectWithoutArticleRefsInput>>;
  connect?: Maybe<Array<GqlStreamWhereUniqueInput>>;
};

export type GqlStreamCreateNestedOneWithoutBucketsInput = {
  create?: Maybe<GqlStreamCreateWithoutBucketsInput>;
  connectOrCreate?: Maybe<GqlStreamCreateOrConnectWithoutBucketsInput>;
  connect?: Maybe<GqlStreamWhereUniqueInput>;
};

export type GqlStreamCreateNestedOneWithoutFeedsInput = {
  create?: Maybe<GqlStreamCreateWithoutFeedsInput>;
  connectOrCreate?: Maybe<GqlStreamCreateOrConnectWithoutFeedsInput>;
  connect?: Maybe<GqlStreamWhereUniqueInput>;
};

export type GqlStreamCreateNestedOneWithoutNotebooksInput = {
  create?: Maybe<GqlStreamCreateWithoutNotebooksInput>;
  connectOrCreate?: Maybe<GqlStreamCreateOrConnectWithoutNotebooksInput>;
  connect?: Maybe<GqlStreamWhereUniqueInput>;
};

export type GqlStreamCreateOrConnectWithoutArticleRefsInput = {
  where: GqlStreamWhereUniqueInput;
  create: GqlStreamCreateWithoutArticleRefsInput;
};

export type GqlStreamCreateOrConnectWithoutBucketsInput = {
  where: GqlStreamWhereUniqueInput;
  create: GqlStreamCreateWithoutBucketsInput;
};

export type GqlStreamCreateOrConnectWithoutFeedsInput = {
  where: GqlStreamWhereUniqueInput;
  create: GqlStreamCreateWithoutFeedsInput;
};

export type GqlStreamCreateOrConnectWithoutNotebooksInput = {
  where: GqlStreamWhereUniqueInput;
  create: GqlStreamCreateWithoutNotebooksInput;
};

export type GqlStreamCreateWithoutArticleRefsInput = {
  id?: Maybe<Scalars['String']>;
  feeds?: Maybe<GqlFeedCreateNestedManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutStreamInput>;
};

export type GqlStreamCreateWithoutBucketsInput = {
  id?: Maybe<Scalars['String']>;
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutStreamInput>;
  feeds?: Maybe<GqlFeedCreateNestedManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutStreamInput>;
};

export type GqlStreamCreateWithoutFeedsInput = {
  id?: Maybe<Scalars['String']>;
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutStreamInput>;
};

export type GqlStreamCreateWithoutNotebooksInput = {
  id?: Maybe<Scalars['String']>;
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutStreamInput>;
  feeds?: Maybe<GqlFeedCreateNestedManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutStreamInput>;
};

export type GqlStreamGroupBy = {
  __typename?: 'StreamGroupBy';
  id: FieldWrapper<Scalars['String']>;
  _count?: Maybe<FieldWrapper<GqlStreamCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlStreamMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlStreamMaxAggregate>>;
};

export type GqlStreamListRelationFilter = {
  every?: Maybe<GqlStreamWhereInput>;
  some?: Maybe<GqlStreamWhereInput>;
  none?: Maybe<GqlStreamWhereInput>;
};

export type GqlStreamMaxAggregate = {
  __typename?: 'StreamMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlStreamMinAggregate = {
  __typename?: 'StreamMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlStreamOrderByInput = {
  id?: Maybe<GqlSortOrder>;
};

export type GqlStreamRelationFilter = {
  is?: Maybe<GqlStreamWhereInput>;
  isNot?: Maybe<GqlStreamWhereInput>;
};

export enum GqlStreamScalarFieldEnum {
  Id = 'id'
}

export type GqlStreamScalarWhereInput = {
  AND?: Maybe<Array<GqlStreamScalarWhereInput>>;
  OR?: Maybe<Array<GqlStreamScalarWhereInput>>;
  NOT?: Maybe<Array<GqlStreamScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
};

export type GqlStreamScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlStreamScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlStreamScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlStreamScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
};

export type GqlStreamUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutStreamInput>;
  feeds?: Maybe<GqlFeedUpdateManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutStreamInput>;
};

export type GqlStreamUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
};

export type GqlStreamUpdateManyWithWhereWithoutArticleRefsInput = {
  where: GqlStreamScalarWhereInput;
  data: GqlStreamUpdateManyMutationInput;
};

export type GqlStreamUpdateManyWithoutArticleRefsInput = {
  create?: Maybe<Array<GqlStreamCreateWithoutArticleRefsInput>>;
  connectOrCreate?: Maybe<Array<GqlStreamCreateOrConnectWithoutArticleRefsInput>>;
  upsert?: Maybe<Array<GqlStreamUpsertWithWhereUniqueWithoutArticleRefsInput>>;
  connect?: Maybe<Array<GqlStreamWhereUniqueInput>>;
  set?: Maybe<Array<GqlStreamWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlStreamWhereUniqueInput>>;
  delete?: Maybe<Array<GqlStreamWhereUniqueInput>>;
  update?: Maybe<Array<GqlStreamUpdateWithWhereUniqueWithoutArticleRefsInput>>;
  updateMany?: Maybe<Array<GqlStreamUpdateManyWithWhereWithoutArticleRefsInput>>;
  deleteMany?: Maybe<Array<GqlStreamScalarWhereInput>>;
};

export type GqlStreamUpdateOneRequiredWithoutBucketsInput = {
  create?: Maybe<GqlStreamCreateWithoutBucketsInput>;
  connectOrCreate?: Maybe<GqlStreamCreateOrConnectWithoutBucketsInput>;
  upsert?: Maybe<GqlStreamUpsertWithoutBucketsInput>;
  connect?: Maybe<GqlStreamWhereUniqueInput>;
  update?: Maybe<GqlStreamUpdateWithoutBucketsInput>;
};

export type GqlStreamUpdateOneRequiredWithoutFeedsInput = {
  create?: Maybe<GqlStreamCreateWithoutFeedsInput>;
  connectOrCreate?: Maybe<GqlStreamCreateOrConnectWithoutFeedsInput>;
  upsert?: Maybe<GqlStreamUpsertWithoutFeedsInput>;
  connect?: Maybe<GqlStreamWhereUniqueInput>;
  update?: Maybe<GqlStreamUpdateWithoutFeedsInput>;
};

export type GqlStreamUpdateOneRequiredWithoutNotebooksInput = {
  create?: Maybe<GqlStreamCreateWithoutNotebooksInput>;
  connectOrCreate?: Maybe<GqlStreamCreateOrConnectWithoutNotebooksInput>;
  upsert?: Maybe<GqlStreamUpsertWithoutNotebooksInput>;
  connect?: Maybe<GqlStreamWhereUniqueInput>;
  update?: Maybe<GqlStreamUpdateWithoutNotebooksInput>;
};

export type GqlStreamUpdateWithWhereUniqueWithoutArticleRefsInput = {
  where: GqlStreamWhereUniqueInput;
  data: GqlStreamUpdateWithoutArticleRefsInput;
};

export type GqlStreamUpdateWithoutArticleRefsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  feeds?: Maybe<GqlFeedUpdateManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutStreamInput>;
};

export type GqlStreamUpdateWithoutBucketsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutStreamInput>;
  feeds?: Maybe<GqlFeedUpdateManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutStreamInput>;
};

export type GqlStreamUpdateWithoutFeedsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutStreamInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutStreamInput>;
};

export type GqlStreamUpdateWithoutNotebooksInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutStreamInput>;
  feeds?: Maybe<GqlFeedUpdateManyWithoutStreamInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutStreamInput>;
};

export type GqlStreamUpsertWithWhereUniqueWithoutArticleRefsInput = {
  where: GqlStreamWhereUniqueInput;
  update: GqlStreamUpdateWithoutArticleRefsInput;
  create: GqlStreamCreateWithoutArticleRefsInput;
};

export type GqlStreamUpsertWithoutBucketsInput = {
  update: GqlStreamUpdateWithoutBucketsInput;
  create: GqlStreamCreateWithoutBucketsInput;
};

export type GqlStreamUpsertWithoutFeedsInput = {
  update: GqlStreamUpdateWithoutFeedsInput;
  create: GqlStreamCreateWithoutFeedsInput;
};

export type GqlStreamUpsertWithoutNotebooksInput = {
  update: GqlStreamUpdateWithoutNotebooksInput;
  create: GqlStreamCreateWithoutNotebooksInput;
};

export type GqlStreamWhereInput = {
  AND?: Maybe<Array<GqlStreamWhereInput>>;
  OR?: Maybe<Array<GqlStreamWhereInput>>;
  NOT?: Maybe<Array<GqlStreamWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  articleRefs?: Maybe<GqlArticleRefListRelationFilter>;
  feeds?: Maybe<GqlFeedListRelationFilter>;
  buckets?: Maybe<GqlBucketListRelationFilter>;
  notebooks?: Maybe<GqlNotebookListRelationFilter>;
};

export type GqlStreamWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GqlStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type GqlStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringFilter>;
};

export type GqlStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringNullableFilter>;
};

export type GqlStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntNullableFilter>;
  _min?: Maybe<GqlNestedStringNullableFilter>;
  _max?: Maybe<GqlNestedStringNullableFilter>;
};

export type GqlStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<GqlNestedStringWithAggregatesFilter>;
  _count?: Maybe<GqlNestedIntFilter>;
  _min?: Maybe<GqlNestedStringFilter>;
  _max?: Maybe<GqlNestedStringFilter>;
};

export type GqlSubscription = {
  __typename?: 'Subscription';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  title: FieldWrapper<Scalars['String']>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  throttleId?: Maybe<FieldWrapper<Scalars['String']>>;
  feedId: FieldWrapper<Scalars['String']>;
  ownerId: FieldWrapper<Scalars['String']>;
  bucketId: FieldWrapper<Scalars['String']>;
  throttle?: Maybe<FieldWrapper<GqlReleaseThrottle>>;
  feed: FieldWrapper<GqlFeed>;
  owner: FieldWrapper<GqlUser>;
  bucket: FieldWrapper<GqlBucket>;
};

export type GqlSubscriptionCountAggregate = {
  __typename?: 'SubscriptionCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  createdAt: FieldWrapper<Scalars['Int']>;
  updatedAt: FieldWrapper<Scalars['Int']>;
  title: FieldWrapper<Scalars['Int']>;
  description: FieldWrapper<Scalars['Int']>;
  tags: FieldWrapper<Scalars['Int']>;
  throttleId: FieldWrapper<Scalars['Int']>;
  feedId: FieldWrapper<Scalars['Int']>;
  ownerId: FieldWrapper<Scalars['Int']>;
  bucketId: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlSubscriptionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleCreateNestedOneWithoutSubscriptionsInput>;
  feed: GqlFeedCreateNestedOneWithoutSubscriptionsInput;
  owner: GqlUserCreateNestedOneWithoutSubscriptionInput;
  bucket: GqlBucketCreateNestedOneWithoutSubscriptionsInput;
};

export type GqlSubscriptionCreateManyBucketInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttleId?: Maybe<Scalars['String']>;
  feedId: Scalars['String'];
  ownerId: Scalars['String'];
};

export type GqlSubscriptionCreateManyBucketInputEnvelope = {
  data: Array<GqlSubscriptionCreateManyBucketInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlSubscriptionCreateManyFeedInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttleId?: Maybe<Scalars['String']>;
  ownerId: Scalars['String'];
  bucketId: Scalars['String'];
};

export type GqlSubscriptionCreateManyFeedInputEnvelope = {
  data: Array<GqlSubscriptionCreateManyFeedInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlSubscriptionCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttleId?: Maybe<Scalars['String']>;
  feedId: Scalars['String'];
  ownerId: Scalars['String'];
  bucketId: Scalars['String'];
};

export type GqlSubscriptionCreateManyOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttleId?: Maybe<Scalars['String']>;
  feedId: Scalars['String'];
  bucketId: Scalars['String'];
};

export type GqlSubscriptionCreateManyOwnerInputEnvelope = {
  data: Array<GqlSubscriptionCreateManyOwnerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlSubscriptionCreateManyThrottleInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  feedId: Scalars['String'];
  ownerId: Scalars['String'];
  bucketId: Scalars['String'];
};

export type GqlSubscriptionCreateManyThrottleInputEnvelope = {
  data: Array<GqlSubscriptionCreateManyThrottleInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GqlSubscriptionCreateNestedManyWithoutBucketInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutBucketInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutBucketInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyBucketInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
};

export type GqlSubscriptionCreateNestedManyWithoutFeedInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutFeedInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutFeedInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyFeedInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
};

export type GqlSubscriptionCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutOwnerInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
};

export type GqlSubscriptionCreateNestedManyWithoutThrottleInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutThrottleInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutThrottleInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyThrottleInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
};

export type GqlSubscriptionCreateOrConnectWithoutBucketInput = {
  where: GqlSubscriptionWhereUniqueInput;
  create: GqlSubscriptionCreateWithoutBucketInput;
};

export type GqlSubscriptionCreateOrConnectWithoutFeedInput = {
  where: GqlSubscriptionWhereUniqueInput;
  create: GqlSubscriptionCreateWithoutFeedInput;
};

export type GqlSubscriptionCreateOrConnectWithoutOwnerInput = {
  where: GqlSubscriptionWhereUniqueInput;
  create: GqlSubscriptionCreateWithoutOwnerInput;
};

export type GqlSubscriptionCreateOrConnectWithoutThrottleInput = {
  where: GqlSubscriptionWhereUniqueInput;
  create: GqlSubscriptionCreateWithoutThrottleInput;
};

export type GqlSubscriptionCreateWithoutBucketInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleCreateNestedOneWithoutSubscriptionsInput>;
  feed: GqlFeedCreateNestedOneWithoutSubscriptionsInput;
  owner: GqlUserCreateNestedOneWithoutSubscriptionInput;
};

export type GqlSubscriptionCreateWithoutFeedInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleCreateNestedOneWithoutSubscriptionsInput>;
  owner: GqlUserCreateNestedOneWithoutSubscriptionInput;
  bucket: GqlBucketCreateNestedOneWithoutSubscriptionsInput;
};

export type GqlSubscriptionCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleCreateNestedOneWithoutSubscriptionsInput>;
  feed: GqlFeedCreateNestedOneWithoutSubscriptionsInput;
  bucket: GqlBucketCreateNestedOneWithoutSubscriptionsInput;
};

export type GqlSubscriptionCreateWithoutThrottleInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  feed: GqlFeedCreateNestedOneWithoutSubscriptionsInput;
  owner: GqlUserCreateNestedOneWithoutSubscriptionInput;
  bucket: GqlBucketCreateNestedOneWithoutSubscriptionsInput;
};

export type GqlSubscriptionGroupBy = {
  __typename?: 'SubscriptionGroupBy';
  id: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['DateTime']>;
  updatedAt: FieldWrapper<Scalars['DateTime']>;
  title: FieldWrapper<Scalars['String']>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  tags?: Maybe<FieldWrapper<Scalars['JSON']>>;
  throttleId?: Maybe<FieldWrapper<Scalars['String']>>;
  feedId: FieldWrapper<Scalars['String']>;
  ownerId: FieldWrapper<Scalars['String']>;
  bucketId: FieldWrapper<Scalars['String']>;
  _count?: Maybe<FieldWrapper<GqlSubscriptionCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlSubscriptionMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlSubscriptionMaxAggregate>>;
};

export type GqlSubscriptionListRelationFilter = {
  every?: Maybe<GqlSubscriptionWhereInput>;
  some?: Maybe<GqlSubscriptionWhereInput>;
  none?: Maybe<GqlSubscriptionWhereInput>;
};

export type GqlSubscriptionMaxAggregate = {
  __typename?: 'SubscriptionMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  throttleId?: Maybe<FieldWrapper<Scalars['String']>>;
  feedId?: Maybe<FieldWrapper<Scalars['String']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
  bucketId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlSubscriptionMinAggregate = {
  __typename?: 'SubscriptionMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']>>;
  title?: Maybe<FieldWrapper<Scalars['String']>>;
  description?: Maybe<FieldWrapper<Scalars['String']>>;
  throttleId?: Maybe<FieldWrapper<Scalars['String']>>;
  feedId?: Maybe<FieldWrapper<Scalars['String']>>;
  ownerId?: Maybe<FieldWrapper<Scalars['String']>>;
  bucketId?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlSubscriptionOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  createdAt?: Maybe<GqlSortOrder>;
  updatedAt?: Maybe<GqlSortOrder>;
  title?: Maybe<GqlSortOrder>;
  description?: Maybe<GqlSortOrder>;
  tags?: Maybe<GqlSortOrder>;
  throttleId?: Maybe<GqlSortOrder>;
  feedId?: Maybe<GqlSortOrder>;
  ownerId?: Maybe<GqlSortOrder>;
  bucketId?: Maybe<GqlSortOrder>;
};

export enum GqlSubscriptionScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  Description = 'description',
  Tags = 'tags',
  ThrottleId = 'throttleId',
  FeedId = 'feedId',
  OwnerId = 'ownerId',
  BucketId = 'bucketId'
}

export type GqlSubscriptionScalarWhereInput = {
  AND?: Maybe<Array<GqlSubscriptionScalarWhereInput>>;
  OR?: Maybe<Array<GqlSubscriptionScalarWhereInput>>;
  NOT?: Maybe<Array<GqlSubscriptionScalarWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  title?: Maybe<GqlStringFilter>;
  description?: Maybe<GqlStringNullableFilter>;
  tags?: Maybe<GqlJsonNullableFilter>;
  throttleId?: Maybe<GqlStringNullableFilter>;
  feedId?: Maybe<GqlStringFilter>;
  ownerId?: Maybe<GqlStringFilter>;
  bucketId?: Maybe<GqlStringFilter>;
};

export type GqlSubscriptionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlSubscriptionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlSubscriptionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlSubscriptionScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  createdAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<GqlDateTimeWithAggregatesFilter>;
  title?: Maybe<GqlStringWithAggregatesFilter>;
  description?: Maybe<GqlStringNullableWithAggregatesFilter>;
  tags?: Maybe<GqlJsonNullableWithAggregatesFilter>;
  throttleId?: Maybe<GqlStringNullableWithAggregatesFilter>;
  feedId?: Maybe<GqlStringWithAggregatesFilter>;
  ownerId?: Maybe<GqlStringWithAggregatesFilter>;
  bucketId?: Maybe<GqlStringWithAggregatesFilter>;
};

export type GqlSubscriptionUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleUpdateOneWithoutSubscriptionsInput>;
  feed?: Maybe<GqlFeedUpdateOneRequiredWithoutSubscriptionsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutSubscriptionInput>;
  bucket?: Maybe<GqlBucketUpdateOneRequiredWithoutSubscriptionsInput>;
};

export type GqlSubscriptionUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
};

export type GqlSubscriptionUpdateManyWithWhereWithoutBucketInput = {
  where: GqlSubscriptionScalarWhereInput;
  data: GqlSubscriptionUpdateManyMutationInput;
};

export type GqlSubscriptionUpdateManyWithWhereWithoutFeedInput = {
  where: GqlSubscriptionScalarWhereInput;
  data: GqlSubscriptionUpdateManyMutationInput;
};

export type GqlSubscriptionUpdateManyWithWhereWithoutOwnerInput = {
  where: GqlSubscriptionScalarWhereInput;
  data: GqlSubscriptionUpdateManyMutationInput;
};

export type GqlSubscriptionUpdateManyWithWhereWithoutThrottleInput = {
  where: GqlSubscriptionScalarWhereInput;
  data: GqlSubscriptionUpdateManyMutationInput;
};

export type GqlSubscriptionUpdateManyWithoutBucketInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutBucketInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutBucketInput>>;
  upsert?: Maybe<Array<GqlSubscriptionUpsertWithWhereUniqueWithoutBucketInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyBucketInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  delete?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<GqlSubscriptionUpdateWithWhereUniqueWithoutBucketInput>>;
  updateMany?: Maybe<Array<GqlSubscriptionUpdateManyWithWhereWithoutBucketInput>>;
  deleteMany?: Maybe<Array<GqlSubscriptionScalarWhereInput>>;
};

export type GqlSubscriptionUpdateManyWithoutFeedInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutFeedInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutFeedInput>>;
  upsert?: Maybe<Array<GqlSubscriptionUpsertWithWhereUniqueWithoutFeedInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyFeedInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  delete?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<GqlSubscriptionUpdateWithWhereUniqueWithoutFeedInput>>;
  updateMany?: Maybe<Array<GqlSubscriptionUpdateManyWithWhereWithoutFeedInput>>;
  deleteMany?: Maybe<Array<GqlSubscriptionScalarWhereInput>>;
};

export type GqlSubscriptionUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<GqlSubscriptionUpsertWithWhereUniqueWithoutOwnerInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyOwnerInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  delete?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<GqlSubscriptionUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<GqlSubscriptionUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<GqlSubscriptionScalarWhereInput>>;
};

export type GqlSubscriptionUpdateManyWithoutThrottleInput = {
  create?: Maybe<Array<GqlSubscriptionCreateWithoutThrottleInput>>;
  connectOrCreate?: Maybe<Array<GqlSubscriptionCreateOrConnectWithoutThrottleInput>>;
  upsert?: Maybe<Array<GqlSubscriptionUpsertWithWhereUniqueWithoutThrottleInput>>;
  createMany?: Maybe<GqlSubscriptionCreateManyThrottleInputEnvelope>;
  connect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  delete?: Maybe<Array<GqlSubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<GqlSubscriptionUpdateWithWhereUniqueWithoutThrottleInput>>;
  updateMany?: Maybe<Array<GqlSubscriptionUpdateManyWithWhereWithoutThrottleInput>>;
  deleteMany?: Maybe<Array<GqlSubscriptionScalarWhereInput>>;
};

export type GqlSubscriptionUpdateWithWhereUniqueWithoutBucketInput = {
  where: GqlSubscriptionWhereUniqueInput;
  data: GqlSubscriptionUpdateWithoutBucketInput;
};

export type GqlSubscriptionUpdateWithWhereUniqueWithoutFeedInput = {
  where: GqlSubscriptionWhereUniqueInput;
  data: GqlSubscriptionUpdateWithoutFeedInput;
};

export type GqlSubscriptionUpdateWithWhereUniqueWithoutOwnerInput = {
  where: GqlSubscriptionWhereUniqueInput;
  data: GqlSubscriptionUpdateWithoutOwnerInput;
};

export type GqlSubscriptionUpdateWithWhereUniqueWithoutThrottleInput = {
  where: GqlSubscriptionWhereUniqueInput;
  data: GqlSubscriptionUpdateWithoutThrottleInput;
};

export type GqlSubscriptionUpdateWithoutBucketInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleUpdateOneWithoutSubscriptionsInput>;
  feed?: Maybe<GqlFeedUpdateOneRequiredWithoutSubscriptionsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutSubscriptionInput>;
};

export type GqlSubscriptionUpdateWithoutFeedInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleUpdateOneWithoutSubscriptionsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutSubscriptionInput>;
  bucket?: Maybe<GqlBucketUpdateOneRequiredWithoutSubscriptionsInput>;
};

export type GqlSubscriptionUpdateWithoutOwnerInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  throttle?: Maybe<GqlReleaseThrottleUpdateOneWithoutSubscriptionsInput>;
  feed?: Maybe<GqlFeedUpdateOneRequiredWithoutSubscriptionsInput>;
  bucket?: Maybe<GqlBucketUpdateOneRequiredWithoutSubscriptionsInput>;
};

export type GqlSubscriptionUpdateWithoutThrottleInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<GqlDateTimeFieldUpdateOperationsInput>;
  title?: Maybe<GqlStringFieldUpdateOperationsInput>;
  description?: Maybe<GqlNullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<Scalars['JSON']>;
  feed?: Maybe<GqlFeedUpdateOneRequiredWithoutSubscriptionsInput>;
  owner?: Maybe<GqlUserUpdateOneRequiredWithoutSubscriptionInput>;
  bucket?: Maybe<GqlBucketUpdateOneRequiredWithoutSubscriptionsInput>;
};

export type GqlSubscriptionUpsertWithWhereUniqueWithoutBucketInput = {
  where: GqlSubscriptionWhereUniqueInput;
  update: GqlSubscriptionUpdateWithoutBucketInput;
  create: GqlSubscriptionCreateWithoutBucketInput;
};

export type GqlSubscriptionUpsertWithWhereUniqueWithoutFeedInput = {
  where: GqlSubscriptionWhereUniqueInput;
  update: GqlSubscriptionUpdateWithoutFeedInput;
  create: GqlSubscriptionCreateWithoutFeedInput;
};

export type GqlSubscriptionUpsertWithWhereUniqueWithoutOwnerInput = {
  where: GqlSubscriptionWhereUniqueInput;
  update: GqlSubscriptionUpdateWithoutOwnerInput;
  create: GqlSubscriptionCreateWithoutOwnerInput;
};

export type GqlSubscriptionUpsertWithWhereUniqueWithoutThrottleInput = {
  where: GqlSubscriptionWhereUniqueInput;
  update: GqlSubscriptionUpdateWithoutThrottleInput;
  create: GqlSubscriptionCreateWithoutThrottleInput;
};

export type GqlSubscriptionWhereInput = {
  AND?: Maybe<Array<GqlSubscriptionWhereInput>>;
  OR?: Maybe<Array<GqlSubscriptionWhereInput>>;
  NOT?: Maybe<Array<GqlSubscriptionWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  createdAt?: Maybe<GqlDateTimeFilter>;
  updatedAt?: Maybe<GqlDateTimeFilter>;
  title?: Maybe<GqlStringFilter>;
  description?: Maybe<GqlStringNullableFilter>;
  tags?: Maybe<GqlJsonNullableFilter>;
  throttle?: Maybe<GqlReleaseThrottleRelationFilter>;
  throttleId?: Maybe<GqlStringNullableFilter>;
  feed?: Maybe<GqlFeedRelationFilter>;
  feedId?: Maybe<GqlStringFilter>;
  owner?: Maybe<GqlUserRelationFilter>;
  ownerId?: Maybe<GqlStringFilter>;
  bucket?: Maybe<GqlBucketRelationFilter>;
  bucketId?: Maybe<GqlStringFilter>;
};

export type GqlSubscriptionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GqlUser = {
  __typename?: 'User';
  id: FieldWrapper<Scalars['String']>;
  email: FieldWrapper<Scalars['String']>;
  name: FieldWrapper<Scalars['String']>;
  buckets: Array<FieldWrapper<GqlBucket>>;
  articleRefs: Array<FieldWrapper<GqlArticleRef>>;
  notebooks: Array<FieldWrapper<GqlNotebook>>;
  subscription: Array<FieldWrapper<GqlSubscription>>;
};


export type GqlUserBucketsArgs = {
  where?: Maybe<GqlBucketWhereInput>;
  orderBy?: Maybe<Array<GqlBucketOrderByInput>>;
  cursor?: Maybe<GqlBucketWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlBucketScalarFieldEnum>>;
};


export type GqlUserArticleRefsArgs = {
  where?: Maybe<GqlArticleRefWhereInput>;
  orderBy?: Maybe<Array<GqlArticleRefOrderByInput>>;
  cursor?: Maybe<GqlArticleRefWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlArticleRefScalarFieldEnum>>;
};


export type GqlUserNotebooksArgs = {
  where?: Maybe<GqlNotebookWhereInput>;
  orderBy?: Maybe<Array<GqlNotebookOrderByInput>>;
  cursor?: Maybe<GqlNotebookWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlNotebookScalarFieldEnum>>;
};


export type GqlUserSubscriptionArgs = {
  where?: Maybe<GqlSubscriptionWhereInput>;
  orderBy?: Maybe<Array<GqlSubscriptionOrderByInput>>;
  cursor?: Maybe<GqlSubscriptionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<GqlSubscriptionScalarFieldEnum>>;
};

export type GqlUserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id: FieldWrapper<Scalars['Int']>;
  email: FieldWrapper<Scalars['Int']>;
  name: FieldWrapper<Scalars['Int']>;
  _all: FieldWrapper<Scalars['Int']>;
};

export type GqlUserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutOwnerInput>;
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionCreateNestedManyWithoutOwnerInput>;
};

export type GqlUserCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
};

export type GqlUserCreateNestedOneWithoutArticleRefsInput = {
  create?: Maybe<GqlUserCreateWithoutArticleRefsInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutArticleRefsInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
};

export type GqlUserCreateNestedOneWithoutBucketsInput = {
  create?: Maybe<GqlUserCreateWithoutBucketsInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutBucketsInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
};

export type GqlUserCreateNestedOneWithoutNotebooksInput = {
  create?: Maybe<GqlUserCreateWithoutNotebooksInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutNotebooksInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
};

export type GqlUserCreateNestedOneWithoutSubscriptionInput = {
  create?: Maybe<GqlUserCreateWithoutSubscriptionInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutSubscriptionInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
};

export type GqlUserCreateOrConnectWithoutArticleRefsInput = {
  where: GqlUserWhereUniqueInput;
  create: GqlUserCreateWithoutArticleRefsInput;
};

export type GqlUserCreateOrConnectWithoutBucketsInput = {
  where: GqlUserWhereUniqueInput;
  create: GqlUserCreateWithoutBucketsInput;
};

export type GqlUserCreateOrConnectWithoutNotebooksInput = {
  where: GqlUserWhereUniqueInput;
  create: GqlUserCreateWithoutNotebooksInput;
};

export type GqlUserCreateOrConnectWithoutSubscriptionInput = {
  where: GqlUserWhereUniqueInput;
  create: GqlUserCreateWithoutSubscriptionInput;
};

export type GqlUserCreateWithoutArticleRefsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionCreateNestedManyWithoutOwnerInput>;
};

export type GqlUserCreateWithoutBucketsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionCreateNestedManyWithoutOwnerInput>;
};

export type GqlUserCreateWithoutNotebooksInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutOwnerInput>;
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionCreateNestedManyWithoutOwnerInput>;
};

export type GqlUserCreateWithoutSubscriptionInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  buckets?: Maybe<GqlBucketCreateNestedManyWithoutOwnerInput>;
  articleRefs?: Maybe<GqlArticleRefCreateNestedManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookCreateNestedManyWithoutOwnerInput>;
};

export type GqlUserGroupBy = {
  __typename?: 'UserGroupBy';
  id: FieldWrapper<Scalars['String']>;
  email: FieldWrapper<Scalars['String']>;
  name: FieldWrapper<Scalars['String']>;
  _count?: Maybe<FieldWrapper<GqlUserCountAggregate>>;
  _min?: Maybe<FieldWrapper<GqlUserMinAggregate>>;
  _max?: Maybe<FieldWrapper<GqlUserMaxAggregate>>;
};

export type GqlUserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  email?: Maybe<FieldWrapper<Scalars['String']>>;
  name?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlUserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<FieldWrapper<Scalars['String']>>;
  email?: Maybe<FieldWrapper<Scalars['String']>>;
  name?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type GqlUserOrderByInput = {
  id?: Maybe<GqlSortOrder>;
  email?: Maybe<GqlSortOrder>;
  name?: Maybe<GqlSortOrder>;
};

export type GqlUserRelationFilter = {
  is?: Maybe<GqlUserWhereInput>;
  isNot?: Maybe<GqlUserWhereInput>;
};

export enum GqlUserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Name = 'name'
}

export type GqlUserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GqlUserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GqlUserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GqlUserScalarWhereWithAggregatesInput>>;
  id?: Maybe<GqlStringWithAggregatesFilter>;
  email?: Maybe<GqlStringWithAggregatesFilter>;
  name?: Maybe<GqlStringWithAggregatesFilter>;
};

export type GqlUserUpdateInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  email?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutOwnerInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionUpdateManyWithoutOwnerInput>;
};

export type GqlUserUpdateManyMutationInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  email?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
};

export type GqlUserUpdateOneRequiredWithoutArticleRefsInput = {
  create?: Maybe<GqlUserCreateWithoutArticleRefsInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutArticleRefsInput>;
  upsert?: Maybe<GqlUserUpsertWithoutArticleRefsInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
  update?: Maybe<GqlUserUpdateWithoutArticleRefsInput>;
};

export type GqlUserUpdateOneRequiredWithoutBucketsInput = {
  create?: Maybe<GqlUserCreateWithoutBucketsInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutBucketsInput>;
  upsert?: Maybe<GqlUserUpsertWithoutBucketsInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
  update?: Maybe<GqlUserUpdateWithoutBucketsInput>;
};

export type GqlUserUpdateOneRequiredWithoutNotebooksInput = {
  create?: Maybe<GqlUserCreateWithoutNotebooksInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutNotebooksInput>;
  upsert?: Maybe<GqlUserUpsertWithoutNotebooksInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
  update?: Maybe<GqlUserUpdateWithoutNotebooksInput>;
};

export type GqlUserUpdateOneRequiredWithoutSubscriptionInput = {
  create?: Maybe<GqlUserCreateWithoutSubscriptionInput>;
  connectOrCreate?: Maybe<GqlUserCreateOrConnectWithoutSubscriptionInput>;
  upsert?: Maybe<GqlUserUpsertWithoutSubscriptionInput>;
  connect?: Maybe<GqlUserWhereUniqueInput>;
  update?: Maybe<GqlUserUpdateWithoutSubscriptionInput>;
};

export type GqlUserUpdateWithoutArticleRefsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  email?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionUpdateManyWithoutOwnerInput>;
};

export type GqlUserUpdateWithoutBucketsInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  email?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionUpdateManyWithoutOwnerInput>;
};

export type GqlUserUpdateWithoutNotebooksInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  email?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutOwnerInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutOwnerInput>;
  subscription?: Maybe<GqlSubscriptionUpdateManyWithoutOwnerInput>;
};

export type GqlUserUpdateWithoutSubscriptionInput = {
  id?: Maybe<GqlStringFieldUpdateOperationsInput>;
  email?: Maybe<GqlStringFieldUpdateOperationsInput>;
  name?: Maybe<GqlStringFieldUpdateOperationsInput>;
  buckets?: Maybe<GqlBucketUpdateManyWithoutOwnerInput>;
  articleRefs?: Maybe<GqlArticleRefUpdateManyWithoutOwnerInput>;
  notebooks?: Maybe<GqlNotebookUpdateManyWithoutOwnerInput>;
};

export type GqlUserUpsertWithoutArticleRefsInput = {
  update: GqlUserUpdateWithoutArticleRefsInput;
  create: GqlUserCreateWithoutArticleRefsInput;
};

export type GqlUserUpsertWithoutBucketsInput = {
  update: GqlUserUpdateWithoutBucketsInput;
  create: GqlUserCreateWithoutBucketsInput;
};

export type GqlUserUpsertWithoutNotebooksInput = {
  update: GqlUserUpdateWithoutNotebooksInput;
  create: GqlUserCreateWithoutNotebooksInput;
};

export type GqlUserUpsertWithoutSubscriptionInput = {
  update: GqlUserUpdateWithoutSubscriptionInput;
  create: GqlUserCreateWithoutSubscriptionInput;
};

export type GqlUserWhereInput = {
  AND?: Maybe<Array<GqlUserWhereInput>>;
  OR?: Maybe<Array<GqlUserWhereInput>>;
  NOT?: Maybe<Array<GqlUserWhereInput>>;
  id?: Maybe<GqlStringFilter>;
  email?: Maybe<GqlStringFilter>;
  name?: Maybe<GqlStringFilter>;
  buckets?: Maybe<GqlBucketListRelationFilter>;
  articleRefs?: Maybe<GqlArticleRefListRelationFilter>;
  notebooks?: Maybe<GqlNotebookListRelationFilter>;
  subscription?: Maybe<GqlSubscriptionListRelationFilter>;
};

export type GqlUserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};
