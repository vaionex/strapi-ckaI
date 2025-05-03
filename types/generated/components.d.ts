import type { Schema, Struct } from '@strapi/strapi';

export interface ArticlesArticles extends Struct.ComponentSchema {
  collectionName: 'components_articles_articles';
  info: {
    description: '';
    displayName: 'articles';
    icon: 'apps';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platform: Schema.Attribute.String;
    seodescription: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    timestamp: Schema.Attribute.Date & Schema.Attribute.DefaultTo<'2025-05-02'>;
    title: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

export interface ContractsContracts extends Struct.ComponentSchema {
  collectionName: 'components_contracts_contracts';
  info: {
    description: '';
    displayName: 'contracts';
    icon: 'archive';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    seocontent: Schema.Attribute.String;
    timestamp: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'articles.articles': ArticlesArticles;
      'contracts.contracts': ContractsContracts;
    }
  }
}
