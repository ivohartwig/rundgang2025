TITLE: Retrieving a Collection
DESCRIPTION: `getCollection()` retrieves a list of content collection entries by collection name. It returns all items in the collection by default and accepts an optional `filter` function to narrow down entries based on properties like `id` or frontmatter values via the `data` object.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { getCollection } from 'astro:content';

// 获取 `src/content/blog/` 中的所有条目
const allBlogPosts = await getCollection('blog');

// 仅返回 frontmatter 中 `draft: true` 的条目
const draftBlogPosts = await getCollection('blog', ({ data }) => {
  return data.draft === true;
});
---
```

----------------------------------------

TITLE: Querying Content Collections with `getCollection()` (Astro)
DESCRIPTION: `getCollection()` is an Astro function used to retrieve a list of content collection entries by their collection name. This example shows fetching all entries from the 'blog' collection and also demonstrates how to apply an optional `filter` function to narrow results, such as retrieving only draft blog posts based on their frontmatter `data.draft` property.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
import { getCollection } from 'astro:content';

// Get all `src/content/blog/` entries
const allBlogPosts = await getCollection('blog');

// Only return posts with `draft: true` in the frontmatter
const draftBlogPosts = await getCollection('blog', ({ data }) => {
  return data.draft === true;
});
```

----------------------------------------

TITLE: Querying Astro Content Collections (JavaScript)
DESCRIPTION: This JavaScript snippet demonstrates how to use Astro's `getCollection()` and `getEntry()` helper functions to retrieve content entries. `getCollection()` fetches all entries from a specified collection, while `getEntry()` retrieves a single entry by collection name and ID.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_14

LANGUAGE: JavaScript
CODE:
```
import { getCollection, getEntry } from 'astro:content';

// Get all entries from a collection.
// Requires the name of the collection as an argument.
const allBlogPosts = await getCollection('blog');

// Get a single entry from a collection.
// Requires the name of the collection and `id`
const poodleData = await getEntry('dogs', 'poodle');
```

----------------------------------------

TITLE: Defining a Content Collection with Schema and Loader (TypeScript)
DESCRIPTION: `defineCollection()` is used in `src/content.config.ts` to configure a content collection. This example defines a 'blog' collection, specifying a `glob` loader to find Markdown files and a Zod schema for `title` and an optional `permalink` in the frontmatter. The defined collection is then exposed to Astro via `export const collections`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string().optional()
  })
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog };
```

----------------------------------------

TITLE: Example TOML Data Structure for Astro Collection
DESCRIPTION: This TOML snippet illustrates the expected data structure for a collection defined using the `file()` loader with a custom TOML parser. Each `[[dogs]]` block represents an individual entry within the collection, requiring a unique `id` property.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_3

LANGUAGE: TOML
CODE:
```
[[dogs]]
id = "..."
age = "..."

[[dogs]]
id = "..."
age = "..."
```

----------------------------------------

TITLE: Example Blog Post Frontmatter with Collection References (YAML)
DESCRIPTION: This YAML frontmatter example for a Markdown blog post shows how to use the defined collection references. It specifies an `author` by ID and an array of `relatedPosts` by their IDs, linking to entries in other collections or the same collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_11

LANGUAGE: YAML
CODE:
```
---
title: "Welcome to my blog"
author: ben-holmes # references `src/data/authors/ben-holmes.json` 
relatedPosts:
- about-me # references `src/data/blog/about-me.md`
- my-year-in-review # references `src/data/blog/my-year-in-review.md`
---
```

----------------------------------------

TITLE: Retrieving Multiple Entries
DESCRIPTION: `getEntries()` retrieves multiple collection entries from the same collection. This is useful for accessing the associated `data` and `body` properties of an array of referenced entries.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_6

LANGUAGE: astro
CODE:
```
---
import { getEntries, getEntry } from 'astro:content';

const enterprisePost = await getEntry('blog', 'enterprise');

// 获取由 `data.relatedPosts` 引用的相关帖子
const enterpriseRelatedPosts = await getEntries(enterprisePost.data.relatedPosts);
---
```

----------------------------------------

TITLE: Using CollectionKey for Generic Collection Queries in TypeScript
DESCRIPTION: This example illustrates how to use the `CollectionKey` type, a string union of all defined collection names, to create a generic function for querying collections. The `queryCollection` function filters entries based on a `draft` property, demonstrating type-safe access to collection data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_10

LANGUAGE: typescript
CODE:
```
import { type CollectionKey, getCollection } from 'astro:content';

async function queryCollection(collection: CollectionKey) {
  return getCollection(collection, ({ data }) => {
    return data.draft !== true;
  });
}
```

----------------------------------------

TITLE: Defining a Content Collection
DESCRIPTION: `defineCollection()` is a utility function used to configure a collection in `src/content/config.*` files. It accepts a `loader` to load data and a `schema` to define the structure and types of the document frontmatter using Zod.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string().optional(),
  }),
});

// 将定义的集合公开给 Astro
// 通过 `collections` 导出
export const collections = { blog };
```

----------------------------------------

TITLE: Querying Astro Content Collections with getCollection and getEntry
DESCRIPTION: This JavaScript snippet demonstrates how to use `getCollection()` to fetch all entries from a specified collection and `getEntry()` to retrieve a single entry by its collection name and `id`. These functions are essential for accessing content entries in Astro.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_4

LANGUAGE: JavaScript
CODE:
```
import { getCollection, getEntry } from 'astro:content';

// 获取集合中的所有条目。
// 需要集合的名称作为参数。
const allBlogPosts = await getCollection('blog');

// 从集合中获取单个条目。
// 需要集合的名称和 `id`
const poodleData = await getEntry('dogs', 'poodle');
```

----------------------------------------

TITLE: Defining Content Collections in src/content.config.ts
DESCRIPTION: This TypeScript snippet demonstrates the basic structure of `src/content.config.ts`, the central file for configuring content collections in Astro. It shows how to import necessary utilities like `defineCollection` and `z`, import loaders, define individual collections, and then export them within a `collections` object for Astro to register.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_1

LANGUAGE: typescript
CODE:
```
// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({ /* ... */ });
const dogs = defineCollection({ /* ... */ });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, dogs };
```

----------------------------------------

TITLE: Using `CollectionKey` to Query Collections in TypeScript
DESCRIPTION: This snippet shows how to use the `CollectionKey` type to define a generic function that queries a collection. It imports `CollectionKey` and `getCollection` from `astro:content` and uses them to create a function that filters collection entries based on their data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_8

LANGUAGE: typescript
CODE:
```
import { type CollectionKey, getCollection } from 'astro:content';

async function queryCollection(collection: CollectionKey) {
  return getCollection(collection, ({ data }) => {
    return data.draft !== true;
  });
}

```

----------------------------------------

TITLE: Example Nested JSON Document for Multiple Collections
DESCRIPTION: This JSON snippet provides an example of a single file containing data for multiple collections (`dogs` and `cats`) within a nested structure. This format requires custom parsing to separate the collections when using the `file()` loader.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_5

LANGUAGE: JSON
CODE:
```
{"dogs": [{}], "cats": [{}]}
```

----------------------------------------

TITLE: Referencing Collection Entries in Markdown Frontmatter
DESCRIPTION: This YAML frontmatter example for an Astro Markdown file demonstrates how to reference entries from other collections (e.g., `author: ben-holmes` referencing an `authors` collection entry) and self-reference within the same collection (e.g., `relatedPosts` referencing other `blog` entries) using their `id` or `slug`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_1

LANGUAGE: YAML
CODE:
```
---
title: "Welcome to my blog"
author: ben-holmes # references `src/data/authors/ben-holmes.json` 
relatedPosts:
- about-me # references `src/data/blog/about-me.md`
- my-year-in-review # references `src/data/blog/my-year-in-review.md`
---
```

----------------------------------------

TITLE: Importing Core Content Collection APIs (JavaScript)
DESCRIPTION: This snippet demonstrates how to import essential functions and utilities from the `astro:content` module. These imports are fundamental for defining, querying, and rendering content collections within Astro projects, providing access to schema validation, collection definition, and entry retrieval.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  z,
  defineCollection,
  getCollection,
  getEntry,
  getEntries,
  reference,
  render
 } from 'astro:content';
```

----------------------------------------

TITLE: Importing from astro:content
DESCRIPTION: Imports necessary functions and modules from the `astro:content` module. These include `z` for schema validation, `defineCollection` for defining content collections, `getCollection`, `getEntry`, and `getEntries` for querying content, `reference` for creating references between collections, and `render` for rendering content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  z,
  defineCollection,
  getCollection,
  getEntry,
  getEntries,
  reference,
  render,
 } from 'astro:content';
```

----------------------------------------

TITLE: Defining Collection Schemas with References in Astro (TypeScript)
DESCRIPTION: This snippet defines two content collections, `blog` and `authors`, using Astro's `defineCollection` and Zod for schema validation. It demonstrates how to create relationships between collections using `reference()`, allowing `blog` entries to link to `authors` and other `blog` posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_10

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    // Reference a single author from the `authors` collection by `id`
    author: reference('authors'),
    // Reference an array of related posts from the `blog` collection by `slug`
    relatedPosts: z.array(reference('blog')),
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  })
});

export const collections = { blog, authors };
```

----------------------------------------

TITLE: Filtering Astro Collections by Data Property
DESCRIPTION: This JavaScript snippet demonstrates how to filter content collection queries using `getCollection()`. It applies a callback function to filter out entries where the `data.draft` property is `true`, ensuring only published blog entries are returned.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_8

LANGUAGE: JavaScript
CODE:
```
// 示例：使用 `draft: true` 过滤掉内容条目
import { getCollection } from 'astro:content';
const publishedBlogEntries = await getCollection('blog', ({ data }) => {
  return data.draft !== true;
});
```

----------------------------------------

TITLE: Defining Collection References with `reference()` (TypeScript)
DESCRIPTION: This example illustrates using `reference()` within a Zod schema to establish relationships between content collections. It shows how a 'blog' collection can reference a single 'author' from the `authors` collection and an array of 'relatedPosts' from the 'blog' collection itself, enabling robust cross-collection data linking and validation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    // Reference a single author from the `authors` collection by `id`
    author: reference('authors'),
    // Reference an array of related posts from the `blog` collection by `slug`
    relatedPosts: z.array(reference('blog'))
  })
});

const authors = defineCollection({
  loader: file("src/data/authors.json"),
  schema: z.object({ /* ... */ })
});

export const collections = { blog, authors };
```

----------------------------------------

TITLE: Defining a Collection Reference
DESCRIPTION: The `reference()` function in content configuration defines an association or "reference" between collections. It takes a collection name and transforms it into an object containing the collection name and referenced ID. This example defines references from blog authors to the `authors` collection, and to an array of related articles from the same `blog` collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    // 通过 `id` 从 `authors` 集合中，引用单个作者
    author: reference('authors'),
    // 通过 `slug` 从 `blog` 集合中，引用相关帖子数组
    relatedPosts: z.array(reference('blog')),
  })
});

const authors = defineCollection({
  loader: file("src/data/authors.json"),
  schema: z.object({ /* ... */ })
});

export const collections = { blog, authors };
```

----------------------------------------

TITLE: Defining a Content Collection with `defineCollection()` in TypeScript
DESCRIPTION: This snippet demonstrates how to use `defineCollection()` in `src/content/config.ts` to configure a content collection. It defines a 'blog' collection with a 'content' type and a Zod schema for 'title' and optional 'permalink' frontmatter fields, then exposes it via `export const collections`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/reference/api-reference.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
// src/content/config.ts
import { z, defineCollection } from 'astro:content';
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    permalink: z.string().optional(),
  }),
});
// Expone tu colección definida a Astro
// con el export `collections`
export const collections = { blog };
```

----------------------------------------

TITLE: Defining Astro Collections with Glob and File Loaders (TypeScript)
DESCRIPTION: This snippet demonstrates how to define content collections in Astro using the `glob()` and `file()` loaders. It shows examples for Markdown files with `glob` (including pattern matching and exclusion) and JSON files with `file`, along with basic schema definitions.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: /* ... */
});
const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
  schema: /* ... */
});

const probes = defineCollection({
  // `loader` can accept an array of multiple patterns as well as string patterns
  // Load all markdown files in the space-probes directory, except for those that start with "voyager-"
  loader: glob({ pattern: ['*.md', '!voyager-*'], base: 'src/data/space-probes' }),
  schema: z.object({
    name: z.string(),
    type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
    launch_date: z.date(),
    status: z.enum(['Active', 'Inactive', 'Decommissioned']),
    destination: z.string(),
    operator: z.string(),
    notable_discoveries: z.array(z.string()),
  }),
});

export const collections = { blog, dogs, probes };
```

----------------------------------------

TITLE: Extracting Collections from Nested JSON with File Loader (TypeScript)
DESCRIPTION: This TypeScript snippet illustrates how to define multiple content collections from a single nested JSON file using the `file()` loader and a custom `parser` function. It demonstrates parsing the JSON text and accessing specific keys (`.dogs`, `.cats`) to create separate collections.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_6

LANGUAGE: TypeScript
CODE:
```
const dogs = defineCollection({
  loader: file("src/data/pets.json", { parser: (text) => JSON.parse(text).dogs })
});
const cats = defineCollection({
  loader: file("src/data/pets.json", { parser: (text) => JSON.parse(text).cats })
});
```

----------------------------------------

TITLE: Retrieving Multiple Content Entries with getEntries() in Astro
DESCRIPTION: `getEntries()` retrieves multiple collection entries from the same collection. This function is particularly useful for handling arrays of referenced entries, enabling access to their associated `data` and `body` properties, as demonstrated with related posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_6

LANGUAGE: astro
CODE:
```
---
import { getEntries, getEntry } from 'astro:content';

const enterprisePost = await getEntry('blog', 'enterprise');

// Get related posts referenced by `data.relatedPosts`
const enterpriseRelatedPosts = await getEntries(enterprisePost.data.relatedPosts);
---
```

----------------------------------------

TITLE: Displaying Collection Data in Astro Templates
DESCRIPTION: This Astro component example shows how to query a content collection using `getCollection()` within the component's frontmatter. It then iterates over the fetched `posts` to create a list of links, accessing each post's `id` and `data.title` properties to display content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
<h1>My posts</h1>
<ul>
  {posts.map(post => (
    <li><a href={`/blog/${post.id}`}>{post.data.title}</a></li>
  ))}
</ul>
```

----------------------------------------

TITLE: Defining Collection References with `reference()` in TypeScript
DESCRIPTION: This example illustrates the use of `reference()` within a collection schema to establish relationships between different content collections. It shows how to reference a single author from an 'authors' collection and an array of related posts from the 'blog' collection itself, validating the specified entry identifiers.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/reference/api-reference.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, reference, z } from 'astro:content';
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // Hace referencia a un único autor de la colección `authors` mediante el campo `id`.
    author: reference('authors'),
    // Hace referencia a un arreglo de publicaciones relacionadas de la colección `blog` mediante el campo `slug`.
    relatedPosts: z.array(reference('blog')),
  })
});
const authors = defineCollection({
  type: 'data',
  schema: z.object({ /* ... */ })
});
export const collections = { blog, authors };
```

----------------------------------------

TITLE: Conditional Filtering of Astro Collections for Production (JavaScript)
DESCRIPTION: This example demonstrates how to conditionally filter content collection entries based on the build environment. It uses `import.meta.env.PROD` to ensure that entries marked as drafts are excluded only when building for production, while remaining visible during development.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_19

LANGUAGE: JavaScript
CODE:
```
// Example: Filter out content entries with `draft: true` only when building for production
import { getCollection } from 'astro:content';
const blogEntries = await getCollection('blog', ({ data }) => {
  return import.meta.env.PROD ? data.draft !== true : true;
});
```

----------------------------------------

TITLE: Retrieving Content Collection Entries with `getCollection()` in Astro
DESCRIPTION: This snippet demonstrates how to use `getCollection()` within an Astro component to retrieve content entries. It shows fetching all entries from the 'blog' collection and also filtering entries to only include those with `draft: true` in their frontmatter, allowing for selective content retrieval.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/reference/api-reference.mdx#_snippet_2

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from 'astro:content';
// Obtiene todas las entradas de `src/content/blog/`
const allBlogPosts = await getCollection('blog');
// Solo regresa artīculos con `draft: true` en el frontmatter
const draftBlogPosts = await getCollection('blog', ({ data }) => {
  return data.draft === true;
});
---
```

----------------------------------------

TITLE: Defining a Content Collection Schema in Astro
DESCRIPTION: This code defines a content collection schema for blog posts using Astro's content collections API. It imports necessary modules, defines a schema with properties like title, pubDate, description, author, image, and tags, and exports the collection for use in the Astro project. This schema is used to validate the frontmatter of blog posts within the 'blog' collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
// Importa el cargador glob
import { glob } from "astro/loaders";
// Importa utilidades de `astro:content`
import { z, defineCollection } from "astro:content";
// Define un `loader` y un `schema` para cada colección
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});
// Exporta un solo objeto `collections` para registrar tus colecciones
export const collections = { blog };
```

----------------------------------------

TITLE: Generating Static Paths with getStaticPaths in Astro
DESCRIPTION: This snippet demonstrates how to use getStaticPaths() in Astro to generate static pages from a content collection. It fetches all entries from the 'blog' collection, creates a unique path for each using its 'id', and passes the entire collection entry as a prop to the page template for rendering. This is suitable for static site generation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_22

LANGUAGE: astro
CODE:
```
---
import { getCollection, render } from 'astro:content';
// 1. Generate a new path for every collection entry
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { id: post.id },
    props: { post },
  }));
}
// 2. For your template, you can get the entry directly from the prop
const { post } = Astro.props;
const { Content } = await render(post);
---
<h1>{post.data.title}</h1>
<Content />
```

----------------------------------------

TITLE: Filtering Astro Collections by Nested Directory ID (JavaScript)
DESCRIPTION: This snippet illustrates how to filter content collection entries by their `id` property to retrieve items from a specific nested directory. Since the `id` includes the full path, `id.startsWith()` can be used to target entries within a particular subdirectory, such as 'en/' for English documentation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_20

LANGUAGE: JavaScript
CODE:
```
// Example: Filter entries by sub-directory in the collection
import { getCollection } from 'astro:content';
const englishDocsEntries = await getCollection('docs', ({ id }) => {
  return id.startsWith('en/');
});
```

----------------------------------------

TITLE: Filtering Astro Collections by Data Property (JavaScript)
DESCRIPTION: This snippet shows how to use the optional 'filter' callback with `getCollection()` to filter content entries based on their `data` properties. Specifically, it demonstrates how to exclude entries where the `draft` property is set to `true`, ensuring only published content is retrieved.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_18

LANGUAGE: JavaScript
CODE:
```
// Example: Filter out content entries with `draft: true`
import { getCollection } from 'astro:content';
const publishedBlogEntries = await getCollection('blog', ({ data }) => {
  return data.draft !== true;
});
```

----------------------------------------

TITLE: Retrieving a Single Entry
DESCRIPTION: `getEntry()` retrieves a single collection entry by collection name and entry `id`. It can also be used to get referenced entries to access their `data` or `body` properties.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
import { getEntry } from 'astro:content';

// 得到 `src/content/blog/enterprise.md`
const enterprisePost = await getEntry('blog', 'enterprise');

// 得到 `src/content/captains/picard.json`
const picardProfile = await getEntry('captains', 'picard');

// 得到 the profile referenced by `data.captain`
const enterpriseCaptainProfile = await getEntry(enterprisePost.data.captain);
---
```

----------------------------------------

TITLE: Defining Reusable Image Schema and Collection in Astro
DESCRIPTION: This snippet demonstrates how to define a reusable image schema using `SchemaContext` and integrate it into an Astro content collection. It shows the `imageSchema` function, which accepts the `image` helper from `SchemaContext` to validate image fields, and then uses this schema within a `defineCollection` call for a 'blog' collection, ensuring consistent image handling.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_11

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, z, type SchemaContext } from "astro:content";

export const imageSchema = ({ image }: SchemaContext) =>
    z.object({
        image: image(),
        description: z.string().optional(),
    });

const blog = defineCollection({
  loader: /* ... */,
  schema: ({ image }) => z.object({
    title: z.string(),
    permalink: z.string().optional(),
    image: imageSchema({ image })
  }),
});
```

----------------------------------------

TITLE: Defining Collection Schemas with References in Astro
DESCRIPTION: This TypeScript snippet defines `blog` and `authors` content collections using `astro:content`. It demonstrates how to use `reference()` for cross-collection relationships (e.g., `blog` referencing `authors`) and self-referencing (e.g., `blog` referencing `blog` for related posts). It also shows how to load content using `glob()`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    // 通过 `id` 从 `authors` 集合引用单个作者
    author: reference('authors'),
    // 通过 `slug` 从 `blog` 集合引用相关文章数组
    relatedPosts: z.array(reference('blog')),
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  })
});

export const collections = { blog, authors };
```

----------------------------------------

TITLE: Defining Collection Schemas with Zod and Loaders in Astro
DESCRIPTION: This example illustrates how to define content collection schemas using Zod for data validation and automatic TypeScript typing. It shows two collections: 'blog' using a `glob` loader for Markdown files with schema fields like title and dates, and 'dogs' using a `file` loader for JSON data with fields like id, breed, and temperament. Schemas guarantee predictable data forms and provide helpful errors if violated.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_8

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
});
const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
  schema: z.object({
    id: z.string(),
    breed: z.string(),
    temperament: z.array(z.string()),
  }),
});

export const collections = { blog, dogs };
```

----------------------------------------

TITLE: Migrating Legacy Collections to New Content Layer API
DESCRIPTION: This TypeScript snippet shows how to define an empty collection in `src/content/config.ts` to implicitly migrate legacy content collections to Astro's new Content Layer API. This step is necessary when removing the `legacy.collections` flag and adopting the modern collection handling.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/legacy-flags.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({ })
 
export const collections = { blog };
```

----------------------------------------

TITLE: Typing Astro Component Props with CollectionEntry
DESCRIPTION: This example illustrates how to pass an entire content collection entry as a prop to an Astro component. It utilizes the `CollectionEntry` utility from `astro:content` to provide strong TypeScript typing for the component's props, ensuring type safety based on the defined collection schema.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_17

LANGUAGE: Astro
CODE:
```
---
import type { CollectionEntry } from 'astro:content';
interface Props {
  post: CollectionEntry<'blog'>;
}

// `post` will match your 'blog' collection schema type
const { post } = Astro.props;
---
```

----------------------------------------

TITLE: Rendering Content Collection Images in Astro Pages
DESCRIPTION: This Astro page snippet demonstrates how to fetch data from a content collection and render associated images. It uses the <Image /> component from `astro:assets` to display the `cover` image and `coverAlt` text defined in the collection's schema.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/images.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
import { Image } from "astro:assets";
import { getCollection } from "astro:content";
const allBlogPosts = await getCollection("blog");
---

{
	allBlogPosts.map((post) => (
		<div>
			<Image src={post.data.cover} alt={post.data.coverAlt} />
			<h2>
				<a href={"/blog/" + post.slug}>{post.data.title}</a>
			</h2>
		</div>
	))
}
```

----------------------------------------

TITLE: Conditional Filtering of Astro Collections for Production Builds
DESCRIPTION: This JavaScript snippet shows how to conditionally filter content collection entries based on the build environment. It uses `import.meta.env.PROD` to exclude draft entries only when building for production, allowing drafts to be visible during development.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_9

LANGUAGE: JavaScript
CODE:
```
// 示例：仅在为生产构建时过滤掉带有 `draft: true` 的内容条目
import { getCollection } from 'astro:content';
const blogEntries = await getCollection('blog', ({ data }) => {
  return import.meta.env.PROD ? data.draft !== true : true;
});
```

----------------------------------------

TITLE: Filtering Astro Collections by Nested Directory ID
DESCRIPTION: This JavaScript snippet demonstrates how to filter content collection entries based on their `id` property. It uses `id.startsWith()` to retrieve only entries located within a specific nested directory, such as 'en/' for English documentation entries.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_10

LANGUAGE: JavaScript
CODE:
```
// 示例：按集合中的子目录过滤条目
import { getCollection } from 'astro:content';
const englishDocsEntries = await getCollection('docs', ({ id }) => {
  return id.startsWith('en/');
});
```

----------------------------------------

TITLE: Migrating Legacy Collections to Content Layer API (TypeScript)
DESCRIPTION: This TypeScript snippet shows how to prepare for migrating legacy content collections to Astro's new Content Layer API. By defining an empty collection (e.g., `blog`) in `src/content/config.ts` using `defineCollection` from `astro:content`, Astro will implicitly generate the necessary definitions for existing legacy collections, allowing the `legacy.collections` flag to be removed.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/legacy-flags.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({ })

export const collections = { blog };
```

----------------------------------------

TITLE: Enabling Legacy Content Collections in Astro
DESCRIPTION: This snippet demonstrates how to enable legacy content collection behavior in Astro's configuration file. Setting `legacy.collections` to `true` allows projects to continue using the older content collection implementation from Astro v2-v4, facilitating migration to newer versions.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/legacy-flags.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
// astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({
  legacy: {
    collections: true
  }
});
```

----------------------------------------

TITLE: Resolving Referenced Data in Astro Content Collections
DESCRIPTION: This example demonstrates how to resolve single and array references defined within a content collection schema. After querying a main blog post, `getEntry()` is used to fetch a singular referenced item (e.g., an author), and `getEntries()` is used to retrieve multiple referenced entries (e.g., related posts).
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_21

LANGUAGE: Astro
CODE:
```
---
import { getEntry, getEntries } from 'astro:content';

const blogPost = await getEntry('blog', 'welcome');

// Resolve a singular reference (e.g. `{collection: "authors", id: "ben-holmes"}`)
const author = await getEntry(blogPost.data.author);
// Resolve an array of references
// (e.g. `[{collection: "blog", id: "about-me"}, {collection: "blog", id: "my-year-in-review"}]`)
const relatedPosts = await getEntries(blogPost.data.relatedPosts);
---

<h1>{blogPost.data.title}</h1>
<p>Author: {author.data.name}</p>

<!-- ... -->

<h2>You might also like:</h2>
{relatedPosts.map(post => (
  <a href={post.id}>{post.data.title}</a>
))}
```

----------------------------------------

TITLE: Retrieving Single Content Entry with getEntry() in Astro
DESCRIPTION: `getEntry()` retrieves a single content collection entry by its collection name and unique ID. It supports two overload signatures and can also be used to fetch referenced entries, allowing access to their `data` or `body` properties.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
import { getEntry } from 'astro:content';

// Get `src/content/blog/enterprise.md`
const enterprisePost = await getEntry('blog', 'enterprise');

// Get `src/content/captains/picard.json`
const picardProfile = await getEntry('captains', 'picard');

// Get the profile referenced by `data.captain`
const enterpriseCaptainProfile = await getEntry(enterprisePost.data.captain);
---
```

----------------------------------------

TITLE: Defining a Schema with `SchemaContext` in TypeScript
DESCRIPTION: This snippet demonstrates how to use the `SchemaContext` type to define a reusable schema for multiple collections. It imports `defineCollection`, `z`, and `SchemaContext` from `astro:content` and uses them to create a schema that includes an image and a description.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_9

LANGUAGE: typescript
CODE:
```
import { defineCollection, z, type SchemaContext } from "astro:content";

export const imageSchema = ({ image }: SchemaContext) =>
    z.object({
        image: image(),
        description: z.string().optional(),
    });

const blog = defineCollection({
  loader: /* ... */
  schema: ({ image }) => z.object({
    title: z.string(),
    permalink: z.string().optional(),
    image: imageSchema({ image })
  }),
});

```

----------------------------------------

TITLE: Importing CollectionEntry Type in TypeScript
DESCRIPTION: This snippet shows how to import the `CollectionEntry` type from `astro:content`. This type is used by query functions like `getCollection()`, `getEntry()`, and `getEntries()` to define the structure of returned collection entries, providing strong typing for content data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_9

LANGUAGE: typescript
CODE:
```
import type { CollectionEntry } from 'astro:content';
```

----------------------------------------

TITLE: Enabling Legacy Collections in Astro Configuration (JavaScript)
DESCRIPTION: This snippet demonstrates how to enable the legacy content collections behavior in Astro's configuration file (`astro.config.mjs`). Setting `legacy.collections` to `true` allows projects to continue using the older collection implementation from Astro v2-v4, facilitating migration to newer Astro versions without immediate code changes. This flag is of type `boolean` and defaults to `false`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/legacy-flags.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
// astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({
  legacy: {
    collections: true
  }
});
```

----------------------------------------

TITLE: Configuring MDX for Content Collections in Astro
DESCRIPTION: This example shows how to update your `src/content.config.ts` file to include `.mdx` files in a content collection by modifying the `glob` pattern in the collection's loader, ensuring MDX content is properly managed.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/integrations-guide/mdx.mdx#_snippet_7

LANGUAGE: ts
CODE:
```
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date()
  })
});

export const collections = { blog };
```

----------------------------------------

TITLE: TypeScript Configuration for Content Collections in tsconfig.json
DESCRIPTION: This JSON snippet illustrates the required TypeScript compiler options in `tsconfig.json` for content collections. It ensures Zod validation, Intellisense, and type checking are enabled, specifically highlighting `strictNullChecks` and `allowJs` as essential settings if not extending Astro's strict TypeScript configurations.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "strictNullChecks": true,
    "allowJs": true
  }
}
```

----------------------------------------

TITLE: Enforcing RSS Schema for Astro Content Collections
DESCRIPTION: This TypeScript snippet demonstrates how to enforce the `rssSchema` on an Astro content collection. By importing `rssSchema` from `@astrojs/rss` and applying it to a collection's schema, it ensures that all entries within that collection conform to the required properties for generating valid RSS feed items, improving data consistency.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/recipes/rss.mdx#_snippet_3

LANGUAGE: ts
CODE:
```
import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  schema: rssSchema,
});

export const collections = { blog };
```

----------------------------------------

TITLE: Importing Astro Content Module Types in TypeScript
DESCRIPTION: This snippet demonstrates how to import various type definitions from the `astro:content` module in TypeScript. These types, such as `CollectionEntry`, `CollectionKey`, and `SchemaContext`, are crucial for ensuring type safety when working with Astro's Content Collections.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_8

LANGUAGE: typescript
CODE:
```
import type {
  CollectionEntry,
  CollectionKey,
  ContentCollectionKey,
  DataCollectionKey,
  SchemaContext,
 } from 'astro:content';
```

----------------------------------------

TITLE: Content Collection Image Definition
DESCRIPTION: Defines a content collection schema using Astro's `defineCollection` and `z` (Zod) for data validation.  It specifies the schema for a blog collection, including a title, a cover image (validated using the `image()` helper), and coverAlt text.  The `image()` helper validates and imports the image.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/images.mdx#_snippet_14

LANGUAGE: ts
CODE:
```
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		cover: image(),
		coverAlt: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};
```

----------------------------------------

TITLE: Fetching Tagged Posts with getCollection() in Astro
DESCRIPTION: This snippet updates `src/pages/tags/[tag].astro` to use `getCollection("blog")` for fetching all blog posts within `getStaticPaths`. It then filters posts by tag using `post.data.tags` and constructs post URLs with `post.id`, demonstrating how to generate dynamic tag pages with the new content collection API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_9

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../../layouts/BaseLayout.astro";
import BlogPost from "../../components/BlogPost.astro";

export async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];

  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) =>
      post.data.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---

<BaseLayout pageTitle={tag}>
  <p>Posts tagged with {tag}</p>
  <ul>
    { posts.map((post) => <BlogPost url={`/posts/${post.id}/`} title={post.data.title} />) }
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Displaying Queried Content in Astro Templates (Astro)
DESCRIPTION: This Astro component example shows how to integrate queried content into a template. It uses `getCollection()` to fetch all blog posts and then maps over them to create a list of links, accessing post data via the `data` property.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_15

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
<h1>My posts</h1>
<ul>
  {posts.map(post => (
    <li><a href={`/blog/${post.id}`}>{post.data.title}</a></li>
  ))}
</ul>
```

----------------------------------------

TITLE: Defining Content Layer Collection in Astro (TypeScript)
DESCRIPTION: This snippet demonstrates how to define a content collection using the new Content Layer API in Astro. It shows the removal of the `type` property and the introduction of a `loader` property with `glob` to specify the collection's base directory and file pattern. It also defines a Zod schema for content validation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v5.mdx#_snippet_4

LANGUAGE: TypeScript
CODE:
```
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // For content layer you no longer define a `type`
  type: 'content',
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
});
```

----------------------------------------

TITLE: Rendering Content Collection Entry with render() in Astro
DESCRIPTION: The `render()` function compiles a given `CollectionEntry` for display in an Astro file. It returns an object containing a `<Content />` component for rendering the document's body, a `headings` array mirroring `getHeadings()`, and `remarkPluginFrontmatter` for modified frontmatter.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_7

LANGUAGE: astro
CODE:
```
---
import { getEntry, render } from 'astro:content';
const entry = await getEntry('blog', 'entry-1');

if (!entry) {
   // Handle Error, for example:
  throw new Error('Could not find blog post 1');
}
const { Content, headings, remarkPluginFrontmatter } = await render(entry);
---
```

----------------------------------------

TITLE: Validating and Importing Image with Content Collection Schema
DESCRIPTION: This code snippet demonstrates how to use the image helper in the content collection schema to validate and import an image. It defines a schema for a blog collection with a cover image field, ensuring that the image is properly validated and imported.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_20

LANGUAGE: ts
CODE:
```
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		cover: image(),
		coverAlt: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};
```

----------------------------------------

TITLE: Rendering Markdown/MDX Content in Astro
DESCRIPTION: This snippet demonstrates how to query a content collection entry using `getEntry()` and then render its Markdown or MDX content into HTML using the `render()` function. It provides access to the rendered HTML via the `<Content />` component and a list of all headings.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_16

LANGUAGE: Astro
CODE:
```
---
import { getEntry, render } from 'astro:content';

const entry = await getEntry('blog', 'post-1');
if (!entry) {
  // Handle Error, for example:
  throw new Error('Could not find blog post 1');
}
const { Content, headings } = await render(entry);
---
<p>Published on: {entry.data.published.toDateString()}</p>
<Content />
```

----------------------------------------

TITLE: Migrating Blog Post Fetching to getCollection() in Astro
DESCRIPTION: This snippet demonstrates updating `src/pages/blog.astro` to use `getCollection("blog")` for fetching all blog posts, replacing the older `import.meta.glob()` method. It shows the necessary import from `astro:content` and the updated `allPosts` variable assignment.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_7

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../layouts/BaseLayout.astro";
import BlogPost from "../components/BlogPost.astro";

const pageTitle = "My Astro Learning Blog";
const allPosts = await getCollection("blog");
---
```

----------------------------------------

TITLE: Defining Blog Post Collection Schema in Astro
DESCRIPTION: This TypeScript snippet defines a content collection named 'blog' using `astro:content`. It specifies a `glob` loader to find Markdown files in `src/blog` and a Zod schema for validating the frontmatter properties like title, publish date, description, author, image, and tags. This ensures consistent data structure for all blog posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };
```

----------------------------------------

TITLE: Defining an Inline Loader for Remote Data in Astro
DESCRIPTION: This snippet demonstrates how to define an inline loader within `defineCollection` to fetch remote content, such as country data from an API. The loader is an async function that must return an array of entries, each with an 'id' property. This approach automatically creates a collection from the remote data, clearing and reloading all entries on each call.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_7

LANGUAGE: TypeScript
CODE:
```
const countries = defineCollection({
  loader: async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
    return data.map((country) => ({
      id: country.cca3,
      ...country,
    }));
  },
  schema: /* ... */
});
```

----------------------------------------

TITLE: Rendering Content with `render()` in Astro
DESCRIPTION: This snippet demonstrates how to use the `render()` function to compile a Markdown or MDX document for rendering in an Astro file. It retrieves a collection entry, handles potential errors, and extracts the `Content`, `headings`, and `remarkPluginFrontmatter` properties for use in the component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_7

LANGUAGE: astro
CODE:
```
---
import { getEntry, render } from 'astro:content';
const entry = await getEntry('blog', 'entry-1');

if (!entry) {
   // 处理错误，例如：
  throw new Error('Could not find blog post 1');
}
const { Content, headings, remarkPluginFrontmatter } = await render(entry);
---

```

----------------------------------------

TITLE: Enforcing RSS Schema for Astro Content Collections (TypeScript)
DESCRIPTION: This snippet shows how to enforce the `rssSchema` on an Astro content collection. By importing `rssSchema` from `@astrojs/rss` and applying it to a `defineCollection`, it ensures that all entries in the 'blog' collection have the necessary properties for a valid RSS feed item, preventing potential errors.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/rss.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  schema: rssSchema,
});

export const collections = { blog };
```

----------------------------------------

TITLE: Updating RSS Feed Generation with Astro `getCollection()`
DESCRIPTION: This JavaScript snippet updates an Astro RSS feed function to use `getCollection()` for fetching blog post data. It replaces the `pagesGlobToRssItems` approach with a direct mapping of `posts` obtained from the 'blog' content collection. This ensures the RSS feed accurately reflects content managed by Astro's content collections, leveraging the structured `data` object for each post.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_12

LANGUAGE: JavaScript
CODE:
```
import rss from '@astrojs/rss';
import { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
```

----------------------------------------

TITLE: Displaying a List of Posts using Astro Content Collections
DESCRIPTION: This Astro component demonstrates how to fetch all entries from the 'posts' collection using `getCollection` and render them as an unordered list of links, displaying each post's title.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/keystatic.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
---
import { getCollection } from 'astro:content'

const posts = await getCollection('posts')
---
<ul>
  {posts.map(post => (
    <li>
      <a href={`/posts/${post.slug}`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

----------------------------------------

TITLE: Integrating an Astro Object Loader with Content Collections
DESCRIPTION: This snippet demonstrates how to integrate a custom `myLoader` with an Astro content collection. The `loader` property within `defineCollection` is set to an instance of `myLoader`, passing configuration options like `url` and `apiKey`. This setup ensures the loader is invoked during the build process to manage content for the 'blog' collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/content-loader-reference.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, z } from 'astro:content';  
import myLoader from '../../loader.ts';  

const blog = defineCollection({  
  loader: myLoader({
    url: "https://api.example.com/posts",
    apiKey: "my-secret",
  }),  
  schema: /* ... */  
});
```

----------------------------------------

TITLE: Generating Pages from a Content Collection in Astro
DESCRIPTION: This code snippet demonstrates how to generate pages dynamically from an Astro content collection. It imports necessary functions from 'astro:content', retrieves the 'blog' collection, and uses getStaticPaths to create a page for each blog post. The component then renders the content of each post using the render function and makes it available to the page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id }, props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
```

----------------------------------------

TITLE: Defining an Inline Loader for Content Collections - TypeScript
DESCRIPTION: This snippet demonstrates how to define an inline loader for an Astro content collection. It uses an asynchronous function to fetch data from an external REST API, processes the JSON response, and maps it into an array of entries, each requiring a unique `id` property for the collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
const countries = defineCollection({
  loader: async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    // Must return an array of entries with an id property
    // or an object with IDs as keys and entries as values
    return data.map((country) => ({
      id: country.cca3,
      ...country,
    }));
  },
  schema: /* ... */
});
```

----------------------------------------

TITLE: Declaring Image in Content Collection Frontmatter
DESCRIPTION: This code snippet shows how to declare an image associated with a content collection entry in the frontmatter, using a relative path to the image file. This allows you to associate images with content entries, such as blog posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_19

LANGUAGE: md
CODE:
```
---
title: "Mon premier article de blog"
cover: "./firstpostcover.jpeg" # se résoudra en "src/content/blog/firstblogcover.jpeg"
coverAlt: "Photographie d'un coucher de soleil derrière une chaîne de montagnes."
---

Ceci est un article de blog
```

----------------------------------------

TITLE: Updating Tag Index Page with getCollection() in Astro
DESCRIPTION: This snippet shows how to update `src/pages/tags/index.astro` to fetch all blog posts using `getCollection("blog")` and then extract unique tags from `post.data.tags`. This ensures the Tag Index page correctly lists all available tags based on the new content collection API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_10

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../../layouts/BaseLayout.astro";     
const allPosts = await getCollection("blog");
const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
const pageTitle = "Tag Index";
---
<!-- ... -->
```

----------------------------------------

TITLE: Configuring Cloudinary Content Loader in Astro
DESCRIPTION: This snippet demonstrates how to configure the `cldAssetsLoader` within an Astro content collection. It shows how to define a collection for assets and optionally specify a `folder` to load assets from a specific Cloudinary directory, otherwise loading from the root.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/media/cloudinary.mdx#_snippet_7

LANGUAGE: JSX
CODE:
```
import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  assets: defineCollection({
    loader: cldAssetsLoader({
      folder: '<Folder>' // Optional, without loads root directory
    })
  }),
}
```

----------------------------------------

TITLE: Fetching ButterCMS Collection Data (Astro)
DESCRIPTION: This Astro component demonstrates how to fetch a content collection named 'shopitem' from ButterCMS. It defines a TypeScript interface for the expected data structure and renders the retrieved items, including handling WYSIWYG HTML content using `set:html`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/buttercms.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
import { butterClient } from "../lib/buttercms";
const response = await butterClient.content.retrieve(["shopitem"]);

interface ShopItem {
	name: string,
	price: number,
	description: string,
}

const items = response.data.data.shopitem as ShopItem[];
---
<body>
	{items.map(item => <div>
		<h2>{item.name} - ${item.price}</h2>
		<p set:html={item.description}></p>
	</div>)}
</body>
```

----------------------------------------

TITLE: Fetching Content with getCollection (Astro)
DESCRIPTION: Illustrates how to fetch content using `getCollection` in Astro, replacing Gatsby GraphQL queries. This example retrieves all entries from the 'blog' content collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/migrate-to-astro/from-gatsby.mdx#_snippet_13

LANGUAGE: astro
CODE:
```
---
import { getCollection } from 'astro:content';

// `src/content/blog/` エントリを全て取得する
const allBlogPosts = await getCollection('blog');

// `src/pages/posts/` エントリを全て取得する
const allPosts = Object.values(import.meta.glob('../pages/post/*.md', { eager: true }));
---
```

----------------------------------------

TITLE: Generating Static Paths for Astro Blog Posts
DESCRIPTION: This Astro component uses `getStaticPaths` to dynamically generate pages for each blog post in the 'blog' collection. It queries all posts using `getCollection`, maps them to `params` (slug) and `props` (post object), and then renders the post content using `render`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id }, props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
```

----------------------------------------

TITLE: Validating Referenced Entries with `getEntries()` (Astro)
DESCRIPTION: This Astro snippet demonstrates how `getEntries()` is used to retrieve content entries that have been referenced in a collection's schema. It's important to note that validation of these referenced entries occurs at runtime; if a referenced entry is invalid or cannot be found, `getEntries()` will return `undefined` for that specific item.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-content.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
// if a referenced entry is invalid, this will return undefined.
const relatedPosts = await getEntries(blogPost.data.relatedPosts);
```

----------------------------------------

TITLE: Typing Astro Component Props with CollectionEntry
DESCRIPTION: This Astro component snippet illustrates how to type component props using `CollectionEntry` from `astro:content`. This utility function ensures that the `post` prop correctly matches the schema type of the specified 'blog' collection, providing strong type checking for content entries passed to components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_7

LANGUAGE: Astro
CODE:
```
---
import type { CollectionEntry } from 'astro:content';
interface Props {
  post: CollectionEntry<'blog'>;
}

// `post` 将匹配你的 'blog' 集合模式类型
const { post } = Astro.props;
---

```

----------------------------------------

TITLE: Generating RSS Feed from Content Collections (Astro)
DESCRIPTION: This snippet demonstrates how to create an RSS feed using Astro's `getCollection()` function to retrieve data from content collections. It maps collection entries to RSS feed items, extracting properties like title, publish date, and description. It assumes posts are rendered as `/blog/[id]` routes for link generation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/rss.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/blog/${post.id}/`,
    })),
  });
}
```

----------------------------------------

TITLE: Configuring a Content Collection with a Custom Object Loader - TypeScript
DESCRIPTION: This snippet demonstrates how to integrate a previously defined custom object loader, `myLoader`, into an Astro content collection. It shows how to pass specific configuration options (`url`, `apiKey`) to the loader function when defining the `blog` collection, allowing for flexible data sourcing.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_4

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, z } from 'astro:content';
import myLoader from '../../loader.ts';

const blog = defineCollection({
  loader: myLoader({
    url: "https://api.example.com/posts",
    apiKey: "my-secret",
  }),
  schema: /* ... */
});
```

----------------------------------------

TITLE: Defining Content Collection Schema with Image Validation
DESCRIPTION: This TypeScript snippet defines a schema for a blog content collection using `astro:content`. It uses `z.object` to validate the `title` as a string, `cover` using the `image()` helper for image validation and import, and `coverAlt` as a string, ensuring proper data types for blog post entries.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_19

LANGUAGE: ts
CODE:
```
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		cover: image(),
		coverAlt: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};
```

----------------------------------------

TITLE: Custom Parsing with File Loader for TOML and CSV (TypeScript)
DESCRIPTION: This TypeScript snippet demonstrates how to use the `file()` loader with a custom `parser` function to process non-standard data formats like TOML and CSV. It shows importing external parsers (`toml`, `csv-parse`) and configuring the `file` loader to extract collection data from the file's contents.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_4

LANGUAGE: TypeScript
CODE:
```
import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { parse as parseToml } from "toml";
import { parse as parseCsv } from "csv-parse/sync";

const dogs = defineCollection({
  loader: file("src/data/dogs.toml", { parser: (text) => parseToml(text).dogs }),
  schema: /* ... */
})

const cats = defineCollection({
  loader: file("src/data/cats.csv", { parser: (text) => parseCsv(text, { columns: true, skipEmptyLines: true })})
});
```

----------------------------------------

TITLE: Defining Image Paths in Markdown Content Collection Frontmatter
DESCRIPTION: This Markdown snippet demonstrates how to declare a cover image for a blog post within the content collection's frontmatter. The `cover` field uses a relative path, which Astro resolves relative to the current content file.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/images.mdx#_snippet_1

LANGUAGE: Markdown
CODE:
```
---
title: "My first blog post"
cover: "./firstpostcover.jpeg" # "src/content/blog/firstblogcover.jpeg"로 해석됩니다.
coverAlt: "A photograph of a sunset behind a mountain range."
---

This is a blog post
```

----------------------------------------

TITLE: Validating Images in Astro Content Collection Schema with Zod
DESCRIPTION: This TypeScript snippet defines a Zod schema for an Astro content collection. It uses the `image()` helper from `astro:content` to validate and import image fields, ensuring proper type checking and asset processing for fields like `cover`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/images.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		cover: image(),
		coverAlt: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};
```

----------------------------------------

TITLE: Updating Content Collection Image Schema - TypeScript
DESCRIPTION: This snippet demonstrates how to update content collection schemas in Astro v3.0. The deprecated `image` export from `astro:content` is removed, and images should now be validated using the `image` helper passed into the `schema` function from `astro:content`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v3.mdx#_snippet_7

LANGUAGE: ts
CODE:
```
import { defineCollection, z } from "astro:content";

 defineCollection({
   schema: ({ image }) =>
     z.object({
       image: image(),
    }),
});
```

----------------------------------------

TITLE: Common Zod Datatypes for Astro Content Schemas
DESCRIPTION: This snippet provides a cheatsheet of common Zod data types used when defining schemas for Astro content collections. It demonstrates how to validate various data types including booleans, strings, numbers, nested objects, arrays, enums, and how to apply transformations (e.g., converting a string to a Date object). It also shows how to set default values and define optional fields.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_9

LANGUAGE: TypeScript
CODE:
```
// Example: A cheatsheet of many common Zod datatypes
import { z, defineCollection } from 'astro:content';

defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    sortOrder: z.number(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    author: z.string().default('Anonymous'),
    language: z.enum(['en', 'es']),
    tags: z.array(z.string()),
    footnote: z.string().optional(),

    // In YAML, dates written without quotes around them are interpreted as Date objects
    publishDate: z.date(), // e.g. 2024-09-17

    // Transform a date string (e.g. "2022-07-08") to a Date object
    updatedDate: z.string().transform((str) => new Date(str)),

    authorContact: z.string().email(),
    canonicalURL: z.string().url(),
  })
})
```

----------------------------------------

TITLE: Rendering Blog Posts with Images in Astro
DESCRIPTION: This Astro page fetches all blog posts from the 'blog' content collection using `getCollection`. It then iterates through each post, rendering its cover image using the `Image` component from `astro:assets` and displaying the post title linked to its respective page. The `src` and `alt` attributes for the image are sourced directly from the validated content collection data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_20

LANGUAGE: astro
CODE:
```
---
import { Image } from "astro:assets";
import { getCollection } from "astro:content";
const allBlogPosts = await getCollection("blog");
---

{
	allBlogPosts.map((post) => (
		<div>
			<Image src={post.data.cover} alt={post.data.coverAlt} />
			<h2>
				<a href={"/blog/" + post.slug}>{post.data.title}</a>
			</h2>
		</div>
	))
}
```

----------------------------------------

TITLE: Defining Tina CMS Collection Schema for Posts
DESCRIPTION: This TypeScript configuration defines a 'posts' collection within Tina CMS, specifying its path, format, and fields. It includes fields for title, a required 'Date Posted' (datetime), and a rich-text body, enabling content management for blog posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/tina-cms.mdx#_snippet_6

LANGUAGE: js
CODE:
```
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "src/content/posts",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "posted",
            label: "Date Posted",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

----------------------------------------

TITLE: Update Content Collection Schema - TypeScript
DESCRIPTION: This code snippet demonstrates how to update the content collection schema in Astro v3.0 by using the `image` helper from the `astro:content` module. The deprecated `image` import is removed, and the `image` helper is used within the schema definition.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/upgrade-to/v3.mdx#_snippet_9

LANGUAGE: TypeScript
CODE:
```
import { defineCollection, z, image } from "astro:content";
import { defineCollection, z } from "astro:content";
 
defineCollection({
  schema: ({ image }) =>
    z.object({
      image: image(),
   }),
});
```

----------------------------------------

TITLE: Fetching Dynamic Entries with getEntry in Astro SSR
DESCRIPTION: This snippet illustrates how to handle dynamic routing in Astro's server-side rendering (SSR) mode. It retrieves the 'id' from Astro.params, uses getEntry() to fetch a specific content entry from the 'blog' collection on demand, and redirects to a 404 page if the entry is not found. The content is then rendered dynamically.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_23

LANGUAGE: astro
CODE:
```
---
import { getEntry, render } from "astro:content";
// 1. Get the slug from the incoming server request
const { id } = Astro.params;
if (id === undefined) {
	return Astro.redirect("/404");
}
// 2. Query for the entry directly using the request slug
const post = await getEntry("blog", id);
// 3. Redirect if the entry does not exist
if (post === undefined) {
	return Astro.redirect("/404");
}
// 4. Render the entry to HTML in the template
const { Content } = await render(post);
---
<h1>{post.data.title}</h1>
<Content />
```

----------------------------------------

TITLE: Displaying Reading Time in Astro Content Collection Page
DESCRIPTION: This Astro page snippet shows how to display the calculated reading time for content collection entries. It accesses `remarkPluginFrontmatter.minutesRead` after rendering the entry and embeds it directly into the HTML template, typically for blog posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/reading-time.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const blog = await getCollection('blog');
  return blog.map(entry => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content, remarkPluginFrontmatter } = await render(entry);
---

<html>
  <head>...</head>
  <body>
    ...
    <p>{remarkPluginFrontmatter.minutesRead}</p>
    ...
  </body>
</html>
```

----------------------------------------

TITLE: Defining Blog Content Collection Schema in Astro
DESCRIPTION: This snippet defines a content collection named 'blog' in `src/content.config.ts` using `astro:content`. It specifies a schema for blog posts, including `title` (string), `author` (string), and `date` (Date object), ensuring data consistency for translated content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/i18n.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
//src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date()
  })
});

export const collections = {
  'blog': blogCollection
};
```

----------------------------------------

TITLE: Workaround for Dynamic Glob Patterns with import.meta.glob() in Astro
DESCRIPTION: This Astro component provides a workaround for the limitation of `import.meta.glob()` not supporting dynamic variables in glob patterns. It imports a broader set of files eagerly and then uses `Array.prototype.find()` to locate a specific file based on a dynamically constructed path. This allows for selecting specific content from a pre-loaded collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_13

LANGUAGE: astro
CODE:
```
---
// src/components/featured.astro
const { postSlug } = Astro.props;
const pathToMyFeaturedPost = `src/pages/blog/${postSlug}.md`;

const posts = Object.values(import.meta.glob("../pages/blog/*.md", { eager: true }));
const myFeaturedPost = posts.find(post => post.file.includes(pathToMyFeaturedPost));
---

<p>
  Take a look at my favorite post, <a href={myFeaturedPost.url}>{myFeaturedPost.frontmatter.title}</a>!
</p>
```

----------------------------------------

TITLE: Collecting Unique Tags in Astro's getStaticPaths
DESCRIPTION: This snippet demonstrates how to collect all unique tags from Markdown blog posts within Astro's `getStaticPaths` function. It uses `import.meta.glob` to eagerly load all post frontmatter, then processes the `tags` arrays to create a flat array of all tags, and finally uses a `Set` to ensure only unique tags are stored in the `uniqueTags` array.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/2.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));

  const uniqueTags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
}
```

----------------------------------------

TITLE: Defining Collections with `glob()` Loader in Astro
DESCRIPTION: This snippet demonstrates how to use the built-in `glob()` loader within `defineCollection` to retrieve content entries from various file types (Markdown, MDX, JSON) across different directories. It shows configuration for `pattern`, `base`, and a custom `generateId` function.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  /* Retrieve all Markdown files in your pages directory. */
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: /* ... */
});
const blog = defineCollection({
  /* Retrieve all Markdown and MDX files in your blog directory. */
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/blog" }),
  schema: /* ... */
});
const authors = defineCollection({
  /* Retrieve all JSON files in your authors directory while retaining
   * uppercase letters in the ID. */
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/authors",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: /* ... */
});
```

----------------------------------------

TITLE: Validating Referenced Entries
DESCRIPTION: Demonstrates how to validate referenced entries using `getEntry()` or `getEntries()` in a runtime environment. If a referenced entry is invalid, it will return undefined.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-content.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
// 如果引用条目是无效的，那么将会返回 undefined。
const relatedPosts = await getEntries(blogPost.data.relatedPosts);
```

----------------------------------------

TITLE: Enabling Content Intellisense in Astro Configuration (JavaScript)
DESCRIPTION: This snippet demonstrates how to enable the experimental `contentIntellisense` feature within your Astro configuration file. Setting this property to `true` activates the generation of JSON schemas for content collection entries, which are then utilized by the Astro language server to provide enhanced Intellisense capabilities in content files.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/content-intellisense.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
{
  experimental: {
    contentIntellisense: true,
  },
}
```

----------------------------------------

TITLE: Generating RSS Feed Items from Astro Content Collections
DESCRIPTION: This JavaScript snippet shows how to populate the `items` field of an RSS feed using Astro's content collections. It imports `getCollection` to fetch blog posts and maps them to the required RSS item format, including `title`, `pubDate`, `description`, `customData`, and a dynamically generated `link` based on the post's slug.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/recipes/rss.mdx#_snippet_2

LANGUAGE: js
CODE:
```
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      // 記事の`slug`からRSSリンクを生成
      // この例では、すべての記事が`/blog/[slug]`ルートでレンダリングされていると仮定しています
      link: `/blog/${post.slug}/`,
    })),
  });
}
```

----------------------------------------

TITLE: Updating RSS Feed Function with Content Collections
DESCRIPTION: This snippet updates the RSS feed generation function to use `getCollection()` to retrieve blog post data. It maps the post data to the required RSS item format, including title, publication date, description, and link.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_12

LANGUAGE: js
CODE:
```
import rss from '@astrojs/rss';
import { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
		const posts = await getCollection("blog");
		return rss({
			title: 'Astro Learner | Blog',
			description: 'Mi viaje aprendiendo Astro',
			site: context.site,
			items: posts.map((post) => ({
				title: post.data.title,
				pubDate: post.data.pubDate,
				description: post.data.description,
				link: `/posts/${post.id}/`,
			})),
			customData: `<language>en-us</language>`,
		})
	}
```

----------------------------------------

TITLE: Upgrading Astro and Integrations with Yarn
DESCRIPTION: This command upgrades Astro and its official integrations to their latest versions using `yarn dlx`, a command for executing packages from the Yarn registry. It ensures your project dependencies are up-to-date, leveraging the `@astrojs/upgrade` utility.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
# Upgrade Astro and official integrations together
yarn dlx @astrojs/upgrade
```

----------------------------------------

TITLE: Rendering Markdown/MDX Content Body in Astro Templates
DESCRIPTION: This Astro component demonstrates how to fetch a single content entry using `getEntry()` and then use the `render()` function to transform its Markdown or MDX `body` into renderable HTML. It also shows how to access rendered headings and handle cases where an entry is not found.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_6

LANGUAGE: Astro
CODE:
```
---
import { getEntry, render } from 'astro:content';

const entry = await getEntry('blog', 'post-1');
if (!entry) {
  // 处理错误，例如：
  throw new Error('Could not find blog post 1');
}
const { Content, headings } = await render(entry);
---
<p>Published on: {entry.data.published.toDateString()}</p>
<Content />
```

----------------------------------------

TITLE: Defining a Payload CMS Collection for Posts (TypeScript)
DESCRIPTION: This TypeScript configuration defines a 'posts' collection for Payload CMS, specifying its slug, admin settings, and access rules. It includes required fields for 'title', 'content', and 'slug', which are essential for managing blog posts or similar content. This file serves as a blueprint for the data structure within the CMS.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/payload.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    }
  ]
};

export default Posts;
```

----------------------------------------

TITLE: Configuring Payload CMS Post Collection in TypeScript
DESCRIPTION: This TypeScript snippet defines a 'Posts' collection configuration for Payload CMS. It sets up the collection's slug, admin title field, read access, and defines three required text fields: 'title', 'content', and 'slug'. This configuration allows Payload CMS to manage blog post data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/cms/payload.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
  ],
};

export default Posts;
```

----------------------------------------

TITLE: Configuring Payload CMS with Users and Posts Collections (TypeScript)
DESCRIPTION: This TypeScript file configures the main Payload CMS application, importing and registering both the default 'Users' and the custom 'Posts' collections. It sets the serverURL for the API, defines the admin user, and specifies output paths for TypeScript types and GraphQL schema files. This configuration is crucial for making collections available in the Payload CMS dashboard and API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/payload.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { buildConfig } from "payload/config";
import path from "path";

import Users from "./collections/Users";
import Posts from "./collections/Posts";

export default buildConfig({
  serverURL: "http://localhost:4321",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Posts],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql")
  }
});
```

----------------------------------------

TITLE: Fetching Markdown Files with Astro.glob() (Astro)
DESCRIPTION: Astro v2.0 removes `Astro.fetchContent()`. This snippet demonstrates how to fetch local Markdown files using `Astro.glob()`, which returns an array of content entries. Alternatively, users can migrate to Content Collections for type-safe content management.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v2.mdx#_snippet_14

LANGUAGE: Astro
CODE:
```
---
// src/pages/index.astro
const allPosts = await Astro.glob('./posts/*.md');
---
```

----------------------------------------

TITLE: Updating Blog Post Data Access and URLs in Astro
DESCRIPTION: This snippet illustrates how to access frontmatter values via the `data` property (e.g., `post.data.title`) and construct URLs using the `post.id` for blog posts after migrating to `getCollection()`. It updates the `BlogPost` component's `url` and `title` props.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../layouts/BaseLayout.astro";
import BlogPost from "../components/BlogPost.astro";

const pageTitle = "My Astro Learning Blog";
const allPosts = await getCollection("blog");
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    {
      allPosts.map((post) => (
        <BlogPost url={`/posts/${post.id}/`} title={post.data.title} />
      ))
    }
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Fetching Data in Astro Components
DESCRIPTION: Demonstrates how to fetch local and remote data within an Astro component's frontmatter. It utilizes `getCollection()` for content collection entries, `import.meta.glob()` for other local files, and the standard `fetch()` API for remote data, all leveraging top-level await.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-create-react-app.mdx#_snippet_12

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from 'astro:content';

// Get all `src/content/blog/` entries
const allBlogPosts = await getCollection('blog');

// Get all `src/pages/posts/` entries
const allPosts = Object.values(import.meta.glob('../pages/post/*.md', { eager: true }));

// Fetch remote data
const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
const randomUser = data.results[0];
---
```

----------------------------------------

TITLE: Importing Collections into Payload CMS Configuration in TypeScript
DESCRIPTION: This TypeScript code configures the main Payload CMS application. It imports the 'Users' and 'Posts' collections and registers them, making them available in the Payload CMS dashboard. It also sets the server URL, admin user, and output paths for TypeScript types and GraphQL schema.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/cms/payload.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { buildConfig } from "payload/config";
import path from "path";

import Users from "./collections/Users";
import Posts from "./collections/Posts";

export default buildConfig({
  serverURL: "http://localhost:4321",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Posts],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
```

----------------------------------------

TITLE: Upgrading Astro and Integrations with pnpm
DESCRIPTION: This command upgrades Astro and its official integrations to their latest versions using `pnpm dlx`, a command for executing packages from the pnpm store. It ensures your project dependencies are up-to-date, leveraging the `@astrojs/upgrade` utility.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
# Upgrade Astro and official integrations together
pnpm dlx @astrojs/upgrade
```

----------------------------------------

TITLE: Configuring Decap CMS for Blog Content Collection (YAML)
DESCRIPTION: This YAML configuration defines a "blog" content collection within Decap CMS. It specifies the folder path for blog entries, enables creation of new documents, and defines the frontmatter fields (e.g., title, date, image, body) that the CMS UI will use for content editing.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/decap-cms.mdx#_snippet_4

LANGUAGE: yml
CODE:
```
collections:
      - name: "blog" # Used in routes, e.g., /admin/collections/blog
        label: "Blog" # Used in the UI
        folder: "src/content/blog" # The path to the folder where the documents are stored
        create: true # Allow users to create new documents in this collection
        fields: # The fields for each document, usually in frontmatter
          - { label: "Layout", name: "layout", widget: "hidden", default: "blog" }
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Publish Date", name: "date", widget: "datetime" }
          - { label: "Featured Image", name: "thumbnail", widget: "image" }
          - { label: "Rating (scale of 1-5)", name: "rating", widget: "number" }
          - { label: "Body", name: "body", widget: "markdown" }
```

----------------------------------------

TITLE: Displaying a Single Post Entry with Astro Content Collections
DESCRIPTION: This Astro component illustrates how to retrieve a specific post entry by its slug using `getEntry` and render its content using the `<Content />` component, along with its title.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/keystatic.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
---
import { getEntry } from 'astro:content'

const post = await getEntry('posts', 'my-first-post')
const { Content } = await post.render()
---

<main>
  <h1>{post.data.title}</h1>
  <Content />
</main>
```

----------------------------------------

TITLE: Migrating Gatsby GraphQL Queries to Astro Data Fetching
DESCRIPTION: This Astro snippet illustrates the migration from Gatsby's GraphQL data fetching to Astro's native data access methods. It shows the removal of a Gatsby `graphql` import and `pageQuery` definition, replaced by `getCollection()` for content collections and `import.meta.glob()` for accessing local files directly within the Astro component's frontmatter, demonstrating how data is fetched at build time or request time in Astro.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-gatsby.mdx#_snippet_13

LANGUAGE: Astro
CODE:
```
---
import { graphql } from "gatsby"
import { getCollection } from 'astro:content';

// Get all `src/content/blog/` entries
const allBlogPosts = await getCollection('blog');

// Get all `src/pages/posts/` entries
const allPosts = Object.values(import.meta.glob('../pages/post/*.md', { eager: true }));
---

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
```

----------------------------------------

TITLE: Configuring `glob()` Loader for Content Collections (TypeScript)
DESCRIPTION: This TypeScript snippet demonstrates how to configure the `glob()` loader in `src/content.config.ts` to fetch content entries from various directories. It provides examples for loading Markdown pages, Markdown/MDX blog posts, and JSON author data, showcasing the use of `pattern`, `base`, and a custom `generateId` function.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/reference/content-loader-reference.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  /* pagesディレクトリにあるすべてのマークダウンファイルを取得する。 */
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: /* ... */
});
const blog = defineCollection({
  /* blogディレクトリにあるすべてのマークダウン、MDXファイルを取得する。 */
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/blog" }),
  schema: /* ... */
});
const authors = defineCollection({
  /* 大文字のIDを保持したまま、authorsディレクトリ内のすべてのJSONファイルを取得する。 */
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/authors",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: /* ... */
});
```

----------------------------------------

TITLE: Overriding Content Entry ID in JSON (JSON)
DESCRIPTION: Similar to Markdown, this JSON snippet illustrates how to define a custom `slug` property within a JSON content file to override the default generated `id`, providing a custom identifier for the entry.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_13

LANGUAGE: JSON
CODE:
```
{
  "title": "My Category",
  "slug": "my-custom-id/supports/slashes",
  "description": "Your category description here."
}
```

----------------------------------------

TITLE: Overriding Content Entry ID with Custom Slug in Markdown
DESCRIPTION: This Markdown snippet shows how to define a custom `slug` in the frontmatter of a content entry. This `slug` overrides the automatically generated `id`, allowing for custom, URL-friendly identifiers that can include slashes for nested paths.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_2

LANGUAGE: Markdown
CODE:
```
---
title: My Blog Post
slug: my-custom-id/supports/slashes
---
Your blog post content here.
```

----------------------------------------

TITLE: Rendering Astro Blog Posts with a Shared Layout
DESCRIPTION: This Astro component extends the previous snippet by importing and applying a `MarkdownPostLayout`. It passes the post's frontmatter to the layout and renders the post's content within it, ensuring a consistent visual presentation across all blog posts without needing individual layout definitions in each Markdown file.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
import { getCollection, render } from 'astro:content';
import MarkdownPostLayout from '../../layouts/MarkdownPostLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id }, props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
<MarkdownPostLayout frontmatter={post.data}>
  <Content />
</MarkdownPostLayout>
```

----------------------------------------

TITLE: Overriding Content Entry ID in Markdown (Markdown)
DESCRIPTION: This Markdown snippet demonstrates how to override the automatically generated `id` for a content entry by adding a `slug` property to its frontmatter. This allows for custom, URL-friendly identifiers.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/content-collections.mdx#_snippet_12

LANGUAGE: Markdown
CODE:
```
---
title: My Blog Post
slug: my-custom-id/supports/slashes
---
Your blog post content here.
```

----------------------------------------

TITLE: Upgrading Astro and Integrations with npm
DESCRIPTION: This command upgrades Astro and its official integrations to their latest versions using `npx`, a package runner for npm. It ensures your project dependencies are up-to-date, leveraging the `@astrojs/upgrade` utility.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
# Upgrade Astro and official integrations together
npx @astrojs/upgrade
```

----------------------------------------

TITLE: Rendering Date in Astro Layout with `toLocaleDateString()`
DESCRIPTION: This Astro snippet demonstrates how to render a `Date` object from frontmatter in a layout. It uses the `toLocaleDateString()` method to convert the `pubDate` property, which is now a `Date` object, into a localized string format for display. This ensures proper date formatting after updating the content collection schema.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_11

LANGUAGE: Astro
CODE:
```
<!-- ... -->
<BaseLayout pageTitle={frontmatter.title}>
    <p>{frontmatter.pubDate.toLocaleDateString()}</p>
    <p><em>{frontmatter.description}</em></p>
    <p>Written by: {frontmatter.author}</p>
    <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />
<!-- ... -->
```

----------------------------------------

TITLE: Rendering Content with a Layout in Astro
DESCRIPTION: This code snippet shows how to render content from an Astro content collection within a layout component. It imports the MarkdownPostLayout component and wraps the  element within it, passing the post's frontmatter data to the layout. This allows for a consistent look and feel across all blog posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
import { getCollection, render } from 'astro:content';
import MarkdownPostLayout from '../../layouts/MarkdownPostLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id }, props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
<MarkdownPostLayout frontmatter={post.data}>
  <Content />
</MarkdownPostLayout>
```

----------------------------------------

TITLE: Markdown Frontmatter Image Declaration
DESCRIPTION: Shows how to declare an associated image for a content collection entry in the frontmatter of a Markdown file. The `cover` field specifies the path to the image relative to the current folder. This allows you to associate a cover image with a blog post.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/images.mdx#_snippet_20

LANGUAGE: md
CODE:
```
---
title: "我的第一篇博客文章"
cover: "./firstpostcover.jpeg" # 将解析为 "src/content/blog/firstblogcover.jpeg"
coverAlt: "一张山脉后面的日落照片。"
---
```

----------------------------------------

TITLE: Including Images from Various Sources in Astro/MDX
DESCRIPTION: This collection of examples demonstrates different methods for embedding images in Astro or MDX files, covering local images (from the same folder, src/assets, or public), and remote images. It shows usage with Astro's <Image /> component, standard HTML <img> tags, and Markdown syntax.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/images.mdx#_snippet_0

LANGUAGE: Markdown
CODE:
```
![Houston in the wild](houston.png)
```

LANGUAGE: Astro
CODE:
```
<Image src={rocket} alt="A rocketship in space." />
```

LANGUAGE: HTML
CODE:
```
<img src={rocket.src} alt="A rocketship in space." />
```

LANGUAGE: Markdown
CODE:
```
![A rocketship in space](../assets/rocket.png)
```

LANGUAGE: Astro
CODE:
```
<Image src="/images/stars.png" alt="A starry night sky." />
```

LANGUAGE: HTML
CODE:
```
<img src="/images/stars.png" alt="A starry night sky." />
```

LANGUAGE: Markdown
CODE:
```
![A starry night sky.](/images/stars.png)
```

LANGUAGE: Astro
CODE:
```
<Image src="https://example.com/images/remote-image.png" />
```

LANGUAGE: HTML
CODE:
```
<img src="https://example.com/images/remote-image.png" />
```

LANGUAGE: Markdown
CODE:
```
![Astro](https://example.com/images/remote-image.png)
```

----------------------------------------

TITLE: Overriding Content Entry ID with Custom Slug in JSON
DESCRIPTION: This JSON snippet illustrates how to define a custom `slug` property within a JSON content entry. Similar to Markdown, this `slug` overrides the default `id` generation, enabling custom, URL-friendly identifiers that can support nested paths.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/content-collections.mdx#_snippet_3

LANGUAGE: JSON
CODE:
```
{
  "title": "My Category",
  "slug": "my-custom-id/supports/slashes",
  "description": "Your category description here."
}
```

----------------------------------------

TITLE: Parsing and Validating Data with LoaderContext
DESCRIPTION: This snippet demonstrates the use of the `parseData` method from `LoaderContext` to validate and parse incoming data against the collection's schema before storing it. It iterates through feed items, calls `parseData` for each, and then sets the validated data in the `store`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/content-loader-reference.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
import type { Loader } from "astro/loaders";
import { loadFeed } from "./feed.js";

export function feedLoader({ url }): Loader {
  const feedUrl = new URL(url);
  return {
    name: "feed-loader",
    load: async ({ store, logger, parseData, meta, generateDigest }) => {
      logger.info("Loading posts");
      const feed = loadFeed(feedUrl);
      store.clear();

      for (const item of feed.items) {
        const data = await parseData({
          id: item.guid,
          data: item,
        });
        store.set({
          id,
          data,
        });
      }
    },
  };
}
```

----------------------------------------

TITLE: Querying and Rendering Markdoc Content in Astro Page
DESCRIPTION: This Astro page snippet demonstrates how to query a Markdoc content collection entry and render its content. It uses `getEntry` to fetch a specific Markdoc file and `render` to obtain the `Content` component, which then displays the Markdoc-authored content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/integrations-guide/markdoc.mdx#_snippet_8

LANGUAGE: astro
CODE:
```
---
import { getEntry, render } from 'astro:content';

const entry = await getEntry('docs', 'why-markdoc');
const { Content } = await render(entry);
---

<!--Access frontmatter properties with `data`-->
<h1>{entry.data.title}</h1>
<!--Render Markdoc contents with the Content component-->
<Content />
```

----------------------------------------

TITLE: Data Fetching in Astro Frontmatter
DESCRIPTION: This snippet shows various data fetching methods within an Astro component's frontmatter. It includes examples of using `getCollection` for content collections, `import.meta.glob` for local file imports, and `fetch` for remote API calls, all utilizing top-level await.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-nextjs.mdx#_snippet_13

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from 'astro:content';

// Get all `src/content/blog/` entries
const allBlogPosts = await getCollection('blog');

// Get all `src/pages/posts/` entries
const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));

const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
const randomUser = data.results[0];
---
```

----------------------------------------

TITLE: Defining Keystatic Content Schema Configuration
DESCRIPTION: This TypeScript configuration file (`keystatic.config.ts`) defines the content schema for Keystatic, including storage type (local) and a 'posts' collection. It specifies the fields for content entries, such as title and Markdoc content, enabling structured content management and data persistence.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/keystatic.mdx#_snippet_4

LANGUAGE: typescript
CODE:
```
// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content'
        })
      }
    })
  }
});
```

----------------------------------------

TITLE: Defining Collections with `file()` Loader in Astro
DESCRIPTION: This snippet illustrates how to use the built-in `file()` loader to create content entries from a single JSON or CSV file. It demonstrates loading a JSON file directly and using a custom `parser` function for a CSV file.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

const authors = defineCollection({
  /* Retrieve all entries from a JSON file. */
  loader: file("src/data/authors.json"),
  schema: /* ... */
});
const products = defineCollection({
  /* Retrieve all entries from a CSV file using a custom parser. */
  loader: file("src/data/products.csv", {
    parser: (fileContent) => { /* your parser logic */ },
  }),
  schema: /* ... */
});
```

----------------------------------------

TITLE: Including Full Post Content in RSS Feed with Content Collections (JS)
DESCRIPTION: This JavaScript snippet demonstrates how to generate an RSS feed for Astro content collections. It uses `sanitize-html` and `markdown-it` to render and sanitize the full post body, ensuring HTML content is properly included and safe for RSS readers. It's suitable for Markdown files but notes limitations with MDX.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/rss.mdx#_snippet_6

LANGUAGE: JavaScript
CODE:
```
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: blog.map((post) => ({
      link: `/blog/${post.id}/`,
      // Note: this will not process components or JSX expressions in MDX files.
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      ...post.data,
    })),
  });
}
```

----------------------------------------

TITLE: Declaring Image in Markdown Frontmatter
DESCRIPTION: This Markdown frontmatter declares metadata for a blog post within an Astro content collection. It specifies the post's title, a relative path to its cover image, and alternative text for accessibility. The `cover` field will be resolved to the full image path by Astro.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_18

LANGUAGE: md
CODE:
```
---
title: "My first blog post"
cover: "./firstpostcover.jpeg" # will resolve to "src/content/blog/firstblogcover.jpeg"
coverAlt: "A photograph of a sunset behind a mountain range."
---

This is a blog post
```

----------------------------------------

TITLE: Configuring `file()` Loader for Content Collections (TypeScript)
DESCRIPTION: This TypeScript snippet demonstrates how to configure the `file()` loader in `src/content.config.ts` to load content from a single file. It provides examples for loading JSON data directly and using a custom `parser` function to handle unsupported file types like CSV, allowing flexible data ingestion.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/reference/content-loader-reference.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

const authors = defineCollection({
  /* JSONファイルからすべてのエントリーを取得する。 */
  loader: file("src/data/authors.json"),
  schema: /* ... */
});
const products = defineCollection({
  /* カスタムのパーサーを使って、CSVファイルからすべてのエントリーを取得する。 */
  loader: file("src/data/products.csv", {
    parser: (fileContent) => { /* パーサーのロジックを記述 */ },
  }),
  schema: /* ... */
});
```

----------------------------------------

TITLE: Integrating Markdown Content with Astro Prose Component
DESCRIPTION: Demonstrates how to fetch a content collection entry using astro:content, render its Markdown content, and then embed it within the custom <Prose /> component on an Astro page, such as src/pages/index.astro. This process applies the configured Tailwind Typography styles to the Markdown output.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/tailwind-rendered-markdown.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
import Prose from '../components/Prose.astro';
import Layout from '../layouts/Layout.astro';
import { getEntry, render } from 'astro:content';

const entry = await getEntry('collection', 'entry');
const { Content } = await render(entry);
---
<Layout>
  <Prose>
    <Content />
  </Prose>
</Layout>
```

----------------------------------------

TITLE: Generating Dynamic HTML with Map in Astro
DESCRIPTION: Demonstrates how to use JavaScript's `map` function within JSX-like expressions to dynamically generate a list of HTML elements based on an array of data. This is useful for rendering collections of items.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/astro-syntax.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
--- const items = ["Dog", "Cat", "Platypus"]; ---\n<ul>\n  {items.map((item) => (\n    <li>{item}</li>\n  ))}\n</ul>
```

----------------------------------------

TITLE: Astro Component for Blog Index Page
DESCRIPTION: Demonstrates how to create an Astro component for a blog index page that fetches blog posts from a content collection and renders their cover images and titles. It uses the `<Image />` component to display the cover images, utilizing the `src` and `alt` properties from the post data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/images.mdx#_snippet_15

LANGUAGE: astro
CODE:
```
---
import { Image } from "astro:assets";
import { getCollection } from "astro:content";
const allBlogPosts = await getCollection("blog");
---

{
	allBlogPosts.map((post) => (
		<div>
			<Image src={post.data.cover} alt={post.data.coverAlt} />
			<h2>
				<a href={"/blog/" + post.slug}>{post.data.title}</a>
			</h2>
		</div>
	))
}

```

----------------------------------------

TITLE: Defining a Markdoc Partial for Reusable Content
DESCRIPTION: This Markdoc partial defines a reusable footer containing social links. It's intended to be included in multiple documents, demonstrating how to create content that doesn't follow a collection schema and can be excluded from queries by using an underscore prefix.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/integrations-guide/markdoc.mdx#_snippet_19

LANGUAGE: Markdoc
CODE:
```
Social links:

- [Twitter / X](https://twitter.com/astrodotbuild)
- [Discord](https://astro.build/chat)
- [GitHub](https://github.com/withastro/astro)
```

----------------------------------------

TITLE: Extracting Unique Tags from Astro Posts
DESCRIPTION: This snippet shows how to dynamically extract and deduplicate tags from a collection of Astro Markdown posts. It maps over the `allPosts` array to get all `frontmatter.tags`, flattens the resulting arrays, and then uses a JavaScript `Set` to ensure only unique tags are stored in the `tags` array.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/3.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
const pageTitle = "Tag Index";
---

```

----------------------------------------

TITLE: Content Configuration File
DESCRIPTION: Example of a content configuration file, typically used for configuring content collections in Astro projects.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/de/basics/project-structure.mdx#_snippet_2

LANGUAGE: typescript
CODE:
```
content.config.ts
```

----------------------------------------

TITLE: Rendering Translated Blog Posts with Static Generation in Astro
DESCRIPTION: This Astro page uses `getStaticPaths` to pre-render translated blog posts in static mode. It fetches all 'blog' collection entries, extracts `lang` and `slug` from `page.id`, and maps them to dynamic routes, then renders the content with formatted date and title.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/i18n.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
//src/pages/[lang]/blog/[...slug].astro
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const pages = await getCollection('blog');

  const paths = pages.map(page => {
    const [lang, ...slug] = page.id.split('/');
    return { params: { lang, slug: slug.join('/') || undefined }, props: page };
  });

  return paths;
}

const { lang, slug } = Astro.params;
const page = Astro.props;
const formattedDate = page.data.date.toLocaleString(lang);
const { Content } = await render(page);
---
<h1>{page.data.title}</h1>
<p>by {page.data.author} • {formattedDate}</p>
<Content/>
```

----------------------------------------

TITLE: Migrate blog listing to getCollection() in Astro
DESCRIPTION: Replaces import.meta.glob() with getCollection("blog") to fetch blog posts and updates the reference to post data to use the data property. This snippet demonstrates how to fetch blog posts using the new content API and access frontmatter data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_7

LANGUAGE: astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../layouts/BaseLayout.astro";
import BlogPost from "../components/BlogPost.astro";

const pageTitle = "Mi Blog de Aprendizaje de Astro";
const allPosts = Object.values(import.meta.glob("../pages/posts/*.md", { eager: true }));
const allPosts = await getCollection("blog");
---
```

----------------------------------------

TITLE: Parsing and Storing Data in Astro Loader (TypeScript)
DESCRIPTION: The `parseData` function is used to validate and parse incoming data against the collection's defined schema. This example shows its use within a loader's `load` function to process items from a feed, ensuring data conforms to the expected structure before being stored in the `store`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_6

LANGUAGE: TypeScript
CODE:
```
import type { Loader } from "astro/loaders";
import { loadFeed } from "./feed.js";

export function feedLoader({ url }): Loader {
  const feedUrl = new URL(url);
  return {
    name: "feed-loader",
    load: async ({ store, logger, parseData, meta, generateDigest }) => {
      logger.info("Loading posts");
      const feed = loadFeed(feedUrl);
      store.clear();

      for (const item of feed.items) {
        const data = await parseData({
          id: item.guid,
          data: item,
        });
        store.set({
          id,
          data,
        });
      }
    }
  };
}
```

----------------------------------------

TITLE: Update tag page generation with getCollection() in Astro
DESCRIPTION: Updates the tag page generation to use getCollection("blog") for fetching blog posts, accesses frontmatter data via the data property, and constructs page URLs using the post slug. This ensures the tag pages are compatible with the new content API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_9

LANGUAGE: astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../../layouts/BaseLayout.astro";
import BlogPost from "../../components/BlogPost.astro";

export async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];

  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) =>
      post.data.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---

<BaseLayout pageTitle={tag}>
  <p>Publicaciones etiquetadas con {tag}</p>
  <ul>
    { posts.map((post) => <BlogPost url={`/posts/${post.id}/`} title={post.data.title} />) }
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Fetching Posts with Statamic GraphQL API in Astro
DESCRIPTION: This Astro component illustrates how to query a Statamic site's GraphQL API to retrieve post data. It constructs a GraphQL query to fetch entries from the 'posts' collection, including their `title` and `content`, and sends it via a POST request. The fetched data is then iterated over to display the `title` and `content` of each post using Astro's `set:html` directive. Requires a Statamic Pro site with GraphQL API enabled and a 'posts' collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/statamic.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
---
const graphqlQuery = {
  query: `
    query Entries($page: Int, $locale: String) {
      entries(
        collection: "posts"
        sort: "date asc"
        limit: 20
        page: $page
        filter: { locale: $locale }
      ) {
        current_page
        has_more_pages
        data {
          title
          ... on Entry_Posts_Post {
              content
            }
        }
      }
    }
  `,
  variables: {
    page: page,
    locale: locale,
  },
};

const res = await fetch("https://[YOUR-SITE]/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(graphqlQuery),
})

const { data } = await res.json();
const entries = data?.entries;
---
<h1>Astro + Statamic 🚀</h1>
{
  entries.data.map((post) => (
      <h2 set:html={post.title} />
      <p set:html={post.content} />
  ))
}
```

----------------------------------------

TITLE: Defining a Custom Object Loader Function - TypeScript
DESCRIPTION: This code defines a reusable `myLoader` function that returns an Astro `Loader` object. It accepts configuration options (`url`, `apiKey`), sets up a `load` method to fetch data using `loadFeedData`, and optionally defines a Zod `schema` for validating collection entries, which can be overridden by the user.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
import type { Loader, LoaderContext } from 'astro/loaders';
import { z } from 'astro:content';
import { loadFeedData } from "./feed.js";

// Define any options that the loader needs
export function myLoader(options: { url: string, apiKey: string }): Loader {
  // Configure the loader
  const feedUrl = new URL(options.url);
  // Return a loader object
  return {
    name: "my-loader",
    // Called when updating the collection.
    load: async (context: LoaderContext): Promise<void> => {
      // Load data and update the store
      const response = await loadFeedData(feedUrl, options.apiKey);
    },
    // Optionally, define the schema of an entry.
    // It will be overridden by user-defined schema.
    schema: async () => z.object({
      // ...
    })
  };
}
```

----------------------------------------

TITLE: Example Payload CMS Posts API Response (JSON)
DESCRIPTION: This JSON object represents a typical API response from a Payload CMS collection endpoint, specifically for 'posts'. It contains an array of 'docs', where each object represents a single post with fields like 'id', 'title', 'content', and 'slug'. The response also includes pagination metadata such as totalDocs, limit, totalPages, and page, demonstrating how data is structured for consumption by a frontend application like Astro.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/payload.mdx#_snippet_2

LANGUAGE: JSON
CODE:
```
{
  "docs":[
      {
        "id":"64098b16483b0f06a7e20ed4",
        "title":"Astro & PayloadCMS Title 🚀",
        "content":"Astro & PayloadCMS Content",
        "slug":"astro-payloadcms-slug",
        "createdAt":"2023-03-09T07:30:30.837Z",
        "updatedAt":"2023-03-09T07:30:30.837Z"
      }
  ],
  "totalDocs":1,
  "limit":10,
  "totalPages":1,
  "page":1,
  "pagingCounter":1,
  "hasPrevPage":false,
  "hasNextPage":false,
  "prevPage":null,
  "nextPage":null
}
```

----------------------------------------

TITLE: Update tag index page with getCollection() in Astro
DESCRIPTION: Updates the tag index page to use getCollection("blog") for fetching blog posts and accesses frontmatter data via the data property. This ensures the tag index page is compatible with the new content API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_10

LANGUAGE: astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../../layouts/BaseLayout.astro";
const allPosts = await getCollection("blog");
const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
const pageTitle = "Índice de Etiquetas";
---
```

----------------------------------------

TITLE: Removing Layout Definition from Astro Markdown Frontmatter
DESCRIPTION: This Markdown snippet demonstrates the removal of the `layout` property from a blog post's frontmatter. Once a shared layout is applied via the Astro page component (e.g., `[...slug].astro`), this individual layout definition becomes redundant and should be removed to avoid conflicts or unnecessary processing.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/6-islands/4.mdx#_snippet_6

LANGUAGE: Markdown
CODE:
```
---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My First Blog Post'
pubDate: 2022-07-01
...
---
```

----------------------------------------

TITLE: Example Invalid Content Entry ID (JSON)
DESCRIPTION: This JSON snippet illustrates an example of an invalid content entry returned by a content loader, where the `id` field is an integer instead of a string, causing an error. The `id` property must be a string for content collection entries.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/errors/content-loader-returns-invalid-id.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "id": 1,
  "title": "Hello, World!"
}
```

----------------------------------------

TITLE: Implementing Dynamic Tag Pages with getStaticPaths in Astro
DESCRIPTION: This Astro component (`[tag].astro`) dynamically generates pages for each unique tag found across all blog posts. It uses the `getStaticPaths` function to collect all Markdown posts, extract unique tags from their frontmatter, and then create a route for each tag, passing the filtered posts as props. The component then renders a list of blog posts associated with the current tag, providing a dedicated page for each tag.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/2.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BlogPost from '../../components/BlogPost.astro';

export async function getStaticPaths() {
  const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
  
  const uniqueTags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];

  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post: any) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---
<BaseLayout pageTitle={tag}>
  <p>Posts tagged with {tag}</p>
  <ul>
    {posts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title}/>)}
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Fetching Remote Markdown with Marked.js in Astro
DESCRIPTION: This Astro component demonstrates how to fetch Markdown content from a remote URL at runtime using the `fetch` API and then parse it into HTML using the `marked` library. The resulting HTML is rendered directly into an `<article>` element using `set:html`, illustrating a method for handling remote Markdown outside of Astro's built-in content collections.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/markdown-content.mdx#_snippet_16

LANGUAGE: Astro
CODE:
```
---
// Example: Fetch Markdown from a remote API
// and render it to HTML, at runtime.
// Using "marked" (https://github.com/markedjs/marked)
import { marked } from 'marked';
const response = await fetch('https://raw.githubusercontent.com/wiki/adam-p/markdown-here/Markdown-Cheatsheet.md');
const markdown = await response.text();
const content = marked.parse(markdown);
---
<article set:html={content} />
```

----------------------------------------

TITLE: Referencing Public Directory Files in Astro
DESCRIPTION: This snippet demonstrates how to reference static assets located in the `public/` directory directly within Astro HTML templates. Files in `public/` are copied untouched to the final build, allowing them to be linked or displayed using their URL paths.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
// To link to /public/reports/annual/2024.pdf
Download the <a href="/reports/annual/2024.pdf">2024 annual statement as a PDF</a>.

// To display /public/assets/cats/ginger.jpg
<img src="/assets/cats/ginger.jpg" alt="An orange cat sleeping on a bed.">
```

----------------------------------------

TITLE: Creating Friend Document in Firestore (POST /api/friends) - TypeScript
DESCRIPTION: This Astro API route handles POST requests to create a new 'friend' document in the Firestore 'friends' collection. It extracts 'name', 'age', and 'isBestFriend' from form data, validates required fields, and then adds the data to Firestore. Upon success, it redirects to '/dashboard', otherwise, it returns an error response.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/backend/google-firebase.mdx#_snippet_15

LANGUAGE: TypeScript
CODE:
```
import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const age = formData.get("age")?.toString();
  const isBestFriend = formData.get("isBestFriend") === "on";

  if (!name || !age) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const friendsRef = db.collection("friends");
    await friendsRef.add({
      name,
      age: parseInt(age),
      isBestFriend,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/dashboard");
};
```

----------------------------------------

TITLE: Using an Astro Integration Preset in `astro.config.mjs` (JavaScript)
DESCRIPTION: This JavaScript snippet demonstrates how to include an Astro integration preset in the `integrations` array within `astro.config.mjs`. A preset is a function that returns an array of multiple integration objects, allowing for the bundling of several smaller integrations into a single, reusable collection. This approach simplifies configuration for complex features by abstracting multiple integrations behind a single preset call.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/integrations-reference.mdx#_snippet_58

LANGUAGE: javascript
CODE:
```
integrations: [
  // Example: where examplePreset() returns: [integrationOne, integrationTwo, ...etc]
  examplePreset()
]
```

----------------------------------------

TITLE: Importation des modules astro:assets
DESCRIPTION: Importe les composants Image et Picture, ainsi que les fonctions getImage et inferRemoteSize depuis le module astro:assets.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  Image,
  Picture,
  getImage,
  inferRemoteSize,
 } from 'astro:assets';
```

----------------------------------------

TITLE: Programmatic Prefetching for Multiple Links with Moderate Eagerness in Astro
DESCRIPTION: This example illustrates how to programmatically apply `eagerness: 'moderate'` to a collection of links. It uses `document.getElementsByClassName` to select elements and then iterates through them, calling `prefetch()` for each link's `href` attribute. This approach is suitable for large sets of links where the browser can decide the optimal prefetch order.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/prefetch.mdx#_snippet_9

LANGUAGE: Astro
CODE:
```
<a class="link-moderate" href="/nice-link-1">A Nice Link 1</a>
<a class="link-moderate" href="/nice-link-2">A Nice Link 2</a>
<a class="link-moderate" href="/nice-link-3">A Nice Link 3</a>
<a class="link-moderate" href="/nice-link-4">A Nice Link 4</a>
...
<a class="link-moderate" href="/nice-link-20">A Nice Link 20</a>

<script>
  import { prefetch } from 'astro:prefetch';

  const linkModerate = document.getElementsByClassName('link-moderate');
  linkModerate.forEach((link) => prefetch(link.getAttribute('href'), {eagerness: 'moderate'}));
  
</script>
```

----------------------------------------

TITLE: Rendering Markdown Content in Astro Components
DESCRIPTION: This Astro component demonstrates two ways to render Markdown content: directly importing a Markdown file as a component (`PromoBanner`) and rendering content from an Astro Content Collection entry (`product`). It shows how to use the `<Content />` component to display the HTML body of Markdown.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/markdown-content.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
--- 
// Import statement
import {Content as PromoBanner} from '../components/promoBanner.md';

// Collections query
import { getEntry, render } from 'astro:content';

const product = await getEntry('products', 'shirt');
const { Content } = await render(product);
---
<h2>Today's promo</h2>
<PromoBanner />

<p>Sale Ends: {product.data.saleEndDate.toDateString()}</p>
<Content />
```

----------------------------------------

TITLE: Fetching Posts with Statamic REST API in Astro
DESCRIPTION: This Astro component demonstrates how to fetch a list of posts from a Statamic site's REST API. It sends a GET request to the `/api/collections/posts/entries` endpoint, sorts the results by date, and then renders the `title` and `content` of each post using Astro's `set:html` directive. Requires a Statamic Pro site with REST API enabled and a 'posts' collection.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/statamic.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
---
const res = await fetch("https://[YOUR-SITE]/api/collections/posts/entries?sort=-date")
const posts = await res.json()
---
<h1>Astro + Statamic 🚀</h1>
{
  posts.map((post) => (
      <h2 set:html={post.title} />
      <p set:html={post.content} />
  ))
}
```

----------------------------------------

TITLE: Enabling Astro Telemetry
DESCRIPTION: This command re-enables telemetry for the current CLI user, allowing the Astro team to collect anonymous usage data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/cli-reference.mdx#_snippet_12

LANGUAGE: shell
CODE:
```
astro telemetry enable
```

----------------------------------------

TITLE: Complete Tag Index Page Structure in Astro
DESCRIPTION: This comprehensive snippet presents the full content of the 'src/pages/tags/index.astro' file. It includes the frontmatter for importing the layout and dynamically collecting unique tags from blog posts, followed by the HTML structure with linked and styled tags, and the embedded CSS for presentation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/3.mdx#_snippet_9

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
const tags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
const pageTitle = "Tag Index";
---
<BaseLayout pageTitle={pageTitle}>
  <div class="tags">
    {tags.map((tag) => (
      <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
    ))}
  </div>
</BaseLayout>
<style>
  a {
    color: #00539F;
  }

  .tags {
    display: flex; 
    flex-wrap: wrap; 
  }

  .tag {
    margin: 0.25em;
    border: dotted 1px #a1a1a1;
    border-radius: .5em;
    padding: .5em 1em;
    font-size: 1.15em;
    background-color: #F8FCFD;
  }
</style>
```

----------------------------------------

TITLE: Disabling Astro Telemetry (Shell)
DESCRIPTION: This command disables the collection of anonymous telemetry data by the Astro CLI. Telemetry provides insights into feature usage and can be re-enabled later if desired.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/cli-reference.mdx#_snippet_15

LANGUAGE: shell
CODE:
```
astro telemetry disable
```

----------------------------------------

TITLE: Resetting Astro Telemetry Data (Shell)
DESCRIPTION: This command resets the telemetry data associated with the current CLI user. This can be used to clear any previously collected anonymous usage statistics.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/cli-reference.mdx#_snippet_17

LANGUAGE: shell
CODE:
```
astro telemetry reset
```

----------------------------------------

TITLE: Displaying Images in MDX Files with Astro Components
DESCRIPTION: This snippet demonstrates the flexibility of MDX files for image handling, allowing the use of Astro's `<Image />` and `<Picture />` components, standard HTML `<img>` tags, and Markdown `![alt](src)` syntax. It shows examples for local images (imported and direct path), public folder images, and remote images, highlighting the import of Astro components and image assets.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_17

LANGUAGE: MDX
CODE:
```
---
title: My Page title
---
import { Image } from 'astro:assets';
import rocket from '../assets/rocket.png';

# My MDX Page

// Local image stored in the the same folder
![Houston in the wild](houston.png)

// Local image stored in src/assets/
<Image src={rocket} alt="A rocketship in space." />
<img src={rocket.src} alt="A rocketship in space." />
![A rocketship in space](../assets/rocket.png)

// Image stored in public/images/
<Image src="/images/stars.png" alt="A starry night sky." />
<img src="/images/stars.png" alt="A starry night sky." />
![A starry night sky.](/images/stars.png)

// Remote image on another server
<Image src="https://example.com/images/remote-image.png" />
<img src="https://example.com/images/remote-image.png" />
![Astro](https://example.com/images/remote-image.png)
```

----------------------------------------

TITLE: Updating Astro Dynamic Route for Content Layer (Astro)
DESCRIPTION: This Astro snippet illustrates updating a dynamic route (`[slug].astro`) to use the `id` property from Content Layer collections instead of the deprecated `slug` property. The `getStaticPaths` function now maps `post.id` to the `slug` parameter for routing, ensuring compatibility with the new API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v5.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
// src/pages/[slug].astro
---
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    params: { slug: post.id },
    props: post,
  }));
}
---
```

----------------------------------------

TITLE: Enabling Astro Telemetry (Shell)
DESCRIPTION: This command re-enables the collection of anonymous telemetry data by the Astro CLI. This reverses the effect of the `disable` command, allowing Astro to gather usage insights.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/cli-reference.mdx#_snippet_16

LANGUAGE: shell
CODE:
```
astro telemetry enable
```

----------------------------------------

TITLE: Configuring Content Types for Front Matter CMS in Astro
DESCRIPTION: This JSON configuration defines the content types for Front Matter CMS, specifically tailored to match the content collection schema used by the Astro blog template. It specifies fields like title, description, publishing date, and a hero image, ensuring that content created or managed through Front Matter CMS aligns with Astro's expected front matter structure. This setup is crucial for seamless content creation and management.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/frontmatter-cms.mdx#_snippet_0

LANGUAGE: JSON
CODE:
```
"frontMatter.taxonomy.contentTypes": [
  {
    "name": "default",
    "pageBundle": false,
    "previewPath": "'blog'",
    "filePrefix": null,
    "fields": [
      {
        "title": "Title",
        "name": "title",
        "type": "string",
        "single": true
      },
      {
        "title": "Description",
        "name": "description",
        "type": "string"
      },
      {
        "title": "Publishing date",
        "name": "pubDate",
        "type": "datetime",
        "default": "{{now}}",
        "isPublishDate": true
      },
      {
        "title": "Content preview",
        "name": "heroImage",
        "type": "image",
        "isPreviewImage": true
      }
    ]
  }
]
```

----------------------------------------

TITLE: Composant Image avec image publique
DESCRIPTION: Utilisation du composant Image avec une image située dans le dossier `public/`. Le chemin d'accès à l'image est relatif au dossier `public/`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
---
<Image
    src="/images/my-public-image.png"
    alt="texte descriptif"
    width="200"
    height="150"
  />
```

----------------------------------------

TITLE: Formatting Date in Astro Layout
DESCRIPTION: This snippet demonstrates how to format a date obtained from frontmatter in an Astro layout using the `toLocaleDateString()` method. It assumes that `frontmatter.pubDate` is now a Date object due to the content collections schema.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_11

LANGUAGE: astro
CODE:
```
<!-- ... -->
<BaseLayout pageTitle={frontmatter.title}>
    <p>{frontmatter.pubDate.toLocaleDateString()}</p>
    <p><em>{frontmatter.description}</em></p>
    <p>Written by: {frontmatter.author}</p>
    <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />
<!-- ... -->
```

----------------------------------------

TITLE: Relative Imports in Astro Before Aliases
DESCRIPTION: Demonstrates the use of relative paths for importing components and assets in an Astro file. This approach requires understanding the file tree relationship and can lead to brittle imports that need updates if files are moved.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_8

LANGUAGE: astro
CODE:
```
---
import Button from '../../components/controls/Button.astro';
import logoUrl from '../../assets/logo.png?url';
---
```

----------------------------------------

TITLE: Watching Filesystem Changes in Astro Loader (TypeScript)
DESCRIPTION: In development mode, the `watcher` parameter provides an `FSWatcher` instance that can be used to monitor filesystem changes and trigger updates. This example shows how to listen for 'change' events on a specific file path and reload data when modifications are detected, ensuring the content collection stays up-to-date.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_8

LANGUAGE: TypeScript
CODE:
```
return {
  name: 'file-loader',
  load: async ({ config, store, watcher }) => {
    const url = new URL(fileName, config.root);
    const filePath = fileURLToPath(url);
    await syncData(filePath, store);

    watcher?.on('change', async (changedPath) => {
      if (changedPath === filePath) {
        logger.info(`Reloading data from ${fileName}`);
        await syncData(filePath, store);
      }
    });
  }
};
```

----------------------------------------

TITLE: Creating User Registration Form in Astro
DESCRIPTION: This Astro page provides a simple HTML form for new user registration. It collects an email and password, then submits this data via a POST request to the `/api/auth/register` endpoint, facilitating user account creation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/backend/supabase.mdx#_snippet_9

LANGUAGE: Astro
CODE:
```
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Register">
  <h1>Register</h1>
  <p>Already have an account? <a href="/signin">Sign in</a></p>
  <form action="/api/auth/register" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <button type="submit">Register</button>
  </form>
</Layout>
```

----------------------------------------

TITLE: Utilisation du composant Image
DESCRIPTION: Exemple d'utilisation du composant Image pour afficher une image locale. L'attribut `alt` est obligatoire. L'image est importée et passée comme source au composant Image.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
--- 
// importe le composant Image et l'image
import { Image } from 'astro:assets';
import myImage from "../assets/mon_image.png"; // Image a une résolution de 1600x900
---

<!-- `alt` est obligatoire sur le composant Image -->
<Image src={myImage} alt="Une description de mon image." />
```

----------------------------------------

TITLE: Defining Font Subsets
DESCRIPTION: This snippet shows how to define a list of font subsets to preload. This helps optimize performance by only loading necessary character sets for the font.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_26

LANGUAGE: JavaScript
CODE:
```
subsets: ["latin"]
```

----------------------------------------

TITLE: Rendering Eagerly Imported Astro Components with import.meta.glob() in Astro
DESCRIPTION: This Astro component illustrates how to import multiple Astro components using `import.meta.glob()` with `{ eager: true }`. It then maps over the imported components and renders each one using its `default` property, passing a `size` prop. This pattern is ideal for creating component libraries or dynamic component displays.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_12

LANGUAGE: astro
CODE:
```
---
// imports all files that end with `.astro` in `./src/components/`
const components = Object.values(import.meta.glob('../components/*.astro', { eager: true }));
---
<!-- Display all of our components -->
{components.map((component) => (
  <div>
    <component.default size={24} />
  </div>
))}
```

----------------------------------------

TITLE: Defining Styles and Scripts in an Astro Component (Astro)
DESCRIPTION: This Astro component example illustrates the declaration of multiple `<style>` and `<script>` tags. It serves as a test case to observe the rendering order behavior of Astro, both with and without the `experimental.preserveScriptOrder` flag enabled.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/preserve-scripts-order.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
<p>I am a component</p>
<style>
  body {
    background: red;
  }
</style>
<style>
  body {
    background: yellow;
  }
</style>
<script>
    console.log("hello")
</script>
<script>
    console.log("world!")
</script>
```

----------------------------------------

TITLE: Embedding Local Images in Markdown Files
DESCRIPTION: This Markdown snippet demonstrates the correct syntax for embedding local images within `.md` files in Astro. It shows how to reference an image stored in `src/assets` using standard Markdown image syntax `![]()`, emphasizing that HTML `<img>` tags are not supported for local images in `.md` files.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-gatsby.mdx#_snippet_12

LANGUAGE: Markdown
CODE:
```
<!-- src/pages/post-1.md -->

# My Markdown Page

<!-- Local image stored at src/assets/stars.png -->
![A starry night sky.](../assets/stars.png)
```

----------------------------------------

TITLE: Removing Experimental Flags from Astro Configuration (JavaScript)
DESCRIPTION: Astro v2.0 makes several previously experimental features, such as Content Collections, prerendering, and the error overlay, available by default. This snippet shows how to remove the `experimental` block from `astro.config.mjs` as these flags are no longer necessary.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v2.mdx#_snippet_16

LANGUAGE: JavaScript
CODE:
```
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  experimental: {
    contentCollections: true,
    prerender: true,
    errorOverlay: true,
  },
})
```

----------------------------------------

TITLE: Displaying Last Modified Time in Astro Page (Astro)
DESCRIPTION: This Astro page snippet shows how to retrieve and display the `lastModified` time for content collection entries. It uses `dayjs` to format the timestamp obtained from `remarkPluginFrontmatter` after rendering the entry, making it visible on the page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/modified-time.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { getCollection, render } from 'astro:content';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export async function getStaticPaths() {
  const blog = await getCollection('blog');
  return blog.map(entry => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}

const { entry } = Astro.props;
const { Content, remarkPluginFrontmatter } = await render(entry);

const lastModified = dayjs(remarkPluginFrontmatter.lastModified)
  .utc()
  .format("HH:mm:ss DD MMMM YYYY UTC");
---

<html>
  <head>...</head>
  <body>
    ...
    <p>Last Modified: {lastModified}</p>
    ...
  </body>
</html>
```

----------------------------------------

TITLE: Referencing Public Directory Files in Astro
DESCRIPTION: This snippet demonstrates how to reference static assets placed in the `public/` directory directly via URL paths within Astro HTML templates. Files in `public/` are copied to the final build without processing, making them accessible via their relative paths from the root.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/pt-br/guides/imports.mdx#_snippet_0

LANGUAGE: astro
CODE:
```
// Para usar o link /public/reports/annual/2024.pdf
Faça o download <a href="/reports/annual/2024.pdf">do relatório anual de 2024 como PDF</a>.

// Para mostrar /public/assets/cats/ginger.jpg
<img src="/assets/cats/ginger.jpg" alt="Um gato laranja dormindo em uma cama.">
```

----------------------------------------

TITLE: Importing Other Static Assets in Astro with JSX
DESCRIPTION: Shows how to import various static assets (images, text files) in Astro. These imports return a URL reference to the final built asset, useful for linking non-JS assets like image `src` attributes. This example uses JSX to demonstrate referencing an image.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_7

LANGUAGE: jsx
CODE:
```
import imgReference from './image.png'; // imgReference === '/src/image.png'
import svgReference from './image.svg'; // svgReference === '/src/image.svg'
import txtReference from './words.txt'; // txtReference === '/src/words.txt'

// This example uses JSX, but you can use import references with any framework.
<img src={imgReference.src} alt="image description" />;
```

----------------------------------------

TITLE: Updating File Imports in Astro
DESCRIPTION: This Astro snippet demonstrates how to correctly import components using relative file paths, including the full file extension for `.astro` files. It shows importing a `Card` component from a relative path and then using it within an Astro page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-gatsby.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
import Card from `../../components/Card.astro`;
---
<Card />
```

----------------------------------------

TITLE: Displaying Local Images with Astro's Image Component
DESCRIPTION: This snippet demonstrates how to import and use the `<Image />` component from `astro:assets` to display a local image. The `src` property points to the imported image, and `alt` is a mandatory attribute for accessibility. The component automatically optimizes the image and infers dimensions.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
--- 
// import the Image component and the image
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png'; // Image is 1600x900
---

<!-- `alt` is mandatory on the Image component -->
<Image src={myImage} alt="A description of my image." />
```

----------------------------------------

TITLE: Displaying Blog Post List in Astro
DESCRIPTION: This Astro component fetches all blog posts from Cosmic CMS using `getAllPosts()` and dynamically renders them as a list of `<Card />` components. It maps over the fetched data, passing post title, slug, excerpt, and tags to each card for display. This snippet is intended for a main index or blog listing page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/cosmic.mdx#_snippet_6

LANGUAGE: Astro
CODE:
```
--- 
// src/pages/index.astro
import Card from '../components/Card.astro'
import { getAllPosts } from '../lib/cosmic'

const data = await getAllPosts()
---

<section>
  <ul class="grid gap-8 md:grid-cols-2">
    {
      data.map((post) => (
        <Card
          title={post.title}
          href={post.slug}
          body={post.metadata.excerpt}
          tags={post.metadata.tags.map((tag) => tag)}
        />
      ))
    }
  </ul>
</section>
```

----------------------------------------

TITLE: Update blog post data reference in Astro
DESCRIPTION: Updates the reference to the frontmatter data to use the data property of the post object when using getCollection(). It also updates the URL generation to use the slug property instead of the full URL.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_8

LANGUAGE: astro
CODE:
```
---
import { getCollection } from "astro:content";
import BaseLayout from "../layouts/BaseLayout.astro";
import BlogPost from "../components/BlogPost.astro";

const pageTitle = "Mi Blog de Aprendizaje de Astro";
const allPosts = await getCollection("blog");
---
<BaseLayout pageTitle={pageTitle}>
	<p>Aquí es donde publicaré sobre mi viaje aprendiendo Astro.</p>
	<ul>
		{
			allPosts.map((post) => (
					<BlogPost url={post.url} title={post.frontmatter.title} />))}
					<BlogPost url={`/posts/${post.id}/`} title={post.data.title} />
				))
		}
	</ul>
</BaseLayout>
```

----------------------------------------

TITLE: Using Local Images in src/ with Image Component
DESCRIPTION: This code snippet demonstrates how to use the Image component with local images located in the src/ directory. It imports the Image component and the local image using a relative file path, then uses the imported name as the src value in the Image component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImportedImage from '../assets/my-local-image.png';
---
<Image src={myImportedImage} alt="descriptive text" />
```

----------------------------------------

TITLE: Ghost 게시물 데이터를 사용하여 Astro 페이지 템플릿 생성
DESCRIPTION: 이 Astro 구성 요소는 Ghost CMS에서 가져온 개별 게시물 데이터를 사용하여 HTML 페이지를 렌더링합니다. `Astro.props`를 통해 전달된 `post` 객체의 속성(예: `title`, `feature_image`, `reading_time`, `html`)을 사용하여 페이지의 제목, 이미지, 읽기 시간 및 본문 콘텐츠를 표시합니다. `<Fragment set:html={post.html} />`는 Ghost에서 제공하는 원시 HTML을 안전하게 삽입하여 불필요한 래퍼 요소를 방지합니다.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/cms/ghost.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
---
import { ghostClient } from '../../lib/ghost';
export async function getStaticPaths() {
    const posts = await ghostClient.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => {
            console.error(err);
        });
    return posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
            props: {
                post: post,
            },
        };
    });
}
const { post } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{post.title}</title>
    </head>
    <body>
        <img src={post.feature_image} alt={post.title} />

        <h1>{post.title}</h1>
        <p>{post.reading_time} min read</p>

        <Fragment set:html={post.html} />
    </body>
</html>
```

----------------------------------------

TITLE: Composant Image - Sortie HTML
DESCRIPTION: Exemple de la sortie HTML générée par le composant Image. L'image est optimisée et les attributs width, height, decoding, loading et alt sont appliqués.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_2

LANGUAGE: html
CODE:
```
<!-- Sortie -->
<!-- L'image est optimisée, les attributs appropriés sont appliqués -->
<img
  src="/_astro/mon_image.hash.webp"
  width="1600"
  height="900"
  decoding="async"
  loading="lazy"
  alt="Une description de mon image."
/>
```

----------------------------------------

TITLE: Accessing All Markdown Posts in Astro
DESCRIPTION: This snippet demonstrates how to use `import.meta.glob()` with `eager: true` to import all Markdown files from the `./posts/` directory. It returns an array of objects, each representing a blog post, allowing access to their frontmatter and URLs for dynamic rendering on the blog page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/1.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../layouts/BaseLayout.astro'
const allPosts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
const pageTitle = "My Astro Learning Blog";
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    <li><a href="/posts/post-1/">Post 1</a></li>
    <li><a href="/posts/post-2/">Post 2</a></li>
    <li><a href="/posts/post-3/">Post 3</a></li>
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Composant Image avec image distante
DESCRIPTION: Utilisation du composant Image avec une image distante. L'URL complète de l'image est utilisée comme valeur de la propriété `src`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
---
<Image
    src="https://example.com/remote-image.jpg"
    alt="texte descriptif"
    width="200"
    height="150"
  />
```

----------------------------------------

TITLE: Fetching Catalogue Paths with Crystallize GraphQL API in Astro
DESCRIPTION: This Astro component demonstrates how to fetch catalogue paths from Crystallize using its GraphQL API. It initializes the Crystallize API client, defines a GraphQL query to retrieve catalogue details, and then renders the fetched data to create a navigation list. The `tenantIdentifier` is a required prerequisite for client initialization.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/crystallize.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
--- 
// Fetch your catalogue paths from Crystallize GraphQL API

import BaseLayout from '../../layouts/BaseLayout.astro';
import { createClient } from '@crystallize/js-api-client';

const apiClient = createClient({
  tenantIdentifier: 'furniture'
});

const query = `
  query getCataloguePaths{
    catalogue(language: "en", path: "/shop") {
      name
      children {
        name
        path
      }
    }
  }
`
const { data: { catalogue } } = await apiClient.catalogueApi(query)
---
<BaseLayout>
  <h1>{catalogue.name}</h1>
  <nav>
    <ul>
      {catalogue.children.map(child => (
        <li><a href={child.path}>{child.name}</a></li>
      ))}
    </ul>
  </nav>
</BaseLayout>
```

----------------------------------------

TITLE: Composant Image avec image locale
DESCRIPTION: Utilisation du composant Image avec une image locale importée. L'image est importée via un chemin relatif, puis utilisée comme valeur de la propriété `src` du composant Image.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImportedImage from '../assets/my-local-image.png';
---
<Image src={myImportedImage} alt="texte descriptif" />
```

----------------------------------------

TITLE: Importing Astro Components
DESCRIPTION: This snippet illustrates how to import local Astro components, `FluidGrid.astro` and `ShowcaseCard.astro`, into a parent Astro file. These imports make the `Grid` and `Card` components available for use within the current page's template, facilitating modular design and content display.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/sanity.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
import Grid from '~/components/FluidGrid.astro'
import Card from '~/components/ShowcaseCard.astro'
```

----------------------------------------

TITLE: Using Images in Astro Files
DESCRIPTION: This snippet demonstrates how to import and use local images, as well as reference images from the `public/` folder and remote URLs within an Astro component. It showcases both Astro's optimized `<Image />` component and the standard HTML `<img>` tag, illustrating the difference in processing for each method. The `<Image />` component automatically optimizes images, while `<img>` tags display them as-is.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
---
import { Image } from 'astro:assets';
import localBirdImage from '../../images/subfolder/localBirdImage.png';
---
<Image src={localBirdImage} alt="A bird sitting on a nest of eggs." />
<Image src="/images/bird-in-public-folder.jpg" alt="A bird." width="50" height="50" />
<Image src="https://example.com/remote-bird.jpg" alt="A bird." width="50" height="50" />

<img src={localBirdImage.src} alt="A bird sitting on a nest of eggs.">
<img src="/images/bird-in-public-folder.jpg" alt="A bird.">
<img src="https://example.com/remote-bird.jpg" alt="A bird.">
```

----------------------------------------

TITLE: Importing Markdown Files Eagerly with import.meta.glob() in Astro
DESCRIPTION: This Astro component demonstrates how to use `import.meta.glob()` with `{ eager: true }` to import all Markdown files from a specified path. It then iterates over the imported posts, extracts their frontmatter and URL, and renders them as a list of articles. This is useful for building blog post listings or similar content aggregations.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_11

LANGUAGE: astro
CODE:
```
---
// imports all files that end with `.md` in `./src/pages/post/`
const matches = import.meta.glob('../pages/post/*.md', { eager: true }); 
const posts = Object.values(matches);
---
<!-- Renders an <article> for the first 5 blog posts -->
<div>
{posts.slice(0, 4).map((post) => (
  <article>
    <h2>{post.frontmatter.title}</h2>
    <p>{post.frontmatter.description}</p>
    <a href={post.url}>Read more</a>
  </article>
))}
</div>
```

----------------------------------------

TITLE: Implementing Recursive Components with Astro.self
DESCRIPTION: This `NestedList.astro` component illustrates the use of `Astro.self` for recursive rendering. It iterates over an `items` prop and, if an item is an array, recursively calls `<Astro.self>` to render a nested list, enabling the handling of deeply nested data structures.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/astro-syntax.mdx#_snippet_16

LANGUAGE: astro
CODE:
```
---
// NestedList.astro
const { items } = Astro.props;
---
<ul class="nested-list">
  {items.map((item) => (
    <li>
      <!-- If there is a nested data-structure we render `<Astro.self>` -->
      <!-- and can pass props through with the recursive call -->
      {Array.isArray(item) ? (
        <Astro.self items={item} />
      ) : (
        item
      )}
    </li>
  ))}
</ul>
```

----------------------------------------

TITLE: Usando TypeScript con plantillas de Astro
DESCRIPTION: Este ejemplo muestra cómo usar TypeScript para definir los tipos de las props de una plantilla de Astro. Esto proporciona seguridad de tipos y autocompletado en el IDE.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/basics/layouts.mdx#_snippet_2

LANGUAGE: astro
CODE:
```
---
interface Props { 
  title: string;
  description: string;
  publishDate: string;
  viewCount: number;
}

const { title, description, publishDate, viewCount } = Astro.props;
 ---
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content={description}>
    <title>{title}</title>
  </head>
  <body>
    <header>
      <p>Publicado el {publishDate}</p>
      <p>Visto por {viewCount} amigos</p>
    </header>
    <main>
      <slot />
    </main>
  </body>
</html>
```

----------------------------------------

TITLE: Querying Local Markdown Posts in Astro
DESCRIPTION: This snippet demonstrates how to use `import.meta.glob` with `eager: true` to efficiently query and import all markdown files from a local `posts` directory within an Astro component or page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/1.mdx#_snippet_9

LANGUAGE: Astro
CODE:
```
---
const myPosts = Object.values(import.meta.glob('./posts/*.md', { eager:  true }));
---
```

----------------------------------------

TITLE: Using `class:list` for Dynamic Class Generation (Astro)
DESCRIPTION: Demonstrates how `class:list` combines an array of strings, objects, and nested arrays into a single `class` attribute string. It shows the input Astro syntax and the resulting HTML output, illustrating its utility for dynamic CSS class management.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/directives-reference.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
<!-- This -->
<span class:list={[ 'hello goodbye', { world: true }, [ 'friend' ] ]} />
<!-- Becomes -->
<span class="hello goodbye world friend"></span>
```

----------------------------------------

TITLE: Generic Form Submission Handler and JSX Structure
DESCRIPTION: This snippet illustrates a common pattern for handling form submissions in a JavaScript/TypeScript environment with JSX. It defines an asynchronous function to prevent default submission, collect form data, send it to a backend API, and process the JSON response. The accompanying JSX outlines a basic feedback form structure.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/recipes/build-forms-api.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
async function submit(e: SubmitEvent) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const response = await fetch("/api/feedback", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  if (data.message) {
    setResponseMessage(data.message);
  }
}

return (
  <form onSubmit={submit}>
    <label>
      Name
      <input type="text" id="name" name="name" required />
    </label>
    <label>
      Email
      <input type="email" id="email" name="email" required />
    </label>
    <label>
      Message
      <textarea id="message" name="message" required />
    </label>
    <button>Send</button>
    {responseMessage && <p>{responseMessage}</p>}
  </form>
);
```

----------------------------------------

TITLE: Using Local Images from src/ with Image Component
DESCRIPTION: This code snippet demonstrates how to use the Image component with local images stored in the src/ directory. It imports the Image component and the local image, then passes the imported image as the src prop to the Image component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-assets.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImportedImage from '../assets/my-local-image.png';
---
<Image src={myImportedImage} alt="descriptive text" />
```

----------------------------------------

TITLE: Using Images in public/ Folder with Image Component
DESCRIPTION: This code snippet demonstrates how to use the Image component with images located in the public/ folder. It specifies the image's file path relative to the public folder as the src value.  Note that width and height are required for images in the public folder.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
---
<Image
    src="/images/my-public-image.png"
    alt="descriptive text"
    width="200"
    height="150"
  />
```

----------------------------------------

TITLE: Svelte Feedback Form Component
DESCRIPTION: This Svelte component defines a feedback form. It uses a reactive `responseMessage` variable to store the API response. The `submit` function prevents default form submission, collects form data, sends it to `/api/feedback`, and updates `responseMessage` with the API's message. The component renders a form with an `on:submit` event handler.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/recipes/build-forms-api.mdx#_snippet_3

LANGUAGE: svelte
CODE:
```
<script lang="ts">
  let responseMessage: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
  }
</script>

<form on:submit={submit}>
  <label>
    Name
    <input type="text" id="name" name="name" required />
```

----------------------------------------

TITLE: Importing All Markdown Posts in Astro
DESCRIPTION: This code demonstrates how to use Astro's `import.meta.glob` feature with `eager: true` to import all Markdown files from a specified directory (`../posts/*.md`). The `Object.values()` method is used to get an array of the imported modules, making their frontmatter data accessible for further processing.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/3.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
const pageTitle = "Tag Index";
---

```

----------------------------------------

TITLE: Defining Local Font Variants in Astro Configuration
DESCRIPTION: This comprehensive snippet demonstrates how to configure local fonts within `astro.config.mjs` using the `experimental.fonts` array. It defines a 'local' provider with a custom font name, CSS variable, and an array of `variants`, each specifying `weight`, `style`, and `src` for different font files, essential for `@font-face` declarations.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_32

LANGUAGE: JavaScript
CODE:
```
import { defineConfig } from "astro/config";

export default defineConfig({
    experimental: {
        fonts: [{
            provider: "local",
            name: "Custom",
            cssVariable: "--font-custom",
            variants: [
                {
                    weight: 400,
                    style: "normal",
                    src: ["./src/assets/fonts/custom-400.woff2"]
                },
                {
                    weight: 700,
                    style: "normal",
                    src: ["./src/assets/fonts/custom-700.woff2"]
                }
                // ...
            ]
        }]
    }
});
```

----------------------------------------

TITLE: Registering Webhook for Content Refresh in Astro Integration (TypeScript)
DESCRIPTION: This snippet demonstrates how an Astro integration can register a webhook endpoint (`/_refresh`) during `astro dev` using the `astro:server:setup` hook. It parses the incoming POST request body as JSON and uses `refreshContent()` to update specific content collections, passing the webhook body as context. This allows external systems to trigger content updates.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/integrations-reference.mdx#_snippet_28

LANGUAGE: ts
CODE:
```
{
  name: 'my-integration',
  hooks: {
    'astro:server:setup': async ({ server, refreshContent }) => {
      // Register a dev server webhook endpoint
      server.middlewares.use('/_refresh', async (req, res) => {
        if(req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method Not Allowed');
          return
        }
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const webhookBody = JSON.parse(body);
            await refreshContent({
              context: { webhookBody },
              loaders: ['my-loader']
            });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Content refreshed successfully' }));
          } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to refresh content: ' + error.message }));
          }
        });
      });
    }
  }
}
```

----------------------------------------

TITLE: Fetching Blog Posts for Static Paths in Astro
DESCRIPTION: This snippet, part of an Astro `[slug].astro` file, defines the `getStaticPaths` function. It fetches all blog posts from Kontent.ai to prepare for static site generation, which will later be used to generate individual pages for each post.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_19

LANGUAGE: Astro
CODE:
```
---
import { deliveryClient } from '../../lib/kontent';
import type { BlogPost } from '../../models';
import { contentTypes } from '../../models/project/contentTypes';

export async function getStaticPaths() {
    const blogPosts = await deliveryClient
        .items<BlogPost>()
        .type(contentTypes.blog_post.codename)
        .toPromise()
---
```

----------------------------------------

TITLE: MDX Image Handling
DESCRIPTION: Demonstrates how to use Astro's `<Image />` component, HTML `<img>` tag, and Markdown syntax to display images in MDX files. It covers local images in the same folder and in `src/assets/`, images in `public/images/`, and remote images.  The `rocket` import is a local image from the assets folder.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/images.mdx#_snippet_13

LANGUAGE: mdx
CODE:
```
---
title: 我的页面标题
---
import { Image } from 'astro:assets';
import rocket from '../assets/rocket.png';

# 我的 MDX 页面

// 存储在同一文件夹中的本地图像
![太空中的火箭飞船](houston.png)

// 存储在 src/assets/ 中的本地图像
<Image src={rocket} alt="太空中的火箭飞船" />
<img src={rocket.src} alt="太空中的火箭飞船" />
![太空中的火箭飞船](../assets/rocket.png)

// 存储在 public/images/ 中的图像
<Image src="/images/stars.png" alt="繁星点点的夜空" />
<img src="/images/stars.png" alt="繁星点点的夜空" />
![繁星点点的夜空](/images/stars.png)

// 其他服务上的远程图像
<Image src="https://example.com/images/remote-image.png" />
<img src="https://example.com/images/remote-image.png" />
![Astro](https://example.com/images/remote-image.png)

```

----------------------------------------

TITLE: Implementing Feedback Form in Preact (TSX)
DESCRIPTION: This Preact component creates a feedback form. It uses the `useState` hook to manage the `responseMessage` state, which displays feedback after submission. The `submit` function prevents default form submission, collects form data using `FormData`, and sends it via a `POST` request to the `/api/feedback` endpoint, then updates the UI with the API response.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/build-forms-api.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { useState } from "preact/hooks";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input type="text" id="name" name="name" required />
      </label>
      <label>
        Email
        <input type="email" id="email" name="email" required />
      </label>
      <label>
        Message
        <textarea id="message" name="message" required />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
```

----------------------------------------

TITLE: Specifying Font Weights
DESCRIPTION: This snippet demonstrates how to specify an array of font weights to be included. By default, only 400 is included, so this property is necessary to access any other font weights.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_23

LANGUAGE: JavaScript
CODE:
```
weights: [200, "400", "bold"]
```

----------------------------------------

TITLE: Importing and Using Image and Picture Components in Astro
DESCRIPTION: This code snippet demonstrates how to import the Image and Picture components from astro:assets and use them to display responsive images with specified layouts, widths, heights, and formats.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/experimental-flags/responsive-images.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
import { Image, Picture } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} alt="A description of my image." layout='constrained' width={800} height={600} />
<Picture src={myImage} alt="A description of my image." layout='full-width' formats={['avif', 'webp', 'jpeg']} />
```

----------------------------------------

TITLE: Accessing and Updating MetaStore in Astro Loader (TypeScript)
DESCRIPTION: The `meta` object provides a key-value store for collection-scoped metadata, which persists between builds and is accessible only within the loader. This snippet demonstrates how to retrieve a value using `meta.get()` and update it using `meta.set()`, typically for tracking sync tokens or last-modified times.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/content-loader-reference.mdx#_snippet_5

LANGUAGE: TypeScript
CODE:
```
const lastModified = meta.get("lastModified");
// ...
meta.set("lastModified", new Date().toISOString());
```

----------------------------------------

TITLE: Ghost API를 사용하여 Astro에서 정적 경로 생성
DESCRIPTION: 이 Astro 스크립트는 Ghost CMS에서 모든 게시물을 가져와 각 게시물에 대한 정적 경로를 동적으로 생성합니다. `getStaticPaths` 함수는 `ghostClient.posts.browse()`를 사용하여 게시물 데이터를 검색하고, 각 게시물의 slug를 기반으로 페이지 매개변수를 설정합니다. 이는 블로그 게시물과 같은 동적 콘텐츠에 대한 개별 페이지를 미리 렌더링하는 데 사용됩니다.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/cms/ghost.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
import { ghostClient } from '../../lib/ghost';

export async function getStaticPaths() {
    const posts = await ghostClient.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => {
            console.error(err);
        });

    return posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
            props: {
                post: post,
            },
        };
    });
}

const { post } = Astro.props;
```

----------------------------------------

TITLE: Creating a Reusable Astro Image Component
DESCRIPTION: Provides an example of creating a wrapper Astro component (`BlogPostImage.astro`) for the `<Image />` component. This allows for consistent styling and attribute application across multiple images, promoting reusability.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_11

LANGUAGE: astro
CODE:
```
--- 
import { Image } from 'astro:assets';

const { src, ...attrs } = Astro.props;
---
<Image src={src} {...attrs} />

<style>
  img {
    margin-block: 2.5rem;
    border-radius: 0.75rem;
  }
</style>
```

----------------------------------------

TITLE: Importing Dependencies for Astro Actions
DESCRIPTION: This code block demonstrates the necessary imports for defining Astro actions. It includes `defineAction` from `astro:actions` for creating actions and `z` from `astro:schema` for robust Zod-based input validation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/actions.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  // action declarations
}
```

----------------------------------------

TITLE: Usando la plantilla en una página de Astro
DESCRIPTION: Este ejemplo muestra cómo usar la plantilla `MySiteLayout` en una página de Astro. La página importa la plantilla y pasa el título como una prop. El contenido de la página se inserta en el slot de la plantilla.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/basics/layouts.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
---
import MySiteLayout from '../layouts/MySiteLayout.astro';
---
<MySiteLayout title="Página De Inicio">
  <p>¡El contenido de mi página, envuelto en una plantilla!</p>
</MySiteLayout>
```

----------------------------------------

TITLE: Dynamically Importing Assets with ESM in Astro
DESCRIPTION: This snippet illustrates a dynamic ESM import for assets in Astro. While less common, it provides an alternative syntax for resolving asset URLs at runtime, suitable for specific use cases where static imports are not feasible.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v1.mdx#_snippet_19

LANGUAGE: Astro
CODE:
```
<img src={(await import('./penguin.png')).default} />
```

----------------------------------------

TITLE: Using Astro Image Component and Standard HTML `<img>`
DESCRIPTION: This Astro snippet illustrates two ways to handle images in Astro: using the optimized `Image` component from `astro:assets` and a standard HTML `<img>` tag. It shows importing an image asset and then rendering it with both Astro's component (for `.astro` and `.mdx` files) and the basic `<img>` tag, noting that the latter requires accessing the `src` property of the imported asset.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-gatsby.mdx#_snippet_11

LANGUAGE: Astro
CODE:
```
---
import { Image } from 'astro:assets';
import rocket from '../assets/rocket.png';
---
<Image src={rocket} alt="A rocketship in space." />
<img src={rocket.src} alt="A rocketship in space.">
```

----------------------------------------

TITLE: Fetching Blog Posts from Kontent.ai in Astro
DESCRIPTION: Shows how to fetch content, specifically blog posts, from Kontent.ai within an Astro component. It imports the `deliveryClient`, queries items of type "blogPost", and then maps over the fetched data to display blog post titles in an unordered list.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_6

LANGUAGE: astro
CODE:
```
import { deliveryClient } from "../lib/kontent";

const blogPosts = await deliveryClient
    .items()
    .type("blogPost")
    .toPromise()
---
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>Astro</title>
	</head>
	<body>
        <ul>
        {blogPosts.data.items.map(blogPost => (
            <li>{blogPost.elements.title.value}</li>
        ))}
        </ul>
    </body>
</html>
```

----------------------------------------

TITLE: Importing Image Components and Functions from astro:assets
DESCRIPTION: This code snippet demonstrates how to import the Image and Picture components, as well as the getImage and inferRemoteSize functions, from the astro:assets module. These imports are necessary to use Astro's built-in image optimization and display features.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  Image,
  Picture,
  getImage,
  inferRemoteSize,
 } from 'astro:assets';
```

----------------------------------------

TITLE: Specifying Font Weight Range for Variable Fonts
DESCRIPTION: This snippet shows how to define a range of font weights for variable fonts. This allows for flexible weight selection within the specified range.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_24

LANGUAGE: JavaScript
CODE:
```
weights: ["100 900"]
```

----------------------------------------

TITLE: Importing and Using SVG as an Astro Component
DESCRIPTION: Explains how to import a local SVG file and use it directly as an Astro component, which results in the SVG content being inlined into the final HTML output.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_14

LANGUAGE: astro
CODE:
```
--- 
import Logo from './path/to/svg/file.svg';
---

<Logo />
```

----------------------------------------

TITLE: Specifying Font Source with Relative Paths in Astro
DESCRIPTION: This snippet shows how to define font `src` using an array of relative paths to font files. Astro will copy these files to the build output, and this method is recommended for local font assets.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_36

LANGUAGE: JavaScript
CODE:
```
src: ["./src/assets/fonts/MyFont.woff2", "./src/assets/fonts/MyFont.woff"]
```

----------------------------------------

TITLE: Using a Recursive Astro Component (Astro.self)
DESCRIPTION: This snippet demonstrates how to use the `NestedList` component, which internally uses `Astro.self` for recursion. It passes a nested array of `items` to `NestedList`, showcasing how the component can render complex, hierarchical data structures into a nested HTML list.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/astro-syntax.mdx#_snippet_17

LANGUAGE: astro
CODE:
```
---
import NestedList from './NestedList.astro';
---
<NestedList items={['A', ['B', 'C'], 'D']} />
```

----------------------------------------

TITLE: Loading Custom Data Files with Astro.glob()
DESCRIPTION: This code snippet demonstrates how to use TypeScript generics with Astro.glob() to specify the type of custom data files. This allows you to define the structure of the data and access it in a type-safe manner.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/api-reference.mdx#_snippet_45

LANGUAGE: typescript
CODE:
```
---
interface CustomDataFile {
  default: Record<string, any>;
}
const data = await Astro.glob<CustomDataFile>('../data/**/*.js');
---

```

----------------------------------------

TITLE: Displaying Cosmic Posts in Astro Component
DESCRIPTION: This Astro component demonstrates how to import and use the `getAllPosts` function to fetch blog post data from Cosmic. It then iterates over the fetched data to dynamically render a list of posts, passing relevant post properties as props to a reusable `<Card />` component for display.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/cosmic.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
// src/pages/index.astro
import Card from '../components/Card.astro'
import { getAllPosts } from '../lib/cosmic'

const data = await getAllPosts()
---

<section>
  <ul class="grid gap-8 md:grid-cols-2">
    {
      data.map((post) => (
        <Card
          title={post.title}
          href={post.slug}
          body={post.metadata.excerpt}
          tags={post.metadata.tags.map((tag) => tag)}
        />
      ))
    }
  </ul>
</section>
```

----------------------------------------

TITLE: Importing and Displaying Images in Astro
DESCRIPTION: This code snippet demonstrates how to import and display local, public, and remote images in an Astro component using the `<Image />` component and standard `<img>` tags. It showcases the different ways to reference images based on their location and how Astro handles them.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_0

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import localBirdImage from '../../images/subfolder/localBirdImage.png';
---
<Image src={localBirdImage} alt="Un oiseau assis sur un nid d'œufs." />
<Image src="/images/bird-in-public-folder.jpg" alt="Un oiseau." width="50" height="50" />
<Image src="https://example.com/remote-bird.jpg" alt="Un oiseau." width="50" height="50" />

<img src={localBirdImage.src} alt="Un oiseau assis sur un nid d'œufs.">
<img src="/images/bird-in-public-folder.jpg" alt="Un oiseau.">
<img src="https://example.com/remote-bird.jpg" alt="Un oiseau.">

```

----------------------------------------

TITLE: Loading Markdown Posts with Astro.glob()
DESCRIPTION: This code snippet demonstrates how to use Astro.glob() to load Markdown files from a specified directory. It retrieves an array of posts and renders their titles, descriptions, and links in a component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/api-reference.mdx#_snippet_41

LANGUAGE: astro
CODE:
```
--- 
// src/components/my-component.astro
const posts = await Astro.glob('../pages/post/*.md'); // 返回位于 ./src/pages/post/*.md 中的文章数组。
---

<div>
{posts.slice(0, 3).map((post) => (
  <article>
    <h2>{post.frontmatter.title}</h2>
    <p>{post.frontmatter.description}</p>
    <a href={post.url}>Read more</a>
  </article>
))}
</div>
```

----------------------------------------

TITLE: Configuring Font Fallbacks
DESCRIPTION: This snippet demonstrates how to define an array of fallback fonts. These fonts are used in the specified order if the primary font is unavailable or still loading, ensuring a graceful degradation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_20

LANGUAGE: JavaScript
CODE:
```
fallbacks: ["CustomFont", "serif"]
```

----------------------------------------

TITLE: Using Astro Picture Component with Formats
DESCRIPTION: This example demonstrates how to use the `<Picture />` component in Astro to display a responsive image with multiple formats. The `formats` property is used to specify the image formats to use for the `<source>` tags.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_11

LANGUAGE: Astro
CODE:
```
---
import { Picture } from 'astro:assets';
import myImage from "../assets/my_image.png"; // Image is 1600x900
---

<!-- `alt` is mandatory on the Picture component -->
<Picture src={myImage} formats={['avif', 'webp']} alt="A description of my image." />
```

----------------------------------------

TITLE: Using Public Images with Image Component
DESCRIPTION: This code snippet demonstrates how to use the Image component with images stored in the public/ directory.  It uses the file path relative to the public directory as the src prop.  Width and height are required for images in the public directory.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-assets.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
---
<Image 
  src="/images/my-public-image.png"
  alt="descriptive text"
  width="200"
  height="150" 
/>
```

----------------------------------------

TITLE: Loading Custom Data Files with Astro.glob() in Astro
DESCRIPTION: This Astro component demonstrates how to use a TypeScript generic with `Astro.glob()` to define the expected structure of data returned from custom or unrecognized file types, such as JavaScript data files. This allows for type-safe access to the `default` export of these files.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/api-reference.mdx#_snippet_41

LANGUAGE: typescript
CODE:
```
---\ninterface CustomDataFile {\n  default: Record<string, any>;\n}\nconst data = await Astro.glob<CustomDataFile>('../data/**/*.js');\n---\n
```

----------------------------------------

TITLE: Rendering Cover Image and Title in Blog Index Page
DESCRIPTION: This code snippet shows how to render the cover image and title of each blog post in a blog index page. It imports the Image component and the getCollection function, retrieves all blog posts, and then maps over them to display the cover image and title.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_21

LANGUAGE: astro
CODE:
```
---
import { Image } from "astro:assets";
import { getCollection } from "astro:content";
const allBlogPosts = await getCollection("blog");
---

{
	allBlogPosts.map((post) => (
		<div>
			<Image src={post.data.cover} alt={post.data.coverAlt} />
			<h2>
				<a href={"/blog/" + post.slug}>{post.data.title}</a>
			</h2>
		</div>
	))
}

```

----------------------------------------

TITLE: Globbing Image Assets in Astro
DESCRIPTION: This snippet introduces the `import.meta.glob` function to dynamically import all image files from the `src/assets` directory. It also imports `ImageMetadata` from `astro` to type the `images` variable, ensuring type safety when working with the globbed image data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/dynamically-importing-images.mdx#_snippet_2

LANGUAGE: Astro
CODE:
```
---
import type { ImageMetadata } from 'astro';
import { Image } from 'astro:assets';

interface Props {
   imagePath: string;
   altText: string;
   name: string;
   age: number;
}
    
const { imagePath, altText, name, age } = Astro.props;
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif}')
---
```

----------------------------------------

TITLE: Rendering Local Image in Svelte Component
DESCRIPTION: This Svelte component imports a local image asset within its script block. It then renders a standard HTML `<img>` tag, utilizing the `src` property of the imported image object to display the image. This is the method for rendering images directly within Svelte components when not using Astro's `<Image />` component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_23

LANGUAGE: svelte
CODE:
```
<script>
  import stars from '../assets/stars.png';
</script>

<img src={stars.src} alt="A starry night sky." />
```

----------------------------------------

TITLE: Displaying Cart Items Flyout - Solid
DESCRIPTION: This Solid component implements a cart flyout. It uses `useStore` from `@nanostores/solid` to get reactive access to `isCartOpen` and `cartItems`. The component conditionally renders the flyout, mapping over cart items to display their image, name, and quantity, or indicating an empty cart.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_18

LANGUAGE: JSX
CODE:
```
// src/components/CartFlyout.jsx
import { useStore } from '@nanostores/solid';
import { isCartOpen, cartItems } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  return $isCartOpen() ? (
    <aside>
      {Object.values($cartItems()).length ? (
        <ul>
          {Object.values($cartItems()).map(cartItem => (
            <li>
              <img src={cartItem.imageSrc} alt={cartItem.name} />
              <h3>{cartItem.name}</h3>
              <p>Quantity: {cartItem.quantity}</p>
            </li>
          ))}
        </ul>
      ) : <p>Your cart is empty!</p>}
    </aside>
  ) : null;
}
```

----------------------------------------

TITLE: Nesting BaseLayout in MarkdownPostLayout (Initial)
DESCRIPTION: This snippet demonstrates how to import `BaseLayout.astro` into `src/layouts/MarkdownPostLayout.astro` and wrap the existing content with `BaseLayout`. It also shows passing the `frontmatter.title` as `pageTitle` to the `BaseLayout` to ensure the main page title is rendered.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/4-layouts/3.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from './BaseLayout.astro';
const { frontmatter } = Astro.props;
---
<BaseLayout pageTitle={frontmatter.title}>
  <meta charset="utf-8" />
  <h1>{frontmatter.title}</h1>
  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>
  <p><em>{frontmatter.description}</em></p>
  <p>Written by: {frontmatter.author}</p>
  <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />
  <slot />
</BaseLayout>
```

----------------------------------------

TITLE: Loading Markdown Posts with Astro.glob() in Astro
DESCRIPTION: This Astro component demonstrates how to use `Astro.glob()` to asynchronously fetch and render a list of Markdown posts from a specified directory. It iterates through the returned array of post objects, accessing their `frontmatter` properties and `url` to display titles, descriptions, and links.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/api-reference.mdx#_snippet_37

LANGUAGE: astro
CODE:
```
---\n// src/components/my-component.astro\nconst posts = await Astro.glob('../pages/post/*.md'); // returns an array of posts that live at ./src/pages/post/*.md\n---\n\n<div>\n{posts.slice(0, 3).map((post) => (\n  <article>\n    <h2>{post.frontmatter.title}</h2>\n    <p>{post.frontmatter.description}</p>\n    <a href={post.url}>Read more</a>\n  </article>\n))}\n</div>
```

----------------------------------------

TITLE: Installing Nano Stores with Solid
DESCRIPTION: Installs the Nano Stores core library and its helper package tailored for Solid.js, enabling efficient and reactive state management within Solid applications.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
npm install nanostores @nanostores/solid
```

----------------------------------------

TITLE: Importing and Rendering Markdown in Astro Components
DESCRIPTION: This Astro component illustrates how to import a single Markdown file and multiple Markdown files using `import.meta.glob()`. It then demonstrates accessing and rendering frontmatter properties (e.g., `greatPost.frontmatter.title`) and dynamically generating a list of posts with links from the imported Markdown data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/markdown-content.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
---
import * as greatPost from './posts/great-post.md';
const posts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
---

<p>{greatPost.frontmatter.title}</p>
<p>Written by: {greatPost.frontmatter.author}</p>

<p>Post Archive:</p>
<ul>
  {posts.map(post => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
</ul>
```

----------------------------------------

TITLE: Fetching and Dynamically Rendering DatoCMS Modular Content (Astro)
DESCRIPTION: This Astro page fetches homepage data from DatoCMS using a GraphQL query, including modular content blocks like 'ImageRecord' and 'TextRecord'. It then dynamically renders the appropriate Astro component (`<Image />` or `<Text />`) based on the `_modelApiKey` of each content item using a switch statement. This enables flexible content layouts driven by DatoCMS.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/datocms.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
---
import Image from '../components/Image.astro';
import Text from '../components/Text.astro';

const response = await fetch('https://graphql.datocms.com/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
	},
	body: JSON.stringify({
		query: `query Homepage {
          home {
            title
            content {
              ... on ImageRecord {
                _modelApiKey
               image{
                url
               }
              }
              ... on TextRecord {
                _modelApiKey
                text(markdown: true)
              }
            }
          }
        }
      `,
	}),
});

const json = await response.json();
const data = json.data.home;
---

<h1>{data.title}</h1>
{
  data.content.map((item: any) => {
    switch (item._modelApiKey) {
      case 'image':
        return <Image item={item} />;
      case 'text':
        return <Text item={item} />;
      default:
        return null;
    }
  })
}
```

----------------------------------------

TITLE: Using Markdown Image Syntax
DESCRIPTION: Demonstrates how to use standard Markdown syntax for images in Markdown files within an Astro project. It shows how to reference a local image using the `![]()` syntax.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/migrate-to-astro/from-gatsby.mdx#_snippet_12

LANGUAGE: md
CODE:
```
<!-- src/pages/post-1.md -->

# Markdown ページ

<!-- src/assets/stars.png をローカル画像として保存 -->
![A starry night sky.](../assets/stars.png)
```

----------------------------------------

TITLE: Displaying Typed Blog Posts List in Astro
DESCRIPTION: This comprehensive Astro snippet fetches blog posts from Kontent.ai and then renders them as an unordered list in the HTML section of the page. It iterates through the fetched `blogPosts.data.items` using `map()` to create links to individual blog post pages.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_18

LANGUAGE: Astro
CODE:
```
---
import { deliveryClient } from '../lib/kontent';
import type { BlogPost } from '../models';
import { contentTypes } from '../models/project/contentTypes';

const blogPosts = await deliveryClient
    .items<BlogPost>
    .type(contentTypes.blogPost.codename)
    .toPromise()
---
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Astro</title>
    </head>
    <body>
        <h1>Blog posts</h1>
        <ul>
            {blogPosts.data.items.map(blogPost => (
                <li>
                    <a href={`/blog/${blogPost.elements.url_slug.value}/`} title={blogPost.elements.title.value}>
                        {blogPost.elements.title.value}
                    </a>
                </li>
            ))}
        </ul>
    </body>
</html>
```

----------------------------------------

TITLE: Configuring Font Styles
DESCRIPTION: This snippet demonstrates how to specify an array of font styles to be included. It allows for selecting 'normal', 'italic', or 'oblique' styles for the font.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_25

LANGUAGE: JavaScript
CODE:
```
styles: ["normal", "oblique"]
```

----------------------------------------

TITLE: Accessing Session in Astro Components
DESCRIPTION: This Astro component demonstrates how to access and use the `Astro.session` object within `.astro` files to retrieve session-stored data, such as a shopping cart. It fetches the 'cart' array and displays the number of items, highlighting the direct access to session data in Astro components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/sessions.mdx#_snippet_2

LANGUAGE: Astro
CODE:
```
---
export const prerender = false; // Not needed with 'server' output
const cart = await Astro.session?.get('cart');
---

<a href="/checkout">🛒 {cart?.length ?? 0} items</a>
```

----------------------------------------

TITLE: Displaying Public Folder Images with HTML `<img>` in Astro
DESCRIPTION: Illustrates how to display images located in the `public/` directory by setting the `src` attribute of an HTML `<img>` tag to the image's file path relative to the public folder.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_9

LANGUAGE: astro
CODE:
```
<img src="/images/public-cat.jpg" alt="A sleeping cat." >
```

----------------------------------------

TITLE: HTML Output of Astro Image with Widths
DESCRIPTION: This is the HTML output generated by the Astro Image component when using the `widths` and `sizes` properties. It shows the `srcset` and `sizes` attributes on the `<img>` tag, which are used for responsive images.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_9

LANGUAGE: HTML
CODE:
```
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 240w,
    /_astro/my_image.hash.webp 540w,
    /_astro/my_image.hash.webp 720w,
		/_astro/my_image.hash.webp 1600w
  "
  sizes="
    (max-width: 360px) 240px,
    (max-width: 720px) 540px,
    (max-width: 1600px) 720px,
    1600px
  "
  alt="A description of my image."
  width="1600"
  height="900"
  loading="lazy"
  decoding="async"
/>
```

----------------------------------------

TITLE: Accessing and Updating Loader MetaStore
DESCRIPTION: This snippet illustrates how to use the `meta` property within the `LoaderContext` to store and retrieve collection-scoped key-value metadata. It shows getting a `lastModified` timestamp and then setting it, useful for tracking state between builds or for incremental updates.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/content-loader-reference.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
const lastModified = meta.get("lastModified");
// ...
meta.set("lastModified", new Date().toISOString());
```

----------------------------------------

TITLE: Inserting HTML Content with Fragments and Slots
DESCRIPTION: This example shows how to insert multiple rows and columns of HTML content using fragments with the `slot` attribute. It demonstrates how to apply styles to individual HTML elements within the fragment.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/basics/astro-components.mdx#_snippet_13

LANGUAGE: astro
CODE:
```
---
import CustomTable from './CustomTable.astro';
---
<CustomTable>
  <Fragment slot="header"> <!-- テーブルのヘッダーを渡す -->
    <tr><th>商品名</th><th>在庫</th></tr>
  </Fragment>
  <Fragment slot="body"> <!-- テーブルのボディを渡す -->
    <tr><td>ビーチサンダル</td><td>64</td></tr>
    <tr><td>ブーツ</td><td>32</td></tr>
    <tr><td>スニーカー</td><td class="text-red-500">0</td></tr>
  </Fragment>
</CustomTable>
```

----------------------------------------

TITLE: Dynamic Class Management with class:list in Astro
DESCRIPTION: Demonstrates the use of the `class:list` directive in Astro to dynamically combine class names on an element based on component props. This enables conditional styling and flexible class assignment.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/styling.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
const { isRed } = Astro.props;
---
<!-- 如果 `isRed` 是真值，class 将是 "box red"。 -->
<!-- 如果 `isRed` 是假值，class 将是 "box"。 -->
<div class:list={['box', { red: isRed }]}><slot /></div>

<style>
  .box { border: 1px solid blue; }
  .red { border-color: red; }
</style>
```

----------------------------------------

TITLE: Astro Component for Responsive Image and Picture
DESCRIPTION: This Astro component snippet imports `Image` and `Picture` components from `astro:assets` and demonstrates their usage with responsive layouts. It shows how to set `layout='responsive'` for an `<Image />` and `layout='full-width'` with multiple `formats` for a `<Picture />`, illustrating how these components are used to generate optimized, responsive image outputs.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/responsive-images.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import { Image, Picture } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} alt="A description of my image." layout='responsive' width={800} height={600} />
<Picture src={myImage} alt="A description of my image." layout='full-width' formats={['avif', 'webp', 'jpeg']} />
```

----------------------------------------

TITLE: Rendering Local Image in React Component
DESCRIPTION: This React component imports a local image asset. It then renders a standard HTML `<img>` tag, using the `src` property of the imported image object to display the image. This approach is used when the Astro `<Image />` component is not available directly within the UI framework component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_22

LANGUAGE: jsx
CODE:
```
import stars from "../assets/stars.png";

export default function ReactImage() {
  return (
    <img src={stars.src} alt="A starry night sky." />
  )
}
```

----------------------------------------

TITLE: Installing Nano Stores with Svelte
DESCRIPTION: Installs only the core Nano Stores library for Svelte. Unlike other frameworks, Svelte does not require a specific helper package as Nano Stores are compatible with Svelte's native store API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
npm install nanostores
```

----------------------------------------

TITLE: Importing Starlight UI Components in Astro
DESCRIPTION: This import statement destructures and imports `LinkCard` and `CardGrid` components from the `@astrojs/starlight/components` library. These components are part of the Starlight documentation theme, used for structuring and styling content, such as displaying linked cards in a grid layout.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-wordpress.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
import { LinkCard, CardGrid } from '@astrojs/starlight/components';
```

----------------------------------------

TITLE: Creating robots.txt Static Asset (Diff)
DESCRIPTION: This snippet shows the content for a `robots.txt` file, a static asset placed in the `public/` directory. This file instructs search engine bots on how to crawl and index the website, allowing all bots to scan and index the site in this example.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/install-and-setup.mdx#_snippet_13

LANGUAGE: diff
CODE:
```
# Example: Allow all bots to scan and index your site.
# Full syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
User-agent: *
Allow: /
```

----------------------------------------

TITLE: Local Image Import
DESCRIPTION: This code snippet shows how to import a local image from the src/ directory using a relative file path. The imported image is then used as the src value for the Image component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/modules/astro-assets.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImportedImage from '../assets/my-local-image.png';
---
<Image src={myImportedImage} alt="descriptive text" />
```

----------------------------------------

TITLE: HTML Output with Pixel Densities
DESCRIPTION: This code snippet shows the HTML output generated by the Astro Image component when using the densities property. The srcset attribute is generated with the specified pixel densities.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_7

LANGUAGE: html
CODE:
```
<!-- Output -->
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 1.5x
    /_astro/my_image.hash.webp 2x
  "
  alt="A description of my image."
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>
```

----------------------------------------

TITLE: Using Home Layout and Providing Slot Content in Astro Page
DESCRIPTION: Illustrates how `index.astro` imports `HomeLayout` and provides content for the default slot (`<h1>Astro</h1>`) and the named `head` slot (`<title slot="head">Astro</title>`). This content is then transferred through `HomeLayout` to `BaseLayout`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/astro-components.mdx#_snippet_17

LANGUAGE: Astro
CODE:
```
// src/pages/index.astro
---
import HomeLayout from '../layouts/HomeLayout.astro';
---
<HomeLayout>
	<title slot="head">Astro</title>
	<h1>Astro</h1>
</HomeLayout>
```

----------------------------------------

TITLE: Importing from astro:assets
DESCRIPTION: This code snippet shows how to import the Image and Picture components, as well as the getImage and inferRemoteSize functions, from the astro:assets module. These are used for displaying and optimizing images in Astro projects.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/modules/astro-assets.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  Image,
  Picture,
  getImage,
  inferRemoteSize,
 } from 'astro:assets';
```

----------------------------------------

TITLE: Configuring Public Assets Directory in Astro
DESCRIPTION: This snippet demonstrates how to set the `publicDir` option in Astro's configuration, specifying the directory for static assets that are served as-is.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/configuration-reference.mdx#_snippet_14

LANGUAGE: JavaScript
CODE:
```
{
  publicDir: './my-custom-publicDir-directory'
}
```

----------------------------------------

TITLE: Displaying Local Images with HTML `<img>` in Astro
DESCRIPTION: Demonstrates how to import a local image asset and use its `src`, `width`, and `height` properties directly within an HTML `<img>` tag in an Astro component to prevent Cumulative Layout Shift (CLS).
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_8

LANGUAGE: astro
CODE:
```
--- 
// import local images
import myDog from '../../images/pets/local-dog.jpg';
---
// access the image properties
<img src={myDog.src} width={myDog.width} height={myDog.height} alt="A barking dog." />
```

----------------------------------------

TITLE: Displaying Cart Items Flyout - Svelte
DESCRIPTION: This Svelte component renders the cart flyout. It imports `isCartOpen` and `cartItems` from `cartStore` and uses Svelte's auto-subscription (`$`) to react to store changes. The component conditionally displays cart items using an `#each` block or an 'empty cart' message.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_19

LANGUAGE: Svelte
CODE:
```
<!--src/components/CartFlyout.svelte-->
<script>
  import { isCartOpen, cartItems } from '../cartStore';
</script>

{#if $isCartOpen}
  {#if Object.values($cartItems).length}
    <aside>
      {#each Object.values($cartItems) as cartItem}
      <li>
        <img src={cartItem.imageSrc} alt={cartItem.name} />
        <h3>{cartItem.name}</h3>
        <p>Quantity: {cartItem.quantity}</p>
      </li>
      {/each}
    </aside>
  {:else}
    <p>Your cart is empty!</p>
  {/if}
{/if}
```

----------------------------------------

TITLE: Fetching Pokémon Data with Next.js getStaticProps
DESCRIPTION: This Next.js component fetches a list of the first 151 Pokémon from the PokéAPI using `getStaticProps` at build time. It then renders the data as a list of links, displaying each Pokémon's ID, image, and name. Dependencies include `next/link` for navigation and a local CSS module for styling.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-nextjs.mdx#_snippet_16

LANGUAGE: jsx
CODE:
```
import Link from 'next/link'
import styles from '../styles/poke-list.module.css';

export default function Home({ pokemons }) {
    return (
        <>
            <ul className={`plain-list ${styles.pokeList}`}>
                {pokemons.map((pokemon) => (
                    <li className={styles.pokemonListItem} key={pokemon.name}>
                        <Link className={styles.pokemonContainer} as={`/pokemon/${pokemon.name}`} href="/pokemon/[name]">
                            <p className={styles.pokemonId}>No. {pokemon.id}</p>
                            <img className={styles.pokemonImage} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={`${pokemon.name} picture`}></img>
                            <h2 className={styles.pokemonName}>{pokemon.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const resJson = await res.json();
    const pokemons = resJson.results.map(pokemon => {
        const name = pokemon.name;
        // https://pokeapi.co/api/v2/pokemon/1/
        const url = pokemon.url;
        const id = url.split("/")[url.split("/").length - 2];
        return {
            name,
            url,
            id
        }
    });
    return {
        props: {
            pokemons,
        },
    }
}
```

----------------------------------------

TITLE: Importing Drizzle Utilities for Astro DB
DESCRIPTION: This snippet shows how to import common Drizzle ORM utility functions like `eq`, `gt`, `count`, and `sql` from the `astro:db` module. These utilities are essential for building various types of database queries, including filtering, aggregation, and raw SQL execution.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/astro-db.mdx#_snippet_25

LANGUAGE: TypeScript
CODE:
```
import { eq, gt, count, sql } from 'astro:db';
```

----------------------------------------

TITLE: Extending Base Layout and Transferring Slots in Astro
DESCRIPTION: Shows `HomeLayout.astro` importing `BaseLayout` and using `<slot>` tags with both `name` and `slot` attributes to pass content received by `HomeLayout` into the corresponding slots of `BaseLayout`. This demonstrates slot transfer in nested layouts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/astro-components.mdx#_snippet_16

LANGUAGE: Astro
CODE:
```
// src/layouts/HomeLayout.astro
---
import BaseLayout from './BaseLayout.astro';
---
<BaseLayout>
  <slot name="head" slot="head" />
  <slot />
</BaseLayout>
```

----------------------------------------

TITLE: Understanding import.meta.glob Output
DESCRIPTION: This JavaScript snippet illustrates the structure of the object returned by `import.meta.glob`. It shows that the object keys are relative paths to the assets, and their values are functions that, when invoked, dynamically import the corresponding image module.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/dynamically-importing-images.mdx#_snippet_5

LANGUAGE: JavaScript
CODE:
```
const images = {
  './assets/avatar-1.jpg': () => import('./assets/avatar-1.jpg'),
  './assets/avatar-2.png': () => import('./assets/avatar-2.png'),
  './assets/avatar-3.jpeg': () => import('./assets/avatar-3.jpeg')
}
```

----------------------------------------

TITLE: Resolving Asset Paths with Import in Astro (Astro)
DESCRIPTION: Astro v2.0 removes `Astro.resolve()`. This snippet shows the recommended way to resolve asset paths, such as images and stylesheets, by using standard JavaScript `import` statements within Astro components. The imported URL can then be used directly in HTML attributes.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v2.mdx#_snippet_13

LANGUAGE: Astro
CODE:
```
---
// src/pages/index.astro
import 'style.css';
import imageUrl from './image.png';
---

<img src={imageUrl} />
```

----------------------------------------

TITLE: Conditionally Displaying Cart Flyout (Multi-Framework)
DESCRIPTION: These snippets show how different UI frameworks consume the `isCartOpen` atom's state to conditionally render the cart flyout component. They import the `isCartOpen` store and use the framework's reactive mechanisms (e.g., `useStore` hook, Svelte's `$`, Vue's `v-if`) to display or hide the `<aside>` element based on the atom's current boolean value.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_9

LANGUAGE: Preact
CODE:
```
// src/components/CartFlyout.jsx
import { useStore } from '@nanostores/preact';
import { isCartOpen } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);

  return $isCartOpen ? <aside>...</aside> : null;
}
```

LANGUAGE: React
CODE:
```
// src/components/CartFlyout.jsx
import { useStore } from '@nanostores/react';
import { isCartOpen } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);

  return $isCartOpen ? <aside>...</aside> : null;
}
```

LANGUAGE: Solid
CODE:
```
// src/components/CartFlyout.jsx
import { useStore } from '@nanostores/solid';
import { isCartOpen } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);

  return $isCartOpen() ? <aside>...</aside> : null;
}
```

LANGUAGE: Svelte
CODE:
```
<!--src/components/CartFlyout.svelte-->
<script>
  import { isCartOpen } from '../cartStore';
</script>

{#if $isCartOpen}
<aside>...</aside>
{/if}
```

LANGUAGE: Vue
CODE:
```
<!--src/components/CartFlyout.vue-->
<template>
  <aside v-if="$isCartOpen">...</aside>
</template>

<script setup>
  import { isCartOpen } from '../cartStore';
  import { useStore } from '@nanostores/vue';

  const $isCartOpen = useStore(isCartOpen);
</script>
```

----------------------------------------

TITLE: Displaying Images in Svelte Components using HTML <img>
DESCRIPTION: This Svelte component demonstrates how to display an image using a standard HTML <img> tag. Similar to React, it imports the image asset and uses its `src` property to set the image source, allowing direct image rendering within Svelte components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/images.mdx#_snippet_6

LANGUAGE: Svelte
CODE:
```
<script>
  import stars from '../assets/stars.png';
</script>

<img src={stars.src} alt="A starry night sky." />
```

----------------------------------------

TITLE: Defining Astro DB Column Types
DESCRIPTION: This example showcases the different column types available in Astro DB, including `text`, `number`, `boolean`, `date`, and `json`. Each type is defined using `column.<type>()` and specifies how data is stored and queried, providing automatic TypeScript typings for content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/guides/astro-db.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
const Comment = defineTable({
  columns: {
    // Una cadena de texto.
    author: column.text(),
    // Un valor entero.
    likes: column.number(),
    // Un valor verdadero o falso.
    flagged: column.boolean(),
    // Valores de fecha/hora consultados como objetos de fecha de JavaScript.
    published: column.date(),
    // Un objeto JSON sin tipo.
    metadata: column.json()
  }
});
```

----------------------------------------

TITLE: Mixing Scoped and Global Styles
DESCRIPTION: Shows how to combine scoped rules with global rules targeting child elements using the `:global()` selector within a single `<style>` block.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
<style>
  /* Scoped to this component, only. */
  h1 { color: red; }
  /* Mixed: Applies to child `h1` elements only. */
  article :global(h1) {
    color: blue;
  }
</style>
<h1>Title</h1>
<article><slot /></article>
```

----------------------------------------

TITLE: Fetching Articles for Static Paths in Astro
DESCRIPTION: This code snippet demonstrates how to fetch published articles from Drupal within Astro's `getStaticPaths()` function. It imports necessary modules and defines the function to retrieve article data for generating routes.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/guides/cms/drupal.mdx#_snippet_12

LANGUAGE: astro
CODE:
```
import { Jsona } from "jsona";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import type { TJsonApiBody } from "jsona/lib/JsonaTypes";

import type { DrupalNode } from "../../types";
import { getArticles } from "../../api/drupal";

// Obtener todos los artículos publicados.
export async function getStaticPaths() {
  const articles = await getArticles();
}
```

----------------------------------------

TITLE: Fetching All Posts from Ghost CMS in Astro
DESCRIPTION: This snippet demonstrates how to import `ghostClient` and use the `posts.browse()` method to fetch all blog posts from the Ghost CMS Content API. It includes error handling for the API call. The `limit: 'all'` option ensures all available posts are retrieved.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/ghost.mdx#_snippet_6

LANGUAGE: Astro
CODE:
```
--- import { ghostClient } from '../lib/ghost';
const posts = await ghostClient.posts
    .browse({
        limit: 'all',
    })
    .catch((err) => {
        console.error(err);
    });
---
```

----------------------------------------

TITLE: Image densities Usage
DESCRIPTION: This code snippet demonstrates how to use the densities property to generate different pixel densities for an image. The densities array specifies the desired pixel densities, and the srcset attribute is generated accordingly.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/modules/astro-assets.mdx#_snippet_6

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image
  src={myImage}
  width={myImage.width / 2}
  densities={[1.5, 2]}
  alt="A description of my image."
/>
```

----------------------------------------

TITLE: Fetching Published Articles from Drupal API (TypeScript)
DESCRIPTION: This snippet demonstrates how to import necessary types and the `getArticles` function, then asynchronously fetch all published articles from a Drupal API. The `articles` constant will hold a typed array of entries ready for use in a page template.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/drupal.mdx#_snippet_14

LANGUAGE: TypeScript
CODE:
```
import type {TJsonApiBody} from "jsona/lib/JsonaTypes";

import type { DrupalNode } from "../../types";
import {getArticles} from "../../api/drupal";

// Get all published articles.
const articles = await getArticles();
```

----------------------------------------

TITLE: Importing Checklist Component in Astro
DESCRIPTION: This snippet imports the `Checklist` component from a local path, making it available for use within the current Astro page. It's a common pattern for including reusable UI elements in Astro projects.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/2-pages/index.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
import Checklist from '~/components/Checklist.astro';
```

----------------------------------------

TITLE: Comprehensive Font Configuration in Astro
DESCRIPTION: This extensive configuration example in `astro.config.mjs` shows how to define multiple fonts with different providers (Google, Fontsource, local). It illustrates setting font names, CSS variables, weights, styles, subsets, fallbacks, and local font variants, providing a complete overview of font integration in an Astro project.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_13

LANGUAGE: js
CODE:
```
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  experimental: {
    fonts: [
      {
        name: "Roboto",
        cssVariable: "--font-roboto",
        provider: fontProviders.google(),
        // Default included:
        // weights: [400] ,
        // styles: ["normal", "italics"],
        // subsets: ["cyrillic-ext", "cyrillic", "greek-ext", "greek", "vietnamese", "latin-ext", "latin"],
        // fallbacks: ["sans-serif"],
      },
      {
        name: "Inter",
        cssVariable: "--font-inter",
        provider: fontProviders.fontsource(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700],
        // Specify styles that are actually used
        styles: ["normal"],
        // Download only font files for characters used on the page
        subsets: ["cyrillic"],
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.fontsource(),
        // Download only font files for characters used on the page
        subsets: ["latin"],
        // Use a fallback font family matching the intended appearance
        fallbacks: ["monospace"],
      },
      {
        name: "Poppins",
        cssVariable: "--font-poppins",
        provider: "local",
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: [
              "./src/assets/fonts/Poppins-regular.woff2",
              "./src/assets/fonts/Poppins-regular.woff"
            ]
          },
          {
            src: [
              "./src/assets/fonts/Poppins-bold.woff2",
              "./src/assets/fonts/Poppins-bold.woff"
            ]
          }
        ]
      }
    ]
  }
});
```

----------------------------------------

TITLE: Accessing Session Data in Astro Component
DESCRIPTION: This code snippet demonstrates how to access session data within an Astro component to display the number of items in a shopping cart. It retrieves the 'cart' data from the session and displays its length.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/sessions.mdx#_snippet_0

LANGUAGE: astro
CODE:
```
---
export const prerender = false; // 'server'出力の場合は不要
const cart = await Astro.session?.get('cart');
---

<a href="/checkout">🛒 {cart?.length ?? 0} 点</a>
```

----------------------------------------

TITLE: Combining MD and MDX Posts During Migration in Astro
DESCRIPTION: This Astro snippet demonstrates how to temporarily combine both `.md` and `.mdx` posts during the migration period. It uses `Astro.glob` to fetch posts of both types and then concatenates them into a single `allPosts` array, allowing the site to function normally while files are being converted.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v1.mdx#_snippet_8

LANGUAGE: astro
CODE:
```
---
const mdPosts = await Astro.glob('../pages/posts/*.md');
const mdxPosts = await Astro.glob('../pages/posts/*.mdx');
const allPosts = [...mdxPosts, ...mdPosts];
---
```

----------------------------------------

TITLE: インタラクティブコンポーネントの追加 (Astro)
DESCRIPTION: 静的UIコンポーネントをインタラクティブなアイランドに変えるには、`client:*`ディレクティブを付与します。Astroは最適化されたパフォーマンスのためにクライアントサイドJavaScriptを自動的にビルド、バンドルします。
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/concepts/islands.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
<!-- このコンポーネントはページ上でインタラクティブになりました。サイトの残り部分は静的のままです。 -->
<MyReactComponent client:load />
```

----------------------------------------

TITLE: Fetching Blog Post Entries in Astro
DESCRIPTION: This Astro snippet demonstrates how to import the `contentfulClient` and `BlogPost` interface, then use the client to fetch all entries from Contentful that have the `blogPost` content type. The `BlogPost` interface is used to type the response, ensuring type safety for the fetched data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/contentful.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
import { contentfulClient } from "../lib/contentful";
import type { BlogPost } from "../lib/contentful";

const entries = await contentfulClient.getEntries<BlogPost>({
  content_type: "blogPost"
});
---
```

----------------------------------------

TITLE: Detailed Google Font Configuration in Astro
DESCRIPTION: This configuration example for `astro.config.mjs` illustrates how to set up the experimental fonts API. It specifies the `provider` (Google Fonts), the font `name` ("Roboto"), and a `cssVariable` (`--font-roboto`), emphasizing the required properties for each font object in the `experimental.fonts` array.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-roboto"
    }]
  }
});
```

----------------------------------------

TITLE: Referencing Images in Astro Markdown/MDX
DESCRIPTION: This Markdown snippet demonstrates the new capability of referencing relative images from the `src/` directory using standard Markdown `![alt](src)` syntax. This allows `astro:assets` to process and optimize images stored alongside content in Markdown, MDX, and Markdoc files, enhancing content organization.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v3.mdx#_snippet_36

LANGUAGE: Markdown
CODE:
```
# My Markdown Page

<!-- Local images now possible! -->
![A starry night sky.](../../images/stars.png)

<!-- Keep your images next to your content! -->
![A starry night sky.](./stars.png)
```

----------------------------------------

TITLE: Specifying Session Driver with Astro Adapter
DESCRIPTION: This example shows how to explicitly define the Unstorage driver for session storage, even when an Astro adapter (like Vercel) might provide a default. This allows for overriding the default or specifying a custom driver if the adapter doesn't provide one.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/configuration-reference.mdx#_snippet_37

LANGUAGE: JavaScript
CODE:
```
{
  adapter: vercel(),
  session: {
    driver: "redis",
  },
}
```

----------------------------------------

TITLE: Initializing getStaticPaths for Contentful Data in Astro
DESCRIPTION: This snippet initializes the `getStaticPaths` function in an Astro dynamic route. It imports the Contentful client and `BlogPost` interface, then fetches all entries of type 'blogPost' from Contentful to prepare for page generation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/contentful.mdx#_snippet_11

LANGUAGE: Astro
CODE:
```
---
import { contentfulClient } from "../../lib/contentful";
import type { BlogPost } from "../../lib/contentful";

export async function getStaticPaths() {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
  });
}
---
```

----------------------------------------

TITLE: Importing Local Stylesheets in Astro
DESCRIPTION: Shows how to import a local CSS file into an Astro component's frontmatter using ESM import syntax, allowing Astro to bundle and optimize the styles.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_10

LANGUAGE: Astro
CODE:
```
---
// Astro will bundle and optimize this CSS for you automatically
// This also works for preprocessor files like .scss, .styl, etc.
import '../styles/utils.css';
---
<html><!-- Your page here --></html>
```

----------------------------------------

TITLE: Using Configured Import Aliases in Astro
DESCRIPTION: Shows how to use the previously configured import aliases (`@components`, `@assets`) within an Astro file. This simplifies import statements, making them more readable and resilient to file system changes compared to relative paths.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_10

LANGUAGE: astro
CODE:
```
---
import Button from '@components/controls/Button.astro';
import logoUrl from '@assets/logo.png?url';
---
```

----------------------------------------

TITLE: Importing Checklist Component in Astro
DESCRIPTION: This snippet imports the `Checklist` Astro component from a relative path. The `Checklist` component is used to display a list of items, typically for tracking progress or tasks, and is a common UI element in tutorials.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/4-layouts/index.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
import Checklist from '~/components/Checklist.astro';
```

----------------------------------------

TITLE: Using Glob Patterns for File Inclusion/Exclusion (Astro.js)
DESCRIPTION: This snippet demonstrates the use of glob patterns within both `includeFiles` and `excludeFiles` properties in `astro.config.mjs`. Glob patterns allow for matching and managing multiple files efficiently, enabling more flexible control over what gets bundled or excluded from your Netlify Functions.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/integrations-guide/netlify.mdx#_snippet_18

LANGUAGE: JavaScript
CODE:
```
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  adapter: netlify({
    includeFiles: [
      './data/**/*.json'
    ],
    excludeFiles: [
      './node_modules/package/**/*',
      './src/**/*.test.js'
    ]
  }),
});
```

----------------------------------------

TITLE: Importing Astro DB Drizzle Client (TypeScript)
DESCRIPTION: This snippet shows the import statement for the `db` client from `astro:db`. This client provides a built-in Drizzle ORM interface for interacting with the Astro database, automatically configured for type-safe SQL queries.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/astro-db.mdx#_snippet_19

LANGUAGE: ts
CODE:
```
import { db } from 'astro:db';
```

----------------------------------------

TITLE: Using Astro.props with getStaticPaths in Astro
DESCRIPTION: This Astro page demonstrates how to define static paths and pass `props` (e.g., `author`) from `getStaticPaths`. The `author` prop is then accessed via `Astro.props` within the component, alongside `id` from `Astro.params`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/api-reference.mdx#_snippet_2

LANGUAGE: Astro
CODE:
```
---
```

LANGUAGE: Astro
CODE:
```
export function getStaticPaths() {
  return [
    { params: { id: '1' }, props: { author: 'Blu' } },
    { params: { id: '2' }, props: { author: 'Erika' } },
    { params: { id: '3' }, props: { author: 'Matthew' } }
  ];
}
```

LANGUAGE: Astro
CODE:
```
const { id } = Astro.params;
const { author } = Astro.props;
---
```

----------------------------------------

TITLE: Using Complex Middleware Data in Astro Page
DESCRIPTION: This Astro page snippet demonstrates how to consume complex data, including a function and an iterable, previously stored in `Astro.locals` by middleware. It calls the `welcomeTitle` function and iterates over `orders` to render dynamic content, showcasing the flexibility of data sharing via `locals`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/middleware.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
const title = Astro.locals.welcomeTitle();
const orders = Array.from(Astro.locals.orders.entries());
const data = Astro.locals;
---
<h1>{title}</h1>
<p>This {data.property} is from middleware.</p>
<ul>
    {orders.map(order => {
        return <li>{/* do something with each order */}</li>;
    })}
</ul>
```

----------------------------------------

TITLE: Actualizar Astro y las integraciones oficiales juntas - yarn
DESCRIPTION: This command updates Astro and its official integrations to their latest versions using yarn.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/6-islands/4.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
yarn dlx @astrojs/upgrade
```

----------------------------------------

TITLE: Image densities Output
DESCRIPTION: This HTML output shows the result of using the densities property on the Image component. The srcset attribute is generated with the specified densities.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/modules/astro-assets.mdx#_snippet_7

LANGUAGE: html
CODE:
```
<!-- 출력 -->
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 1.5x
    /_astro/my_image.hash.webp 2x
  "
  alt="A description of my image."
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>
```

----------------------------------------

TITLE: Calling Astro Actions Client-Side in Astro Component
DESCRIPTION: This example demonstrates how to import and invoke defined Astro Actions from the `astro:actions` module within a client-side `<script>` tag in an Astro component. It shows that an action call returns an object containing either `data` (for successful results) or `error` (for thrown exceptions).
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/actions.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
<script>
import { actions } from 'astro:actions';

async () => {
  const { data, error } = await actions.myAction({ /* ... */ });
}
</script>
```

----------------------------------------

TITLE: Public Image Usage
DESCRIPTION: This code snippet demonstrates how to use an image from the public/ folder. It specifies the file path relative to the public folder as the src value for the Image component, and also sets the width and height attributes.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/modules/astro-assets.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
---
<Image
  src="/images/my-public-image.png"
  alt="descriptive text"
  width="200"
  height="150"
/>
```

----------------------------------------

TITLE: Nesting Astro Layout Components
DESCRIPTION: This Astro snippet demonstrates how to nest layout components, where `BlogPostLayout.astro` imports and uses `BaseLayout.astro`. This pattern promotes code reuse by allowing specific layout components to handle content-specific styling while a base layout manages site-wide elements, with props being passed down through the nested structure.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/layouts.mdx#_snippet_8

LANGUAGE: astro
CODE:
```
// src/layouts/BlogPostLayout.astro
import BaseLayout from './BaseLayout.astro';
const { frontmatter } = Astro.props;
---
<BaseLayout url={frontmatter.url}>
  <h1>{frontmatter.title}</h1>
  <h2>Post author: {frontmatter.author}</h2>
  <slot />
</BaseLayout>
```

----------------------------------------

TITLE: Importing and Displaying Images in Astro
DESCRIPTION: This code demonstrates how to import local images and display them using the Astro Image component, as well as how to reference images from the public directory and remote URLs. It also shows how to use standard HTML img tags to display images without Astro's optimization.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/images.mdx#_snippet_0

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import localBirdImage from '../../images/subfolder/localBirdImage.png';
---
<Image src={localBirdImage} alt="一只鸟坐在蛋窝上。" />
<Image src="/images/bird-in-public-folder.jpg" alt="一只鸟" width="50" height="50" />
<Image src="https://example.com/remote-bird.jpg" alt="一只鸟" width="50" height="50" />

<img src={localBirdImage.src} alt="一只鸟坐在蛋窝上。">
<img src="/images/bird-in-public-folder.jpg" alt="一只鸟">
<img src="https://example.com/remote-bird.jpg" alt="一只鸟">

```

----------------------------------------

TITLE: Displaying All Blog Posts in Astro (Astro)
DESCRIPTION: This Astro component (`BlogIndex.astro`) is responsible for fetching and displaying a list of all blog posts. It retrieves `page` and `pieces` data from `Astro.props.aposData`, then iterates through the `pieces` array to render each blog post's publication date (formatted with `dayjs`), title (linked to its URL), and author name.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/apostrophecms.mdx#_snippet_16

LANGUAGE: astro
CODE:
```
---
import dayjs from 'dayjs';

const { page, pieces } = Astro.props.aposData;
---

<section class="bp-content">
  <h1>{ page.title }</h1>

  <h2>Blog Posts</h2>

  {pieces.map(piece => (
    <h4>
      Released On { dayjs(piece.publicationDate).format('MMMM D, YYYY') }
    </h4>
    <h3>
      <a href={ piece._url }>{ piece.title }</a>
    </h3>
    <h4>{ piece.authorName }</h4>
  ))}
</section>
```

----------------------------------------

TITLE: Defining Astro DB Table for Integration (JavaScript)
DESCRIPTION: This snippet defines a `Pets` database table using `defineTable` and `defineDb` from `astro:db`. It specifies `name` and `species` columns as text types, setting up the schema for an Astro DB integration.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/astro-db.mdx#_snippet_39

LANGUAGE: js
CODE:
```
// my-integration/config.ts
import { defineDb, defineTable, column } from 'astro:db';

export const Pets = defineTable({
  columns: {
    name: column.text(),
    species: column.text()
  }
});

export default defineDb({ tables: { Pets } });
```

----------------------------------------

TITLE: Displaying Images in Markdown Files
DESCRIPTION: This snippet illustrates how to embed images in Markdown files using standard `![alt](src)` syntax. It covers local images from `src/assets/`, images from the `public/` folder, and remote images via full URLs. Local `src/` images are optimized, while `public/` and remote images are not by default unless configured.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_16

LANGUAGE: Markdown
CODE:
```
<!-- src/pages/post-1.md -->

# My Markdown Page

<!-- Local image stored in src/assets/ -->
<!-- Use a relative file path or import alias -->
![A starry night sky.](../assets/stars.png)

<!-- Image stored in public/images/ -->
<!-- Use the file path relative to public/ -->
![A starry night sky.](/images/stars.png)

<!-- Remote image on another server -->
<!-- Use the full URL of the image -->
![Astro](https://example.com/images/remote-image.png)
```

----------------------------------------

TITLE: Displaying Local Images with <img>
DESCRIPTION: Demonstrates how to display a local image using the `<img>` tag in Astro. The image is imported, and its `src`, `width`, and `height` properties are used to populate the tag attributes.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_9

LANGUAGE: astro
CODE:
```
---
// importer des images locales
import myDog from '../../images/pets/local-dog.jpg';
---
// accéder aux propriétés de l'image
<img src={myDog.src} width={myDog.width} height={myDog.height} alt="Un chien qui aboie." />
```

----------------------------------------

TITLE: Passing Astro Image Component as Child to React Component
DESCRIPTION: This Astro component imports a React component and an image using `astro:assets`. It demonstrates how to pass an Astro `<Image />` component as a child to a UI framework component (here, `ReactComponent`), allowing Astro to handle image processing while the framework component renders the static output.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_21

LANGUAGE: astro
CODE:
```
---
import ReactComponent from './ReactComponent.jsx';
import { Image } from 'astro:assets';
import stars from '~/stars/docline.png';
---

<ReactComponent>
  <Image src={stars} alt="A starry night sky." />
</ReactComponent>
```

----------------------------------------

TITLE: Displaying Cart Items in Astro Component
DESCRIPTION: This Astro component demonstrates how to retrieve and display shopping cart data stored in the session. It fetches the 'cart' array from `Astro.session` and shows the number of items, defaulting to 0 if the cart is empty. The component is marked `prerender = false` as it relies on server-side session data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/sessions.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
---
export const prerender = false; // Not needed with 'server' output
const cart = await Astro.session?.get('cart');
---

<a href="/checkout">🛒 {cart?.length ?? 0} items</a>
```

----------------------------------------

TITLE: Dynamically Rendering Blog Posts in Astro
DESCRIPTION: This Astro code replaces static list items with a dynamic list generated by mapping over the `allPosts` array obtained from `import.meta.glob()`. It uses `post.url` for the link and `post.frontmatter.title` for the display text, leveraging Astro's built-in TypeScript support for type safety and automatic updates.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/1.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../layouts/BaseLayout.astro'
const allPosts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
const pageTitle = "My Astro Learning Blog";
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    <li><a href="/posts/post-1/">Post 1</a></li>
    <li><a href="/posts/post-2/">Post 2</a></li>
    <li><a href="/posts/post-3/">Post 3</a></li>

    {allPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Generating Pixel Densities for Images
DESCRIPTION: This code snippet demonstrates how to generate different pixel densities for an image using the densities property of the Image component. It creates a srcset attribute on the img tag, allowing the browser to choose the appropriate image based on the device's pixel density.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_6

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image
  src={myImage}
  width={myImage.width / 2}
  densities={[1.5, 2]}
  alt="A description of my image."
/>
```

----------------------------------------

TITLE: Using getImage() to Optimize Images in Astro
DESCRIPTION: Illustrates how to use the getImage() function in Astro to optimize images for use in API routes or custom components.  It takes an image source and optional transformations, returning an object with image metadata and optimized URLs.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_15

LANGUAGE: astro
CODE:
```
---
import { getImage } from "astro:assets";
import myBackground from "../background.png"

const optimizedBackground = await getImage({src: myBackground, format: 'avif'})
---

<div style={`background-image: url(${optimizedBackground.src});`}></div>
```

----------------------------------------

TITLE: Link Static Stylesheets in Astro Head
DESCRIPTION: Explains how to load stylesheets using <link> tags within the <head> of an Astro page. This method is used for static CSS files in the /public directory or external URLs and bypasses Astro's normal CSS processing and optimizations. Relative paths are not supported.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_14

LANGUAGE: Astro
CODE:
```
<head>
  <!-- Local: /public/styles/global.css -->
  <link rel="stylesheet" href="/styles/global.css" />
  <!-- External -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.24.1/themes/prism-tomorrow.css" />
</head>
```

----------------------------------------

TITLE: Including Additional Font Properties within Variants in Astro
DESCRIPTION: This snippet demonstrates how to include other remote font properties, such as `display`, directly within a local font variant definition in `astro.config.mjs`. This allows for fine-grained control over individual font face declarations, combining local font settings with other `@font-face` descriptors.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_40

LANGUAGE: JavaScript
CODE:
```
import { defineConfig } from "astro/config";

export default defineConfig({
    experimental: {
        fonts: [{
            provider: "local",
            name: "Custom",
            cssVariable: "--font-custom",
            variants: [
                {
                    weight: 400,
                    style: "normal",
                    src: ["./src/assets/fonts/custom-400.woff2"],
                    display: "block"
                }
            ]
        }]
    }
});
```

----------------------------------------

TITLE: Configuring Allowed Remote Patterns
DESCRIPTION: Shows how to configure allowed remote patterns for images in `astro.config.mjs`. This example allows only images from HTTPS hosts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_14

LANGUAGE: typescript
CODE:
```
// astro.config.mjs
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }],
  }
});
```

----------------------------------------

TITLE: Generated HTML for a Constrained Responsive Image
DESCRIPTION: This HTML snippet illustrates the output generated by an Astro `<Image />` component configured with a `constrained` layout. It includes automatically generated `srcset` and `sizes` attributes for responsive image loading, along with `loading`, `decoding`, `fetchpriority`, `width`, `height`, and inline styles for `object-fit` and `object-position`, demonstrating how Astro optimizes images for different viewports.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/responsive-images.mdx#_snippet_4

LANGUAGE: HTML
CODE:
```
<img
  src="/_astro/my_image.hash3.webp"
  srcset="/_astro/my_image.hash1.webp 640w,
      /_astro/my_image.hash2.webp 750w,
      /_astro/my_image.hash3.webp 800w,
      /_astro/my_image.hash4.webp 828w,
      /_astro/my_image.hash5.webp 1080w,
      /_astro/my_image.hash6.webp 1280w,
      /_astro/my_image.hash7.webp 1600w"
  alt="A description of my image"
  sizes="(min-width: 800px) 800px, 100vw"
  loading="lazy"
  decoding="async"
  fetchpriority="auto"
  width="800"
  height="600"
  style="--fit: cover; --pos: center;"
  data-astro-image="constrained"
>
```

----------------------------------------

TITLE: Defining getStaticPaths with Props in Astro
DESCRIPTION: This snippet defines the `getStaticPaths` function in an Astro dynamic route. It uses `import.meta.glob` to eagerly load all Markdown blog posts and then passes this `allPosts` data as `props` to each generated route, allowing the component template to access all post data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/2.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));

  return [
    {params: {tag: "astro"}, props: {posts: allPosts}},
    {params: {tag: "successes"}, props: {posts: allPosts}},
    {params: {tag: "community"}, props: {posts: allPosts}},
    {params: {tag: "blogging"}, props: {posts: allPosts}},
    {params: {tag: "setbacks"}, props: {posts: allPosts}},
    {params: {tag: "learning in public"}, props: {posts: allPosts}}
  ];
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---
```

----------------------------------------

TITLE: Injecting HTML into a Fragment with `set:html` (Astro)
DESCRIPTION: Shows how `set:html` can be used with an `<Fragment>` component to inject HTML content without adding an unnecessary wrapper element. This is particularly useful when integrating content fetched from a CMS.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/directives-reference.mdx#_snippet_2

LANGUAGE: Astro
CODE:
```
---
const cmsContent = await fetchHTMLFromMyCMS();
---
<Fragment set:html={cmsContent}>
```

----------------------------------------

TITLE: Initializing Nanostores Map and Atom for Cart State
DESCRIPTION: This snippet initializes `isCartOpen` as an `atom` to manage the cart's visibility and `cartItems` as a `map` to store cart items. The `cartItems` map uses item IDs as keys and `CartItem` objects (defined via JSDoc or TypeScript type) as values, allowing efficient tracking of product quantity and details.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_10

LANGUAGE: javascript
CODE:
```
// src/cartStore.js
import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {string} imageSrc
 * @property {number} quantity
 */

/** @type {import('nanostores').MapStore<Record<string, CartItem>>} */
export const cartItems = map({});

```

LANGUAGE: typescript
CODE:
```
// src/cartStore.ts
import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);

export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
  quantity: number;
}

export const cartItems = map<Record<string, CartItem>>({});

```

----------------------------------------

TITLE: Dynamically Generating Tag Paths in Astro
DESCRIPTION: This code replaces the static return statement of `getStaticPaths` with a dynamic one. It iterates over `uniqueTags`, filters `allPosts` to include only those relevant to the current tag, and returns an object with `params` (the tag itself) and `props` (the filtered posts) for each unique tag. This enables automatic page generation for all existing tags.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/5-astro-api/2.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
```

----------------------------------------

TITLE: Importing Components with Relative Paths in Astro
DESCRIPTION: This Astro page demonstrates how to import another Astro component (`Card.astro`) using a relative file path. It highlights Astro's requirement for explicit relative paths and full file extensions when importing components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-create-react-app.mdx#_snippet_10

LANGUAGE: astro
CODE:
```
---
import Card from '../../components/Card.astro';
---
<Card />
```

----------------------------------------

TITLE: Using Picture component for responsive images
DESCRIPTION: This code snippet shows how to use the `<Picture />` component to display responsive images with multiple formats. The `formats` prop specifies the image formats to include in the `<source>` tags, and the `fallbackFormat` prop specifies the format to use for the `<img>` tag.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-assets.mdx#_snippet_11

LANGUAGE: astro
CODE:
```
---
import { Picture } from 'astro:assets';
import myImage from "../assets/my_image.png"; // 图像的分辨率为 1600x900
---

<!-- 在图片组件上 `alt` 属性是必需的 -->
<Picture src={myImage} formats={['avif', 'webp']} alt="A description of my image." />
```

----------------------------------------

TITLE: Astro Component with Named Slots (Astro)
DESCRIPTION: This Astro component definition demonstrates the use of named slots (`header` and `footer`). Content passed to these slots will be rendered within the respective `<slot>` tags.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/container-reference.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
---
<div>
  <slot name="header" />
  <slot name="footer" />
</div>
```

----------------------------------------

TITLE: Adding Items to Nanostores Cart Map
DESCRIPTION: This `addCartItem` function updates the `cartItems` map. It checks if an item already exists in the cart; if so, it increments its quantity. Otherwise, it adds the new item with a quantity of 1. It uses `cartItems.get()` to read the current state and `cartItems.setKey()` to update specific keys efficiently.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_11

LANGUAGE: javascript
CODE:
```
// src/cartStore.js
...
export function addCartItem({ id, name, imageSrc }) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    })
  } else {
    cartItems.setKey(
      id,
      { id, name, imageSrc, quantity: 1 }
    );
  }
}
```

LANGUAGE: typescript
CODE:
```
// src/cartStore.ts
...
type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc'>;
export function addCartItem({ id, name, imageSrc }: ItemDisplayInfo) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    });
  } else {
    cartItems.setKey(
      id,
      { id, name, imageSrc, quantity: 1 }
    );
  }
}
```

----------------------------------------

TITLE: Fetching All Markdown Posts in Astro
DESCRIPTION: This code snippet demonstrates how to programmatically retrieve all Markdown blog posts within an Astro project. It uses `Astro.glob('../posts/*.md')` to asynchronously fetch data from all `.md` files in the `../posts/` directory, making the post data available for dynamic content generation. This is a crucial step for building a dynamic tag index.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/tutorial/5-astro-api/3.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = await Astro.glob('../posts/*.md');
const pageTitle = "タグインデックス";
---
```

----------------------------------------

TITLE: Rendering Dynamic HTML Lists in Astro
DESCRIPTION: Explains how to use JavaScript array methods, such as `.map()`, within JSX-like expressions in the template to iterate over data and generate lists or other repeating HTML structures dynamically.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/astro-syntax.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
---
const items = ["Chien", "Chat", "Ornithorynque"];
---
<ul>
  {items.map((item) => (
    <li>{item}</li>
  ))}
</ul>
```

----------------------------------------

TITLE: Importing Components with Relative Paths in Astro
DESCRIPTION: This snippet illustrates how to import an Astro component (Card.astro) using a relative path. Astro requires full file extensions for imports like .astro files, ensuring explicit module resolution.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-nextjs.mdx#_snippet_11

LANGUAGE: Astro
CODE:
```
---
import Card from "../../components/Card.astro";
---
<Card />
```

----------------------------------------

TITLE: Rendering Individual Blog Post Pages in Astro
DESCRIPTION: This complete Astro snippet for `[slug].astro` fetches blog post data, generates static paths, and then renders the individual blog post content. It retrieves the `blogPost` object from `Astro.props` and displays its title, teaser, content, and date within an HTML template.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_21

LANGUAGE: Astro
CODE:
```
---
import { deliveryClient } from '../../lib/kontent';
import type { BlogPost } from '../../models';
import { contentTypes } from '../../models/project/contentTypes';

export async function getStaticPaths() {
    const blogPosts = await deliveryClient
        .items<BlogPost>()
        .type(contentTypes.blog_post.codename)
        .toPromise()

    return blogPosts.data.items.map(blogPost => ({
        params: { slug: blogPost.elements.url_slug.value },
        props: { blogPost }
    }))
}

const blogPost: BlogPost = Astro.props.blogPost
---
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{blogPost.elements.title.value}</title>
    </head>
    <body>
        <article>
            <h1>{blogPost.elements.title.value}</h1>
            <Fragment set:html={blogPost.elements.teaser.value} />
            <Fragment set:html={blogPost.elements.content.value} />
            <time>{new Date(blogPost.elements.date.value ?? "")}</time>
    </body>
</html>
```

----------------------------------------

TITLE: Compiled Scoped Styles Output
DESCRIPTION: Illustrates the result of Astro's compilation for scoped styles, showing how unique data attributes are added to selectors to ensure encapsulation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_2

LANGUAGE: astro
CODE:
```
<style>
  h1[data-astro-cid-hhnqfkh6] {
     color: red;
  }

  .text[data-astro-cid-hhnqfkh6] {
    color: blue;
  }
</style>
```

----------------------------------------

TITLE: Injecting HTML from a Promise with `set:html` (Astro)
DESCRIPTION: The `set:html` directive supports injecting HTML strings wrapped in a Promise. This enables asynchronous retrieval of HTML content, such as fetching an article from a database API, and rendering it directly into the element once the Promise resolves.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/directives-reference.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import api from '../db/api.js';
---
<article set:html={api.getArticle(Astro.props.id)}></article>
```

----------------------------------------

TITLE: TypeScript Interface for MarkdownInstance in Astro
DESCRIPTION: This TypeScript interface defines the structure of a `MarkdownInstance` object, which is returned when Markdown files are loaded using `import.meta.glob()` in Astro. It includes properties for frontmatter, file path, URL, content rendering, raw content, compiled content, and heading extraction, providing type safety for Markdown data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_14

LANGUAGE: ts
CODE:
```
export interface MarkdownInstance<T extends Record<string, any>> {
  /* Any data specified in this file's YAML/TOML frontmatter */
	frontmatter: T;
  /* The absolute file path of this file */
	file: string;
  /* The rendered path of this file */
	url: string | undefined;
  /* Astro Component that renders the contents of this file */
	Content: AstroComponentFactory;
  /** (Markdown only) Raw Markdown file content, excluding layout HTML and YAML/TOML frontmatter */
	rawContent(): string;
  /** (Markdown only) Markdown file compiled to HTML, excluding layout HTML */
	compiledContent(): string;
  /* Function that returns an array of the h1...h6 elements in this file */
	getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;
	default: AstroComponentFactory;
}
```

----------------------------------------

TITLE: Using Images in Markdown Files
DESCRIPTION: This code snippet demonstrates how to use images in Markdown files, including local images stored in `src/`, images stored in `public/`, and remote images. Local images are optimized using Astro's Image Service API, while images in `public/` are served directly without optimization.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_17

LANGUAGE: md
CODE:
```
<!-- src/pages/post-1.md -->

# Ma Page Markdown

<!-- Image locale stockée dans src/assets/ -->
<!-- Utiliser un chemin d'accès relatif ou un alias d'importation -->
![Un ciel étoilé.](../assets/stars.png)

<!-- Image stockée dans public/images/ -->
<!-- Utiliser le chemin d'accès relatif à public/ -->
![Un ciel étoilé.](/images/stars.png)

<!-- Image distante sur un autre serveur -->
<!-- Utiliser l'URL complète de l'image -->
![Astro](https://example.com/images/remote-image.png)
```

----------------------------------------

TITLE: Importing Box Component in Astro
DESCRIPTION: This snippet imports the `Box` Astro component from a relative path. The `Box` component is likely used for visual grouping or styling content within the tutorial, providing a structured container for information.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/4-layouts/index.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
import Box from '~/components/tutorial/Box.astro';
```

----------------------------------------

TITLE: Adding Font Component and Styling in Astro Head
DESCRIPTION: This Astro component snippet shows how to import the `<Font />` component from `astro:assets` and use it within the `<head>` section. It applies the `--font-roboto` CSS variable and includes a `preload` attribute for performance, followed by basic CSS to set the `body` font family.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
--- 
import { Font } from 'astro:assets';
---

<Font cssVariable='--font-roboto' preload />

<style>
body {
    font-family: var(--font-roboto);
}
</style>
```

----------------------------------------

TITLE: Rendering Nested Components in Slots (JS)
DESCRIPTION: This JavaScript example demonstrates how to render other Astro components (`CardHeader`, `CardFooter`) directly into named slots using `container.renderToString()` for each nested component. This allows for complex slot content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/container-reference.mdx#_snippet_10

LANGUAGE: JavaScript
CODE:
```
import Card from "../src/components/Card.astro";
import CardHeader from "../src/components/CardHeader.astro";
import CardFooter from "../src/components/CardFooter.astro";

const result = await container.renderToString(Card, { 
  slots: { 
    header: await container.renderToString(CardHeader), 
    footer:  await container.renderToString(CardFooter)
  }
});
```

----------------------------------------

TITLE: Importing Astro Tutorial Components
DESCRIPTION: This snippet demonstrates how to import various Astro components from the `~/components` directory, making them available for use within the current Astro file. These components are essential for rendering specific UI elements like boxes, checklists, multiple choice questions, and options within the tutorial content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/index.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
import Box from '~/components/tutorial/Box.astro';
import Checklist from '~/components/Checklist.astro';
import MultipleChoice from '~/components/tutorial/MultipleChoice.astro';
import Option from '~/components/tutorial/Option.astro';
```

----------------------------------------

TITLE: TypeScript Interface for AstroInstance
DESCRIPTION: This TypeScript interface defines the structure of an `AstroInstance` object, which represents an Astro component imported via `import.meta.glob()`. It includes properties for the file path, URL (if in `pages` directory), and the default export which is the component factory itself, enabling type-safe rendering of Astro components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/imports.mdx#_snippet_16

LANGUAGE: ts
CODE:
```
export interface AstroInstance {
  /* The file path of this file */
  file: string;
  /* The URL for this file (if it is in the pages directory) */
	url: string | undefined;
	default: AstroComponentFactory;
}
```

----------------------------------------

TITLE: Installing Nano Stores with React
DESCRIPTION: Installs the core Nano Stores library and its dedicated helper package for React, facilitating seamless state management and reactivity within React components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
npm install nanostores @nanostores/react
```

----------------------------------------

TITLE: Receiving Props and Content in Astro Layout
DESCRIPTION: This Astro layout component (`BaseLayout.astro`) illustrates how to receive props (e.g., `title`, `fancyJsHelper`) via `Astro.props` from a consuming MDX file. The `<slot />` component is crucial for injecting the MDX content into the layout, enabling a flexible content-layout separation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/layouts.mdx#_snippet_7

LANGUAGE: astro
CODE:
```
---
const { title, fancyJsHelper } = Astro.props;
---
<html>
  <head>
    <!-- -->
    <meta charset="utf-8">
  </head>
  <body>
    <!-- -->
    <h1>{title}</h1>
    <slot /> <!-- your content is injected here -->
    <p>{fancyJsHelper()}</p>
    <!-- -->
  </body>
</html>
```

----------------------------------------

TITLE: Rendering Dynamic Astro Page with Contentful Data
DESCRIPTION: This snippet completes the dynamic Astro page by destructuring `Astro.props` to access the `content`, `title`, and `date` passed from `getStaticPaths`. It then renders the blog post using standard HTML, embedding the content securely with `set:html`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/contentful.mdx#_snippet_13

LANGUAGE: Astro
CODE:
```
---
import { contentfulClient } from "../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { BlogPost } from "../../lib/contentful";

export async function getStaticPaths() {
  const { items } = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
  });
  const pages = items.map((item) => ({
    params: { slug: item.fields.slug },
    props: {
      title: item.fields.title,
      content: documentToHtmlString(item.fields.content),
      date: new Date(item.fields.date).toLocaleDateString(),
    },
  }));
  return pages;
}

const { content, title, date } = Astro.props;
---
<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <time>{date}</time>
    <article set:html={content} />
  </body>
</html>
```

----------------------------------------

TITLE: Importing Dependencies and Fetching Articles in Astro Page
DESCRIPTION: Imports necessary dependencies and fetches all Drupal article entries using the `getArticles()` function. The `DrupalNode` interface is used to type the response data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/guides/cms/drupal.mdx#_snippet_10

LANGUAGE: astro
CODE:
```
---
import { Jsona } from "jsona";
```

----------------------------------------

TITLE: Typing Frontmatter with Astro.glob()
DESCRIPTION: This code snippet demonstrates how to use TypeScript generics with Astro.glob() to specify the type of the frontmatter data in Markdown files. This allows for type-safe access to frontmatter properties.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/api-reference.mdx#_snippet_43

LANGUAGE: astro
CODE:
```
--- 
interface Frontmatter {
  title: string;
  description?: string;
}
const posts = await Astro.glob<Frontmatter>('../pages/post/*.md');
---

<ul>
  {posts.map(post => <li>{post.frontmatter.title}</li>)}
</ul>
```

----------------------------------------

TITLE: Passing Astro Components as Children to Framework Components in Astro
DESCRIPTION: This snippet demonstrates how to use the Astro <slot /> pattern to pass static content generated by Astro components as children to UI framework components (e.g., React) within an .astro file. This allows for composition without directly importing .astro files into framework components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/framework-components.mdx#_snippet_9

LANGUAGE: astro
CODE:
```
---
import MyReactComponent from  '../components/MyReactComponent.jsx';
import MyAstroComponent from '../components/MyAstroComponent.astro';
---
<MyReactComponent>
  <MyAstroComponent slot="name" />
</MyReactComponent>
```

----------------------------------------

TITLE: Mapping Contentful Entries to Astro Dynamic Paths and Props
DESCRIPTION: This snippet extends the `getStaticPaths` function to map fetched Contentful entries into an array of objects, each containing `params` for URL generation and `props` to pass data (title, HTML content, formatted date) to the Astro page component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/contentful.mdx#_snippet_12

LANGUAGE: Astro
CODE:
```
---
import { contentfulClient } from "../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { BlogPost } from "../../lib/contentful";

export async function getStaticPaths() {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
  });

  const pages = entries.items.map((item) => ({
    params: { slug: item.fields.slug },
    props: {
      title: item.fields.title,
      content: documentToHtmlString(item.fields.content),
      date: new Date(item.fields.date).toLocaleDateString(),
    },
  }));
  return pages;
}
---
```

----------------------------------------

TITLE: Rendering Astro Component to Response Object (JS)
DESCRIPTION: This JavaScript example demonstrates `experimental_AstroContainer.renderToResponse()`, which renders an Astro component (`Card`) and returns a standard `Response` object. This is useful for direct HTTP responses.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/container-reference.mdx#_snippet_5

LANGUAGE: JavaScript
CODE:
```
import { experimental_AstroContainer } from "astro/container";
import Card from "../src/components/Card.astro";

const container = await experimental_AstroContainer.create();
const result = await container.renderToResponse(Card);
```

----------------------------------------

TITLE: Astro Import Statement
DESCRIPTION: This example shows how to import a component in Astro using a relative file path. Note that the .astro extension must be included.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/migrate-to-astro/from-gatsby.mdx#_snippet_8

LANGUAGE: astro
CODE:
```
---
import Card from `../../components/Card.astro`;
---
<Card />
```

----------------------------------------

TITLE: Plantilla de ejemplo en Astro
DESCRIPTION: Este es un ejemplo de una plantilla de Astro que define la estructura básica de una página web, incluyendo el HTML, head, navegación, contenido principal y pie de página. Utiliza un slot para insertar el contenido específico de cada página.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/basics/layouts.mdx#_snippet_0

LANGUAGE: astro
CODE:
```
---
// src/layouts/MySiteLayout.astro
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
const { title } = Astro.props;
---
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <BaseHead title={title} />
  </head>
  <body>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Publicaciones</a>
      <a href="#">Contacto</a>
    </nav>
    <h1>{title}</h1>
    <article>
      <slot /> <!-- tu contenido es inyectado aquí -->
    </article>
    <Footer />
  </body>
  <style>
    h1 {
      font-size: 2rem;
    }
  </style>
</html>
```

----------------------------------------

TITLE: Generating srcset with densities in Astro
DESCRIPTION: This example demonstrates how to use the `densities` property of the Astro `Image` component to generate a `srcset` attribute for responsive images. The `densities` array specifies the pixel densities to generate.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_6

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image
  src={myImage}
  width={myImage.width / 2}
  densities={[1.5, 2]}
  alt="Une description de mon image."
/>
```

----------------------------------------

TITLE: Demonstrate CSS Import Order and Scoped Styles in Astro
DESCRIPTION: This Astro component imports two CSS files with conflicting styles of the same specificity and includes a scoped `<style>` tag. It demonstrates that the last imported CSS file wins when specificity is equal, and scoped styles apply only within the component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_23

LANGUAGE: astro
CODE:
```
---
import "./make-it-green.css"
import "./make-it-purple.css"
---
<style>
  h1 { color: red }
</style>
<div>
  <h1>
    This header will be purple!
  </h1>
</div>
```

----------------------------------------

TITLE: Displaying Cart Items Flyout - Preact
DESCRIPTION: This Preact component renders a cart flyout. It uses `useStore` from `@nanostores/preact` to subscribe to `isCartOpen` and `cartItems` stores. The flyout is conditionally rendered based on `isCartOpen`, displaying a list of items or an 'empty cart' message.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_16

LANGUAGE: JSX
CODE:
```
// src/components/CartFlyout.jsx
import { useStore } from '@nanostores/preact';
import { isCartOpen, cartItems } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  return $isCartOpen ? (
    <aside>
      {Object.values($cartItems).length ? (
        <ul>
          {Object.values($cartItems).map(cartItem => (
            <li>
              <img src={cartItem.imageSrc} alt={cartItem.name} />
              <h3>{cartItem.name}</h3>
              <p>Quantity: {cartItem.quantity}</p>
            </li>
          ))}
        </ul>
      ) : <p>Your cart is empty!</p>}
    </aside>
  ) : null;
}
```

----------------------------------------

TITLE: Accessing Props from getStaticPaths in Astro Component
DESCRIPTION: This code snippet shows how to access props passed from `getStaticPaths()` in an Astro component. The `getStaticPaths()` function returns an array of objects with `params` and `props`. The component then accesses these `params` and `props` using `Astro.params` and `Astro.props` respectively.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/api-reference.mdx#_snippet_2

LANGUAGE: astro
CODE:
```
---
export function getStaticPaths() {
  return [
    { params: { id: '1' }, props: { author: 'Blu' } },
    { params: { id: '2' }, props: { author: 'Erika' } },
    { params: { id: '3' }, props: { author: 'Matthew' } }
  ];
}

const { id } = Astro.params;
const { author } = Astro.props;
---
```

----------------------------------------

TITLE: Importing Astro Component
DESCRIPTION: This snippet demonstrates how to import an Astro component named `DontEditWarning` from a relative path within an Astro file. This component is used to display a warning about not directly editing auto-generated files.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/errors/get-static-paths-required.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
import DontEditWarning from '~/components/DontEditWarning.astro'
```

----------------------------------------

TITLE: Displaying Images from public/ Directory
DESCRIPTION: Shows how to display an image located in the `public/` directory using the `<img>` tag. The `src` attribute is set to the path of the image relative to the `public/` directory.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_10

LANGUAGE: astro
CODE:
```
<img src="/images/public-cat.jpg" alt="Un chat qui dort." >
```

----------------------------------------

TITLE: Accessing and Setting Typed Session Data in Astro Components (Astro/TypeScript)
DESCRIPTION: This Astro component snippet illustrates how to access and set session data after defining its types. It shows type inference for `cart` (as `string[] | undefined`) and `something` (as `any` due to being untyped), and demonstrates a type error when attempting to set `user` with an incorrect type, highlighting the benefits of type-checking.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/sessions.mdx#_snippet_7

LANGUAGE: Astro
CODE:
```
const cart = await Astro.session?.get('cart');
// const cart: string[] | undefined

const something = await Astro.session?.get('something');
// const something: any

Astro.session?.set('user', { id: 1, name: 'Houston' });
// Error: Argument of type '{ id: number; name: string }' is not assignable to parameter of type '{ id: string; name: string; }'.
```

----------------------------------------

TITLE: Filtering Comments with `like()` in Astro DB
DESCRIPTION: This snippet demonstrates how to filter records in an Astro DB `Comment` table using the `like()` operator from Drizzle ORM. It queries for all comments where the `body` column contains the phrase 'Astro DB', showcasing partial select capabilities.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/astro-db.mdx#_snippet_24

LANGUAGE: Astro
CODE:
```
--- import { db, Comment, like } from 'astro:db';

const comments = await db.select().from(Comment).where(
    like(Comment.body, '%Astro DB%')
);
---
```

----------------------------------------

TITLE: Generating Static Paths for Blog Posts in Astro
DESCRIPTION: This snippet extends the `getStaticPaths` function to return an array of objects, each containing `params` and `props`. The `params.slug` is derived from the blog post's URL slug, enabling Astro to generate static routes, and `props.blogPost` passes the full blog post data to the page component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_20

LANGUAGE: Astro
CODE:
```
---
import { deliveryClient } from '../../lib/kontent';
import type { BlogPost } from '../../models';
import { contentTypes } from '../../models/project/contentTypes';

export async function getStaticPaths() {
    const blogPosts = await deliveryClient
        .items<BlogPost>()
        .type(contentTypes.blog_post.codename)
        .toPromise()

    return blogPosts.data.items.map(blogPost => ({
        params: { slug: blogPost.elements.url_slug.value },
        props: { blogPost }
    }))
}
---
```

----------------------------------------

TITLE: Nesting Astro Actions in a Separate File (TypeScript)
DESCRIPTION: This snippet demonstrates how to organize related actions, such as `getUser` and `createUser`, into a nested `user` object within a separate TypeScript file. This promotes modularity and better code organization for server-side actions.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/actions.mdx#_snippet_7

LANGUAGE: TypeScript
CODE:
```
// src/actions/user.ts
import { defineAction } from 'astro:actions';

export const user = {
  getUser: defineAction(/* ... */),
  createUser: defineAction(/* ... */),
}
```

----------------------------------------

TITLE: Fetching All Posts from Cosmic in JavaScript
DESCRIPTION: This JavaScript function `getAllPosts` uses the Cosmic SDK to connect to your Cosmic bucket and retrieve all objects of type 'posts'. It specifically selects and returns the 'title', 'slug', 'metadata', and 'created_at' properties for each post, leveraging environment variables for secure API access.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/cosmic.mdx#_snippet_4

LANGUAGE: js
CODE:
```
// src/lib/cosmic.js
import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY
})

export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at')
  return data.objects
}
```

----------------------------------------

TITLE: Creating Responsive Images with Astro's Picture Component
DESCRIPTION: This snippet shows how to use the `<Picture />` component from `astro:assets` to create responsive images with multiple formats. The `formats` property accepts an array of image types (e.g., 'avif', 'webp'), allowing the browser to choose the most suitable source. `alt` is a mandatory attribute.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
--- 
import { Picture } from 'astro:assets';
import myImage from '../assets/my_image.png'; // Image is 1600x900
---

<!-- `alt` is mandatory on the Picture component -->
<Picture src={myImage} formats={['avif', 'webp']} alt="A description of my image." />
```

----------------------------------------

TITLE: HTML output with srcset generated from densities
DESCRIPTION: This HTML shows the output of the previous Astro component, with the `srcset` attribute generated based on the specified densities.  The `src` attribute provides a fallback image.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_7

LANGUAGE: html
CODE:
```
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 1.5x
    /_astro/my_image.hash.webp 2x
  "
  alt="Une description de mon image."
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>
```

----------------------------------------

TITLE: Imported vs Scoped Styles (Order) in Astro
DESCRIPTION: Demonstrates the cascading order between imported styles and scoped styles within an Astro component. When both have the same specificity, the scoped style (appearing last in Astro's evaluation order) takes precedence over the imported style.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_18

LANGUAGE: Astro
CODE:
```
---
import "./make-it-purple.css"
---
<style>
  h1 { color: red }
</style>
<div>
  <h1>
    This header will be red!
  </h1>
</div>
```

----------------------------------------

TITLE: Using Astro Picture Component for Responsive Images
DESCRIPTION: This code shows how to use the Astro Picture component to display responsive images in different formats (avif, webp, png). The `formats` property specifies the image formats to use in the `<source>` tags.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/modules/astro-assets.mdx#_snippet_11

LANGUAGE: astro
CODE:
```
---
import { Picture } from 'astro:assets';
import myImage from "../assets/my_image.png"; // 1600x900의 이미지
---

<!-- Picture 컴포넌트에서는 'alt'가 필수입니다. -->
<Picture src={myImage} formats={['avif', 'webp']} alt="A description of my image." />
```

----------------------------------------

TITLE: HTML Output of Astro Picture Component
DESCRIPTION: This is the HTML output generated by the Astro Picture component when using the `formats` property. It shows the `<source>` tags for each specified format and the `<img>` tag as a fallback.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_12

LANGUAGE: HTML
CODE:
```
<picture>
  <source srcset="/_astro/my_image.hash.avif" type="image/avif" />
  <source srcset="/_astro/my_image.hash.webp" type="image/webp" />
  <img
    src="/_astro/my_image.hash.png"
    width="1600"
    height="900"
    decoding="async"
    loading="lazy"
    alt="A description of my image."
  />
</picture>
```

----------------------------------------

TITLE: Seeding Astro DB with Type-Safe Table Reference (JavaScript)
DESCRIPTION: This code demonstrates how to use `asDrizzleTable()` to create a type-safe reference to the `Pets` table within an Astro DB seed file. It then inserts two new rows, 'Palomita' and 'Pan', into the `Pets` table, ensuring type checking during the operation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/astro-db.mdx#_snippet_40

LANGUAGE: js
CODE:
```
// my-integration/seed.ts
import { asDrizzleTable } from '@astrojs/db/utils';
import { db } from 'astro:db';
import { Pets } from './config';

export default async function() {
  const typeSafePets = asDrizzleTable('Pets', Pets);

  await db.insert(typeSafePets).values([
    { name: 'Palomita', species: 'cat' },
    { name: 'Pan', species: 'dog' }
  ]);
}
```

----------------------------------------

TITLE: Authorizing Remote Image Patterns in Astro Configuration
DESCRIPTION: Illustrates how to use `image.remotePatterns` in `astro.config.mjs` to define patterns for remote image URLs that are allowed for optimization, such as requiring the HTTPS protocol.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_13

LANGUAGE: ts
CODE:
```
// astro.config.mjs
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }],
  }
});
```

----------------------------------------

TITLE: Importing Assets with ESM in Astro Components
DESCRIPTION: This Astro snippet shows how to import an image asset from the `src/` directory using an ESM import. Astro resolves the URL and can apply build optimizations like filename hashing, improving caching and performance.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v1.mdx#_snippet_18

LANGUAGE: Astro
CODE:
```
---
// Example: Astro will include this image file in your final build
import imgUrl from './penguin.png';
---
<img src={imgUrl} />
```

----------------------------------------

TITLE: Toggling Cart Flyout State with Nanostores (Multi-Framework)
DESCRIPTION: These snippets illustrate how to update the `isCartOpen` atom from a button click across various UI frameworks. They demonstrate importing the `isCartOpen` store, reading its current value using framework-specific `useStore` hooks (or Svelte's `$`), and then toggling its state using the `.set()` method when the button is clicked.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_8

LANGUAGE: Preact
CODE:
```
// src/components/CartFlyoutToggle.jsx
import { useStore } from '@nanostores/preact';
import { isCartOpen } from '../cartStore';

export default function CartButton() {
  // read the store value with the `useStore` hook
  const $isCartOpen = useStore(isCartOpen);
  // write to the imported store using `.set`
  return (
    <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>
  )
}
```

LANGUAGE: React
CODE:
```
// src/components/CartFlyoutToggle.jsx
import { useStore } from '@nanostores/react';
import { isCartOpen } from '../cartStore';

export default function CartButton() {
  // read the store value with the `useStore` hook
  const $isCartOpen = useStore(isCartOpen);
  // write to the imported store using `.set`
  return (
    <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>
  )
}
```

LANGUAGE: Solid
CODE:
```
// src/components/CartFlyoutToggle.jsx
import { useStore } from '@nanostores/solid';
import { isCartOpen } from '../cartStore';

export default function CartButton() {
  // read the store value with the `useStore` hook
  const $isCartOpen = useStore(isCartOpen);
  // write to the imported store using `.set`
  return (
    <button onClick={() => isCartOpen.set(!$isCartOpen())}>Cart</button>
  )
}
```

LANGUAGE: Svelte
CODE:
```
<!--src/components/CartFlyoutToggle.svelte-->
<script>
  import { isCartOpen } from '../cartStore';
</script>

<!--use "$" to read the store value-->
<button on:click={() => isCartOpen.set(!$isCartOpen)}>Cart</button>
```

LANGUAGE: Vue
CODE:
```
<!--src/components/CartFlyoutToggle.vue-->
<template>
  <!--write to the imported store using `.set`-->
  <button @click="isCartOpen.set(!$isCartOpen)">Cart</button>
</template>

<script setup>
  import { isCartOpen } from '../cartStore';
  import { useStore } from '@nanostores/vue';

  // read the store value with the `useStore` hook
  const $isCartOpen = useStore(isCartOpen);
</script>
```

----------------------------------------

TITLE: Importing Box Component in Astro
DESCRIPTION: This snippet imports the `Box` component from a tutorial-specific path, enabling its use for structuring content within the Astro page. This demonstrates how to import components from nested directories in an Astro project.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/2-pages/index.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
import Box from '~/components/tutorial/Box.astro';
```

----------------------------------------

TITLE: Filtering Drupal JSON:API Results (HTTP)
DESCRIPTION: Shows how to apply simple key-value filters to JSON:API requests using the `filter` query parameter. This allows for retrieving subsets of data based on specified criteria.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/drupal.mdx#_snippet_7

LANGUAGE: HTTP
CODE:
```
/jsonapi/node/article?filter[title]=Testing JSON:API&filter[status]=1
```

LANGUAGE: HTTP
CODE:
```
/jsonapi/node/article/2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e?fields[node--article]=title&filter[title]=Testing JSON:API
```

----------------------------------------

TITLE: Generating Static Paths for Astro Article Pages
DESCRIPTION: This Astro snippet defines the `getStaticPaths` function, crucial for static site generation (SSG) in Astro. It fetches all articles from Strapi and maps them to an array of `params` (slug) and `props` (full article object), enabling Astro to pre-render individual article pages at build time.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/strapi.mdx#_snippet_7

LANGUAGE: Astro
CODE:
```
--- import fetchApi from '../../lib/strapi';
import type Article from '../../interfaces/article';

export async function getStaticPaths() {
  const articles = await fetchApi<Article[]>({ endpoint: 'articles', wrappedByKey: 'data', });

  return articles.map((article) => ({
    params: { slug: article.attributes.slug },
    props: article,
  }));
}
type Props = Article;

const article = Astro.props;
---
```

----------------------------------------

TITLE: Fetching Typed Blog Posts in Astro
DESCRIPTION: This snippet demonstrates how to fetch a list of blog posts from Kontent.ai using the `deliveryClient` in an Astro page's frontmatter. It uses a strongly typed `BlogPost` model and `contentTypes` for type-safe content retrieval. The `toPromise()` method is used to execute the query.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_16

LANGUAGE: Astro
CODE:
```
---
import { deliveryClient } from '../lib/kontent';
import type { BlogPost } from '../models';
import { contentTypes } from '../models/project/contentTypes';

const blogPosts = await deliveryClient
    .items<BlogPost>
    .type(contentTypes.blog_post.codename)
    .toPromise()
---
```

----------------------------------------

TITLE: Configuring Font Family with Tailwind CSS 3.0
DESCRIPTION: This JavaScript snippet for `tailwind.config.mjs` shows how to extend Tailwind CSS 3.0's default theme to include the custom font. It sets the `sans` font family to use the `--font-roboto` CSS variable, enabling its use via Tailwind's `font-sans` utility class.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_6

LANGUAGE: JavaScript
CODE:
```
/** @type {import("tailwindcss").Config} */
export default {
content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
theme: {
    extend: {},
    fontFamily: {
        sans: ["var(--font-roboto)"]
    }
},
plugins: []
};
```

----------------------------------------

TITLE: Dynamically Returning Tag Paths in Astro's getStaticPaths
DESCRIPTION: This JavaScript snippet updates the `return` statement within Astro's `getStaticPaths` function. It replaces a hardcoded list of tag paths with a dynamic generation process. It maps over the `uniqueTags` array, creating an object for each tag that includes its `params` and a `posts` prop containing only the posts associated with that specific tag, thus pre-filtering the data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/2.mdx#_snippet_6

LANGUAGE: JavaScript
CODE:
```
return [
  {params: {tag: "astro"}, props: {posts: allPosts}},
  {params: {tag: "successes"}, props: {posts: allPosts}},
  {params: {tag: "community"}, props: {posts: allPosts}},
  {params: {tag: "blogging"}, props: {posts: allPosts}},
  {params: {tag: "setbacks"}, props: {posts: allPosts}},
  {params: {tag: "learning in public"}, props: {posts: allPosts}}
]

return uniqueTags.map((tag) => {
  const filteredPosts = allPosts.filter((post: any) => post.frontmatter.tags.includes(tag));
  return {
    params: { tag },
    props: { posts: filteredPosts },
  };
});
```

----------------------------------------

TITLE: Accessing Locals in Astro Component
DESCRIPTION: This snippet demonstrates how to access values stored in `Astro.locals` within an Astro component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/api-reference.mdx#_snippet_27

LANGUAGE: astro
CODE:
```
---
const title = Astro.locals.title;
---
<h1>{title}</h1>
```

----------------------------------------

TITLE: Using the Image Component in Astro
DESCRIPTION: This code snippet demonstrates how to use the Image component in an Astro component to display an image. It imports the Image component and an image file, then renders the image with a required alt attribute.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
--- 
// import the Image component and the image
import { Image } from 'astro:assets';
import myImage from "../assets/my_image.png"; // Image is 1600x900
---

<!-- `alt` is mandatory on the Image component -->
<Image src={myImage} alt="A description of my image." />
```

----------------------------------------

TITLE: Installing Nano Stores with Vue
DESCRIPTION: Installs the Nano Stores core library and its official helper package for Vue.js, allowing for reactive state management and integration within Vue applications.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_5

LANGUAGE: shell
CODE:
```
npm install nanostores @nanostores/vue
```

----------------------------------------

TITLE: Extracting Unique Tags in Astro
DESCRIPTION: This snippet demonstrates how to extract all unique tags from blog posts using `Astro.glob` to fetch all Markdown files. It maps over posts to get tags, flattens the array, and uses a `Set` to ensure uniqueness, finally converting it back to an array. This `uniqueTags` array will then be used to dynamically generate tag pages.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/tutorial/5-astro-api/2.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
 const allPosts = await Astro.glob('../posts/*.md');
 
 const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
```

----------------------------------------

TITLE: Netlifyアダプターを追加する - shell
DESCRIPTION: このコマンドは、NetlifyアダプターをAstroプロジェクトに追加します。これにより、AstroはNetlifyランタイム上でプロジェクトを実行できるようになり、オンデマンドレンダリングが可能になります。また、`astro.config.mjs`ファイルも自動的に更新されます。
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/on-demand-rendering.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
npx astro add netlify
```

----------------------------------------

TITLE: Displaying Hardcoded Tags in Astro
DESCRIPTION: This snippet illustrates how to define a static array of tags in the Astro component's frontmatter. It then uses JavaScript's `map()` method within the HTML template to iterate over the `tags` array and render each tag as a list item within an unordered list.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/3.mdx#_snippet_2

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';    
const tags = ['astro', 'blogging', 'learning in public', 'successes', 'setbacks', 'community'];
const pageTitle = "Tag Index";
---
<BaseLayout pageTitle={pageTitle}>
  <ul>
    {tags.map((tag) => <li>{tag}</li>)}
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Netlifyアダプターを追加する - shell
DESCRIPTION: このコマンドは、NetlifyアダプターをAstroプロジェクトに追加します。これにより、AstroはNetlifyランタイム上でプロジェクトを実行できるようになり、オンデマンドレンダリングが可能になります。また、`astro.config.mjs`ファイルも自動的に更新されます。
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/on-demand-rendering.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
pnpm astro add netlify
```

----------------------------------------

TITLE: Using the Picture component in Astro
DESCRIPTION: This example demonstrates how to use the Astro `Picture` component to display an image with multiple formats. The `formats` array specifies the image formats to generate, allowing the browser to choose the most efficient format.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_11

LANGUAGE: astro
CODE:
```
---
import { Picture } from 'astro:assets';
import myImage from "../assets/mon_image.png"; // La résolution de l'image est de 1600x900
---

<!-- `alt` est obligatoire sur le composant Picture -->
<Picture src={myImage} formats={['avif', 'webp']} alt="Une description de mon image." />
```

----------------------------------------

TITLE: HTML Output of the Picture Component
DESCRIPTION: Shows the HTML output generated by the Astro Picture component, including the <picture> tag with the specified attributes, the <source> tag for WebP images, and the <img> tag with optimized attributes.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_14

LANGUAGE: html
CODE:
```
<!-- Output -->
<picture style="background-color: red;">
  <source srcset="/_astro/my_image.hash.webp" type="image/webp" />
  <img
    src="/_astro/my_image.hash.png"
    alt="A description of my image."
    width="1600"
    height="900"
    loading="lazy"
    decoding="async"
  />
</picture>
```

----------------------------------------

TITLE: Fetching All Blog Posts for SSG in Astro
DESCRIPTION: This snippet defines the `getStaticPaths` function in Astro for Static Site Generation. It fetches all blog posts from Flotiq using the `BlogpostAPI.list()` method and maps them to `params` and `props` for individual page generation. This ensures all blog posts are pre-rendered at build time.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/flotiq.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
import type { Blogpost } from "flotiq-api-ts";
import { flotiq } from "../../lib/flotiq";

export async function getStaticPaths() {
  const posts = await flotiq.BlogpostAPI.list();
  return posts.data?.map((post) => ({
    params: { slug: post.slug },
    props: post
  })) || []
}
---
```

----------------------------------------

TITLE: Composing Components in Astro
DESCRIPTION: Illustrates how to build more complex user interfaces by composing smaller, reusable components. Shows importing a `Button` component and using multiple instances of it within a parent `ButtonGroup` component's template.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/astro-components.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import Button from './Button.astro';
---
<div>
  <Button title="Button 1" />
  <Button title="Button 2" />
  <Button title="Button 3" />
</div>
```

----------------------------------------

TITLE: Migrating Markdown Content Fetching to Astro.glob() (JavaScript)
DESCRIPTION: This snippet shows the transition from the deprecated `Astro.fetchContent()` to the new `await Astro.glob()` API for importing Markdown content in Astro v0.26+. The `Astro.glob()` method allows direct ESM imports of Markdown files, improving performance and aligning with modern JavaScript practices. It's crucial to update existing code to use `await` with `Astro.glob()`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/upgrade-to/v1.mdx#_snippet_9

LANGUAGE: JavaScript
CODE:
```
// v0.25
let allPosts = Astro.fetchContent('./posts/*.md');
// v0.26+
let allPosts = await Astro.glob('./posts/*.md');
```

----------------------------------------

TITLE: Registering a Local Custom Font in CSS
DESCRIPTION: This CSS snippet defines a custom font family named 'DistantGalaxy' using the `@font-face` rule. It specifies the path to the font file (`DistantGalaxy.woff`) located in the `public/fonts/` directory, along with font weight, style, and display properties. This rule makes the font available for use in CSS stylesheets.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/fonts.mdx#_snippet_0

LANGUAGE: css
CODE:
```
/* Register your custom font family and tell the browser where to find it. */
@font-face {
  font-family: 'DistantGalaxy';
  src: url('/fonts/DistantGalaxy.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

----------------------------------------

TITLE: Adding Remark Plugins to Markdown Processing
DESCRIPTION: This code illustrates how to integrate `remark` plugins, such as `remark-toc`, into Astro's Markdown processing pipeline using the `markdown.remarkPlugins` option. Plugins can be imported and applied as functions with optional configuration, allowing for extensive customization of Markdown content generation.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/configuration-reference.mdx#_snippet_53

LANGUAGE: js
CODE:
```
import remarkToc from 'remark-toc';
{
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: "contents"} ] ]
  }
}
```

----------------------------------------

TITLE: Injecting HTML from a Promise Response with `set:html` (Astro)
DESCRIPTION: Illustrates how `set:html` can directly consume a `Promise<Response>` object, typically from a `fetch()` call. This is beneficial for integrating external HTML content, like old blog posts from a previous static site.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/directives-reference.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
<article set:html={fetch('http://example/old-posts/making-soup.html')}></article>
```

----------------------------------------

TITLE: Getting Session Data with Astro.session (Astro)
DESCRIPTION: This snippet demonstrates how to retrieve session data using `Astro.session?.get()`. It fetches the 'cart' item from the session, which is then used to display the number of items in a shopping cart. This method is asynchronous and returns a Promise.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/api-reference.mdx#_snippet_27

LANGUAGE: Astro
CODE:
```
---const cart = await Astro.session?.get('cart');---<button>🛒 {cart?.length}</button>
```

----------------------------------------

TITLE: Fetching Untyped Blog Posts in TypeScript
DESCRIPTION: This snippet shows an alternative way to fetch blog posts from Kontent.ai without relying on generated models. It uses a string literal for the content type, making it suitable for scenarios where model generation is skipped.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_17

LANGUAGE: TypeScript
CODE:
```
const blogPosts = await deliveryClient
    .items()
    .type("blogPost")
    .toPromise()
```

----------------------------------------

TITLE: Resolving Image Sources with `resolveSrc()` in TypeScript
DESCRIPTION: This asynchronous function resolves various types of image sources, including direct paths, `ImageMetadata` objects, and Promises (e.g., from dynamic `import()`). It ensures that the final `src` is extracted and returned, handling asynchronous resolutions.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/image-service-reference.mdx#_snippet_15

LANGUAGE: TypeScript
CODE:
```
import { resolveSrc } from 'astro/assets/utils';
import localImage from "./images/photo.jpg";

const resolvedLocal = await resolveSrc(localImage);
// will be `{ src: '/images/photo.jpg', width: 800, height: 600, format: 'jpg' }`

const resolvedRemote = await resolveSrc("https://example.com/remote-img.jpg");
// will be `"https://example.com/remote-img.jpg"`

const resolvedDynamic = await resolveSrc(import("./images/dynamic-image.jpg"))
// will be `{ src: '/images/dynamic-image.jpg', width: 800, height: 600, format: 'jpg' }`
```

----------------------------------------

TITLE: Example Astro Partial for htmx Interaction
DESCRIPTION: This Astro partial is designed to be loaded dynamically by a client-side library like htmx. It exports `partial = true` and provides simple HTML content that will replace a target element on the main page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/astro-pages.mdx#_snippet_7

LANGUAGE: Astro
CODE:
```
---
export const partial = true;
---
<div>I was clicked!</div>
```

----------------------------------------

TITLE: Netlifyアダプターを追加する - shell
DESCRIPTION: このコマンドは、NetlifyアダプターをAstroプロジェクトに追加します。これにより、AstroはNetlifyランタイム上でプロジェクトを実行できるようになり、オンデマンドレンダリングが可能になります。また、`astro.config.mjs`ファイルも自動的に更新されます。
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/on-demand-rendering.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
yarn astro add netlify
```

----------------------------------------

TITLE: Installing Ghost Content API Dependencies with Yarn
DESCRIPTION: This snippet provides the Yarn commands to install the official Ghost Content API wrapper (`@tryghost/content-api`) and its TypeScript type definitions (`@types/tryghost__content-api`). These packages are necessary for interacting with the Ghost CMS from an Astro project.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/ghost.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
yarn add @tryghost/content-api
yarn add --dev @types/tryghost__content-api
```

----------------------------------------

TITLE: Complete Blog Page with BlogPost Component
DESCRIPTION: This code shows the final `src/pages/blog.astro` file, including the `BlogPost` component import and its usage within the page's main template to render the list of blog posts.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/1.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../layouts/BaseLayout.astro';
import BlogPost from '../components/BlogPost.astro';
const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
const pageTitle = "My Astro Learning Blog"
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    {allPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title} />)}
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Adding Item to Cart Form - Svelte
DESCRIPTION: This Svelte component provides an 'Add to Cart' form. It imports `addCartItem` and `isCartOpen` from `cartStore`, hardcodes an astronaut figurine item, and defines an `addToCart` function that updates the cart state. The form uses `on:submit|preventDefault` for event handling.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_14

LANGUAGE: Svelte
CODE:
```
<!--src/components/AddToCartForm.svelte-->
<form on:submit|preventDefault={addToCart}>
  <slot></slot>
</form>

<script>
  import { addCartItem, isCartOpen } from '../cartStore';

  // we'll hardcode the item info for simplicity!
  const hardcodedItemInfo = {
    id: 'astronaut-figurine',
    name: 'Astronaut Figurine',
    imageSrc: '/images/astronaut-figurine.png',
  }

  function addToCart() {
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }
</script>
```

----------------------------------------

TITLE: Consuming a Slot with Function Children and Arguments in Astro
DESCRIPTION: This snippet shows how a parent component (`index.astro`) consumes the `<Shout />` component, passing a callback function as a child to its default slot. The callback receives the `message` argument provided by `Astro.slots.render()` in the `<Shout />` component, demonstrating how to render dynamic content based on data passed from the parent.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/astro-syntax.mdx#_snippet_14

LANGUAGE: astro
CODE:
```
---
import Shout from "../components/Shout.astro";
---
<Shout message="slots!">
  {(message) => <div>{message}</div>}
</Shout>

<!-- renders as <div>SLOTS!</div> -->
```

----------------------------------------

TITLE: Generated HTML for Responsive Astro Image
DESCRIPTION: This HTML code shows the output generated by the Astro `<Image />` component with a constrained layout. It includes the `srcset` and `sizes` attributes for responsive image loading, as well as styling for proper resizing within its container.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/experimental-flags/responsive-images.mdx#_snippet_4

LANGUAGE: html
CODE:
```
<img
  src="/_astro/my_image.hash3.webp"
  srcset="/_astro/my_image.hash1.webp 640w,
      /_astro/my_image.hash2.webp 750w,
      /_astro/my_image.hash3.webp 800w,
      /_astro/my_image.hash4.webp 828w,
      /_astro/my_image.hash5.webp 1080w,
      /_astro/my_image.hash6.webp 1280w,
      /_astro/my_image.hash7.webp 1600w"
  alt="Une description de mon image."
  sizes="(min-width: 800px) 800px, 100vw"
  loading="lazy"
  decoding="async"
  fetchpriority="auto"
  width="800"
  height="600"
  style="--fit: cover; --pos: center;"
  data-astro-image="constrained"
>
```

----------------------------------------

TITLE: Displaying Images in React Components using HTML <img>
DESCRIPTION: This React component shows how to display an image using a standard HTML <img> tag. It requires importing the image asset first, then accessing its `src` property to set the image source, which is suitable for use within UI framework components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/images.mdx#_snippet_5

LANGUAGE: JSX
CODE:
```
import stars from "../assets/stars.png";

export default function ReactImage() {
  return (
    <img src={stars.src} alt="A starry night sky." />
  )
}
```

----------------------------------------

TITLE: Installing Nano Stores
DESCRIPTION: These commands install the Nano Stores library using different package managers (npm, pnpm, yarn), making it available for use in your Astro project. Choose the command corresponding to your preferred package manager.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
npm install nanostores
```

LANGUAGE: shell
CODE:
```
pnpm add nanostores
```

LANGUAGE: shell
CODE:
```
yarn add nanostores
```

----------------------------------------

TITLE: Adding TypeScript Type Declarations for YAML Imports
DESCRIPTION: This TypeScript declaration file (`.d.ts`) provides type hints for `.yml` file imports, improving editor support and type checking. It declares a module for `*.yml` files, specifying that their default export is of type `any`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/add-yaml-support.mdx#_snippet_5

LANGUAGE: ts
CODE:
```
// Specify the file extension you want to import
declare module "*.yml" {
  const value: any; // Add type definitions here if desired
  export default value;
}
```

----------------------------------------

TITLE: Displaying Cart Flyout with JSX (Solid)
DESCRIPTION: This SolidJS component displays the shopping cart flyout, leveraging `useStore` from `@nanostores/solid` to reactively access `isCartOpen` and `cartItems` from `../cartStore`. It conditionally renders the flyout and iterates through cart items, noting the function call syntax for accessing store values in Solid.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/recipes/sharing-state-islands.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
// src/components/CartFlyout.jsx
import { useStore } from '@nanostores/solid';
import { isCartOpen, cartItems } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  return $isCartOpen() ? (
    <aside>
      {Object.values($cartItems()).length ? (
        <ul>
          {Object.values($cartItems()).map(cartItem => (
            <li>
              <img src={cartItem.imageSrc} alt={cartItem.name} />
              <h3>{cartItem.name}</h3>
              <p>Quantity: {cartItem.quantity}</p>
            </li>
          ))}
        </ul>
      ) : <p>Your cart is empty!</p>}
    </aside>
  ) : null;
}
```

----------------------------------------

TITLE: Using ReadMore Component with Content (Astro/HTML)
DESCRIPTION: This snippet shows how to use the `ReadMore` Astro component, wrapping specific content within its tags. The content inside will be displayed by the `ReadMore` component, potentially with an option to expand or hide it. It requires the component to be previously imported.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/index.mdx#_snippet_3

LANGUAGE: Astro/HTML
CODE:
```
<ReadMore>Find more recipes written and submitted by the community at [Astro Tips](https://astro-tips.dev).</ReadMore>
```

----------------------------------------

TITLE: Defining an Astro Page Partial
DESCRIPTION: This Astro component demonstrates how to mark a page as a partial by exporting `partial = true`. Partials are not full HTML documents and are intended for dynamic content updates via client-side libraries.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/astro-pages.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
export const partial = true;
---
<li>I'm a partial!</li>
```

----------------------------------------

TITLE: Importing Nested Astro Actions into Index File (TypeScript)
DESCRIPTION: This code shows how to import a previously defined nested action object (e.g., `user`) into the main `src/actions/index.ts` file. The imported object is then added as a top-level key to the `server` object, making its nested actions callable.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/actions.mdx#_snippet_8

LANGUAGE: TypeScript
CODE:
```
import { user } from './user';

export const server = {
  myAction: defineAction({ /* ... */ }),
  user,
}
```

----------------------------------------

TITLE: Integrating Nanostores with AddToCartForm Component
DESCRIPTION: This `AddToCartForm` component demonstrates how to integrate `nanostores` into a UI framework. On form submission, it prevents default behavior, sets `isCartOpen` to `true` to display the cart, and calls `addCartItem` to update the cart state. It imports `addCartItem` and `isCartOpen` directly from the `cartStore`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state-islands.mdx#_snippet_12

LANGUAGE: jsx
CODE:
```
// src/components/AddToCartForm.jsx
import { addCartItem, isCartOpen } from '../cartStore';

export default function AddToCartForm({ children }) {
  // we'll hardcode the item info for simplicity!
  const hardcodedItemInfo = {
    id: 'astronaut-figurine',
    name: 'Astronaut Figurine',
    imageSrc: '/images/astronaut-figurine.png',
  }

  function addToCart(e) {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }

  return (
    <form onSubmit={addToCart}>
      {children}
    </form>
  )
}
```

LANGUAGE: jsx
CODE:
```
// src/components/AddToCartForm.jsx
import { addCartItem, isCartOpen } from '../cartStore';

export default function AddToCartForm({ children }) {
  // we'll hardcode the item info for simplicity!
  const hardcodedItemInfo = {
    id: 'astronaut-figurine',
    name: 'Astronaut Figurine',
    imageSrc: '/images/astronaut-figurine.png',
  }

  function addToCart(e) {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }

  return (
    <form onSubmit={addToCart}>
      {children}
    </form>
  )
}
```

----------------------------------------

TITLE: Configuring Responsive Images in Astro
DESCRIPTION: This JavaScript configuration snippet for `astro.config.mjs` sets up global responsive image behavior. It enables `experimentalLayout` to 'constrained' for all Markdown images and as a default for `<Image />` and `<Picture />` components, and activates `responsiveImages` in experimental settings. These settings can be overridden per component but apply universally to Markdown images.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/responsive-images.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
{
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: 'constrained',
  },
  experimental: {
    responsiveImages: true,
  },
}
```

----------------------------------------

TITLE: Configuring Remote Image Optimization with URL Patterns - JavaScript
DESCRIPTION: This JavaScript snippet shows how to define flexible URL patterns for remote image optimization using `remotePatterns`. It allows processing images from any subdomain of `amazonaws.com` over HTTPS, providing more granular control than `image.domains` for allowing external image sources.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/configuration-reference.mdx#_snippet_49

LANGUAGE: javascript
CODE:
```
{
  image: {
    // Example: allow processing all images from your aws s3 bucket
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.amazonaws.com'
    }]
  }
}
```

----------------------------------------

TITLE: Writing Scoped Styles in Astro
DESCRIPTION: Shows how to define multiple CSS rules within a scoped `<style>` block in an Astro component, which are automatically encapsulated.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
<style>
  h1 {
    color: red;
  }

  .text {
    color: blue;
  }
</style>
```

----------------------------------------

TITLE: Composing Astro Components
DESCRIPTION: Demonstrates how to create a composite component (`ButtonGroup`) by using other components (`Button`). This illustrates the concept of building complex UIs from reusable components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/basics/astro-components.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
import Button from './Button.astro';
---
<div>
  <Button title="ボタン1" />
  <Button title="ボタン2" />
  <Button title="ボタン3" />
</div>
```

----------------------------------------

TITLE: Enabling Experimental Script Order Preservation in Astro Configuration (JavaScript)
DESCRIPTION: This snippet demonstrates how to enable the `experimental.preserveScriptOrder` flag in your Astro configuration file. Setting this boolean flag to `true` ensures that `<style>` and `<script>` tags are rendered in the same order they are declared in the source code, overriding Astro's default behavior of reversing their order.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/preserve-scripts-order.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { defineConfig } from "astro/config"

export default defineConfig({
  experimental: {
    preserveScriptOrder: true
  }
})
```

----------------------------------------

TITLE: Fetching Blog Post Data with String Literals (TypeScript)
DESCRIPTION: This TypeScript code provides an alternative method for fetching blog post data from Kontent.ai. Unlike the previous example, it uses string literals for the `equalsFilter` property ('url_slug') and the content `type` ('blog_post'), which is useful when not utilizing generated types for Kontent.ai models.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/kontent-ai.mdx#_snippet_23

LANGUAGE: TypeScript
CODE:
```
const data = await deliveryClient
        .items()
        .equalsFilter("url_slug", slug ?? '')
        .type("blog_post")
        .limitParameter(1)
        .toPromise()
```

----------------------------------------

TITLE: Displaying a List of Posts in Astro with Ghost Data
DESCRIPTION: This Astro component fetches all posts from Ghost CMS and then renders them as a list of links. Each link navigates to a dynamically generated post page, displaying the post's title. It demonstrates how to iterate over the `posts` array and use `post.slug` for routing and `post.title` for display.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/ghost.mdx#_snippet_7

LANGUAGE: Astro
CODE:
```
--- import { ghostClient } from '../lib/ghost';
const posts = await ghostClient.posts
    .browse({
        limit: 'all',
    })
    .catch((err) => {
        console.error(err);
    });
---

<html lang="en">
    <head>
        <title>Astro + Ghost 👻</title>
    </head>
    <body>

        {
            posts.map((post) => (
                <a href={`/post/${post.slug}`}>
                    <h1> {post.title} </h1>
                </a>
            ))
        }
    </body>
</html>
```

----------------------------------------

TITLE: Displaying Blog Post List with Astro
DESCRIPTION: This snippet demonstrates how to fetch all blog posts from Hashnode using `getAllPosts()` and render them as a list on an Astro page. It iterates through the `allPosts` array to display each post's title, brief, cover image, and a link to its individual page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/hashnode.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
import { getAllPosts } from '../lib/client';

const data = await getAllPosts();
const allPosts = data.publication.posts.edges;

---

<html lang="en">
    <head>
        <title>Astro + Hashnode</title>
    </head>
    <body>

        {
            allPosts.map((post) => (
                <div>
                    <h2>{post.node.title}</h2>
                    <p>{post.node.brief}</p>
                    <img src={post.node.coverImage.url} alt={post.node.title} />
                    <a href={`/post/${post.node.slug}`}>Read more</a>
                </div>
            ))
        }
    </body>
</html>
```

----------------------------------------

TITLE: Defining GraphQL Query for Article by Slug (JavaScript)
DESCRIPTION: This JavaScript snippet defines a GraphQL query string named `GetArticleBySlug`. It's used to fetch a single article from Prepr CMS based on its `slug`. The query retrieves the article's `_id`, `title`, and `content`, which can include both `Text` (with `body` and `text`) and `Assets` (with `url` for images).
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/preprcms.mdx#_snippet_4

LANGUAGE: JavaScript
CODE:
```
const GetArticleBySlug = `
query ($slug: String) {
   Article (slug: $slug) {
     _id
     title
     content {
       __typename
       ... on Text {
         body
         text
       }
       ... on Assets {
         items {
           url
         }
       }
     }
   }
}`

export default GetArticleBySlug
```

----------------------------------------

TITLE: Installing Ghost Content API Dependencies with pnpm
DESCRIPTION: This snippet provides the pnpm commands to install the official Ghost Content API wrapper (`@tryghost/content-api`) and its TypeScript type definitions (`@types/tryghost__content-api`). These packages are necessary for interacting with the Ghost CMS from an Astro project.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/ghost.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
pnpm add @tryghost/content-api
pnpm add --save-dev @types/tryghost__content-api
```

----------------------------------------

TITLE: Generating Dynamic Tag Pages with getStaticPaths in Astro
DESCRIPTION: This Astro snippet defines a dynamic page `src/pages/tags/[tag].astro` that leverages `getStaticPaths()` to generate multiple pages for specific tags. It returns an array of `params` objects, each representing a unique tag, and then uses `Astro.params` to access the current tag value for rendering page content. The page utilizes `BaseLayout.astro` for its structure.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/2.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  return [
    { params: { tag: "astro" } },
    { params: { tag: "successes" } },
    { params: { tag: "community" } },
    { params: { tag: "blogging" } },
    { params: { tag: "setbacks" } },
    { params: { tag: "learning in public" } },
  ];
}

const { tag } = Astro.params;
---
<BaseLayout pageTitle={tag}>
  <p>Posts tagged with {tag}</p>
</BaseLayout>
```

----------------------------------------

TITLE: Passing Astro Image Component as Child to UI Framework Component
DESCRIPTION: This Astro component demonstrates how to wrap an Astro <Image /> component within a UI framework component (e.g., ReactComponent). This allows the framework component to receive the statically generated image content as a child, bypassing the limitation of using <Image /> directly within framework components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/images.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
import ReactComponent from './ReactComponent.jsx';
import { Image } from 'astro:assets';
import stars from '~/stars/docline.png';
---

<ReactComponent>
  <Image src={stars} alt="A starry night sky." />
</ReactComponent>
```

----------------------------------------

TITLE: Using Image Component with Different Layouts
DESCRIPTION: This code snippet demonstrates how to use the Image component with different layout properties (constrained, full-width, and none) to control the responsive behavior of images. It also shows how to import the Image component from astro:assets.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/experimental-flags/responsive-images.mdx#_snippet_2

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} alt="将会使用 constrained 布局" width={800} height={600} />
<Image src={myImage} alt="将会使用 full-width 布局" layout="full-width" />
<Image src={myImage} alt="将会禁用响应式图像" layout="none" />
```

----------------------------------------

TITLE: Fetching Data in Astro
DESCRIPTION: This code demonstrates how to fetch data in Astro components, including importing local data using `getCollection` and `Astro.glob`, and fetching external data using `fetch`. The data fetching is done in the frontmatter of the Astro component using top-level await.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/de/guides/migrate-to-astro/from-create-react-app.mdx#_snippet_14

LANGUAGE: Astro
CODE:
```
---
import { getCollection } from 'astro:content';

// Hole alle `src/content/blog/` Einträge
const allBlogPosts = await getCollection('blog');

// Hole alle `src/content/posts/` Einträge
const allPosts = await Astro.glob('../pages/posts/*.md');

// Rufe externe Daten ab
const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
const randomUser = data.results[0];
---
```

----------------------------------------

TITLE: Example Astro Project File Tree Structure
DESCRIPTION: This snippet illustrates a common directory and file structure for an Astro project, showcasing the organization of source code, public assets, and configuration files. It highlights typical locations for pages, components, layouts, styles, and content.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/basics/project-structure.mdx#_snippet_0

LANGUAGE: File System Structure
CODE:
```
- public/
  - robots.txt
  - favicon.svg
  - my-cv.pdf
- src/
    - blog/
      - post1.md
      - post2.md
      - post3.md
  - components/
    - Header.astro
    - Button.jsx
  - images/
    - image1.jpg
    - image2.jpg
    - image3.jpg
  - layouts/
    - PostLayout.astro
  - pages/
    - posts/
      - [post].astro
    - about.astro
    - **index.astro**
    - rss.xml.js
  - styles/
    - global.css
  - content.config.ts
- astro.config.mjs
- package.json
- tsconfig.json
```

----------------------------------------

TITLE: Creating a Reusable Image Component
DESCRIPTION: Demonstrates how to create a reusable Astro component for images, wrapping the `<Image />` component to provide default styling and attributes. This allows for consistent image styling across a blog.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_12

LANGUAGE: astro
CODE:
```
---
import { Image } from 'astro:assets';

const { src, ...attrs } = Astro.props;
---
<Image src={src} {...attrs} />

<style>
  img {
    margin-block: 2.5rem;
    border-radius: 0.75rem;
  }
</style>
```

----------------------------------------

TITLE: Marking an Astro Page as Partial
DESCRIPTION: This Astro snippet shows how to declare a page as 'partial' by exporting `const partial = true` in its frontmatter. Partial pages, located in `src/pages/`, do not render as full HTML documents (e.g., no `<!DOCTYPE html>` or scoped styles/scripts). They are designed for dynamic content loading by client-side rendering libraries like htmx, allowing parts of a page to be updated without full page reloads.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/basics/astro-pages.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
---
export const partial = true;
---
<li>我是一个局部页面！</li>
```

----------------------------------------

TITLE: Specifying Unicode Range for Font Loading
DESCRIPTION: This snippet demonstrates how to specify a unicode range for a font. This property determines when a font is downloaded and used based on the presence of characters within the defined range, useful for localization.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_28

LANGUAGE: JavaScript
CODE:
```
unicodeRange: ["U+26"]
```

----------------------------------------

TITLE: Svelte Component Rendering Image
DESCRIPTION: Demonstrates how to render an image in a Svelte component using the standard `<img>` tag. The image source is imported, and its `src` property is used in the `<img>` tag. The `stars` import is a local image from the assets folder.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/images.mdx#_snippet_18

LANGUAGE: svelte
CODE:
```
<script>
  import stars from '../assets/stars.png';
</script>

<img src={stars.src} alt="繁星点点的夜空。" />

```

----------------------------------------

TITLE: Displaying Blog Posts on Astro Page (Astro)
DESCRIPTION: This Astro component demonstrates how to fetch and display a list of blog posts from Prepr CMS. It imports the `Prepr` fetch function and the `GetArticles` GraphQL query, executes the query, and then maps over the retrieved articles to render a linked list of post titles and their slugs on the page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/preprcms.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
import Layout from '../layouts/Layout.astro';
import { Prepr } from '../lib/prepr.js';
import GetArticles from '../queries/get-articles.js';

const response = await Prepr(GetArticles);
const { data } = await response.json();
const articles = data.Articles;
---

<Layout title="My blog site">
  <h1>
    My blog site
	</h1>
	<ul>
    {
      articles.items.map((post) => (
        <li>
          <a href={post._slug}>{post.title}</a>
        </li>
      ))
    }
  </ul>
</Layout>
```

----------------------------------------

TITLE: Gatsby Layout Component (JSX)
DESCRIPTION: This Gatsby JSX component defines a layout structure, importing React, Gatsby's `useStaticQuery` and `graphql` for data fetching, and local `Header` and `Footer` components. It uses `useStaticQuery` to retrieve site metadata, specifically the site title, and renders a layout including the header, a message div, main content (via `children`), and a footer. It expects `message` and `children` as props.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-gatsby.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Component = ({ message, children }) => {
  const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ margin: `0`, maxWidth: `960`}}>{message}</div>
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata} />
    </>
  )
}

export default Component
```

----------------------------------------

TITLE: Markdown Layout Props Example
DESCRIPTION: This JavaScript code shows an example of the `Astro.props` object that a Markdown blog post might pass to a layout. It includes properties like `file`, `url`, `frontmatter`, `headings`, `rawContent`, and `compiledContent`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/basics/layouts.mdx#_snippet_5

LANGUAGE: JavaScript
CODE:
```
Astro.props = {
  file: "/home/user/projects/.../file.md",
  url: "/en/guides/markdown-content/",
  frontmatter: {
    /** ブログ記事のフロントマター */
    title: "Astro 0.18 Release",
    date: "Tuesday, July 27 2021",
    author: "Matthew Phillips",
    description: "Astro 0.18 is our biggest release since Astro launch.",
    /** 生成された値 */
    file: "/home/user/projects/.../file.md",
    url: "/en/guides/markdown-content/"
  },
  headings: [
    {
      "depth": 1,
      "text": "Astro 0.18 Release",
      "slug": "astro-018-release"
    },
    {
      "depth": 2,
      "text": "Responsive partial hydration",
      "slug": "responsive-partial-hydration"
    }
    /* ... */
  ],

  /** Markdownでのみ利用可能 */
  rawContent: () => "# Astro 0.18 Release\nA little over a month ago, the first public beta [...]",
  compiledContent: () => "<h1>Astro 0.18 Release</h1>\n<p>A little over a month ago, the first public beta [...]</p>",
}
```

----------------------------------------

TITLE: Creating Picture Element with Media Queries
DESCRIPTION: This code creates a `<picture>` element that generates a `srcset` with different images displayed based on the screen size. It uses `<source>` elements with `media` attributes to specify the conditions for each image. The `<img>` element provides a fallback for browsers that do not support the `<picture>` element.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/recipes/build-custom-img-component.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

interface Props {
 mobileImgUrl: string | ImageMetadata;
 desktopImgUrl: string | ImageMetadata;
 alt: string;
}

const { mobileImgUrl, desktopImgUrl, alt } = Astro.props;

const mobileImg = await getImage({
 src: mobileImgUrl,
 format: "webp",
 width: 200,
 height: 200,
});

const desktopImg = await getImage({
 src: desktopImgUrl,
 format: "webp",
 width: 800,
 height: 200,
});
---

<picture>
 <source media="(max-width: 799px)" srcset={mobileImg.src} />
 <source media="(min-width: 800px)" srcset={desktopImg.src} />
 <img src={desktopImg.src} alt={alt} />
</picture>
```

----------------------------------------

TITLE: Rendering Hardcoded Tag List in Astro
DESCRIPTION: This snippet illustrates how to display a static list of tags on the `index.astro` page. It defines a `tags` array with predefined strings and uses JavaScript's `map()` method within the Astro component's template to render each tag as a list item within an unordered list. While functional, this approach requires manual updates for new tags.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/tutorial/5-astro-api/3.mdx#_snippet_2

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';    
const tags = ['astro', 'blogging', 'learning in public', 'successes', 'setbacks', 'community']
const pageTitle = "タグインデックス";
---
<BaseLayout pageTitle={pageTitle}>
  <ul>
    {tags.map((tag) => <li>{tag}</li>)}
  </ul>
</BaseLayout>
```

----------------------------------------

TITLE: Adding Integrations to Astro Project
DESCRIPTION: This snippet illustrates how to add multiple integrations, such as React and MDX, to an Astro project's configuration to extend its functionality.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/configuration-reference.mdx#_snippet_10

LANGUAGE: JavaScript
CODE:
```
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
{
  // Example: Add React + MDX support to Astro
  integrations: [react(), mdx()]
}
```

----------------------------------------

TITLE: Injecting HTML from a Promise String with `set:html` (Astro)
DESCRIPTION: Demonstrates using `set:html` with a Promise that resolves to an HTML string. This pattern is useful for injecting dynamically loaded content, such as an article fetched from a database API.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/directives-reference.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import api from '../db/api.js';
---
<article set:html={api.getArticle(Astro.props.id)}></article>
```

----------------------------------------

TITLE: Fetching GitHub Stars in Astro
DESCRIPTION: This Astro component demonstrates server-side data fetching for the 'withastro/astro' GitHub repository's star count directly within the component's frontmatter. It imports `Header` and `Footer` components and applies styling using a `<style>` block, showcasing Astro's approach to data loading and scoped CSS.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-create-react-app.mdx#_snippet_9

LANGUAGE: astro
CODE:
```
---
import Header from './Header.astro';
import Footer from './Footer.astro';
import './layout.css';
const res = await fetch('https://api.github.com/repos/withastro/astro')
const json = await res.json();
const message = json.message;
const stars = json.stargazers_count || 0;
---
<Header />
<p class="banner">Astro has {stars} 🧑‍🚀</p>
<Footer />
<style>
  .banner {
    background-color: #f4f4f4; 
    padding: 1em 1.5em;
    text-align: center;
    margin-bottom: 1em;
  }
</style>
```

----------------------------------------

TITLE: Conditionally Applying Classes with class:list
DESCRIPTION: Demonstrates using the `class:list` directive in Astro to dynamically add or remove CSS classes on an element based on component props or other logic.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_5

LANGUAGE: astro
CODE:
```
---
const { isRed } = Astro.props;
---
<!-- If `isRed` is truthy, class will be "box red". -->
<!-- If `isRed` is falsy, class will be "box". -->
<div class:list={['box', { red: isRed }]}><slot /></div>

<style>
  .box { border: 1px solid blue; }
  .red { border-color: red; }
</style>
```

----------------------------------------

TITLE: Optimized Astro Page with Streamed Components
DESCRIPTION: This refactored Astro page imports and uses the `RandomName` and `RandomFact` components. By delegating data fetching to these components, the `<head>`, `<body>`, and `<h2>` tags can render immediately, and the data for the components is fetched in parallel and streamed to the browser as it becomes available, significantly improving page performance.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/streaming-improve-page-performance.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import RandomName from '../components/RandomName.astro';
import RandomFact from '../components/RandomFact.astro';
---
<html>
  <head>
    <title>A name and a fact</title>
  </head>
  <body>
    <h2>A name</h2>
    <RandomName />
    <h2>A fact</h2>
    <RandomFact />
  </body>
</html>
```

----------------------------------------

TITLE: Using BaseLayout in Astro Page
DESCRIPTION: This snippet demonstrates how to use the `BaseLayout` component in `index.astro`. It imports `BaseLayout` and wraps page-specific content (`<h2>`) within it, showing how a layout component is applied to a page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/4-layouts/1.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
--- import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Home Page";
---
<BaseLayout>
  <h2>My awesome blog subtitle</h2>
</BaseLayout>
```

----------------------------------------

TITLE: Fetching Published Articles from Drupal (TypeScript)
DESCRIPTION: This function, `getArticles()`, is designed to retrieve all published articles from Drupal's JSON:API. It uses `DrupalJsonApiParams` to construct a query string, specifying desired fields like `title`, `path`, `body`, and `created`, and filters the results to include only published content (`status: 1`). The function then leverages `fetchUrl` to execute the request and returns a promise resolving to an array of `DrupalNode` objects.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/drupal.mdx#_snippet_12

LANGUAGE: TypeScript
CODE:
```
import {Jsona} from "jsona";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";
import type {DrupalNode} from "../types.ts";
import type {TJsonApiBody} from "jsona/lib/JsonaTypes";

// Get the Drupal Base Url.
export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;

/**
 * Fetch url from Drupal.
 *
 * @param url
 *
 * @return Promise<TJsonaModel | TJsonaModel[]> as Promise<any>
 */
export const fetchUrl = async (url: string): Promise<any> => {
    const request: Response = await fetch(url);
    const json: string | TJsonApiBody = await request.json();
    const dataFormatter: Jsona = new Jsona();
    return dataFormatter.deserialize(json);
}

/**
 * Get all published articles.
 *
 * @return Promise<DrupalNode[]>
 */
export const getArticles = async (): Promise<DrupalNode[]> => {
    const params: DrupalJsonApiParams = new DrupalJsonApiParams();
    params
        .addFields("node--article", [
            "title",
            "path",
            "body",
            "created",
        ])
        .addFilter("status", "1");
    const path: string = params.getQueryString();
    return await fetchUrl(baseUrl + '/jsonapi/node/article?' + path);
}
```

----------------------------------------

TITLE: Adding JSON-LD Schema with `set:html` (Astro)
DESCRIPTION: Shows how `set:html` can be used with a `<script>` tag to inject dynamically generated JSON-LD schema data. It leverages `JSON.stringify()` to convert a JavaScript object into a JSON string, which is then embedded into the HTML.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/directives-reference.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Houston",
  hasOccupation: {
    "@type": "Occupation",
    name: "Astronaut"
  }
})}/>
```

----------------------------------------

TITLE: Using Fragments with Slots
DESCRIPTION: This example demonstrates how to use Astro's `<Fragment/>` component with the `slot` attribute to pass multiple HTML elements to a component's `<slot/>` placeholder without wrapping them in a `<div>`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/basics/astro-components.mdx#_snippet_12

LANGUAGE: astro
CODE:
```
---
// ヘッドとボディのコンテンツ用の名前付きスロットプレースホルダーをもつカスタムテーブルを作成する
---
<table class="bg-white">
  <thead class="sticky top-0 bg-white"><slot name="header" /></thead>
  <tbody class="[&_tr:nth-child(odd)]:bg-gray-100"><slot name="body" /></tbody>
</table>
```

----------------------------------------

TITLE: Default Responsive Image Styles (CSS)
DESCRIPTION: This CSS snippet defines the default styling for responsive images generated by Astro's image component. It utilizes the `:where()` pseudo-class for zero specificity, making it easy to override. Styles include `object-fit` and `object-position` for all images, and `width: 100%` or `max-width: 100%` for `full-width` and `constrained` layouts respectively.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/responsive-images.mdx#_snippet_5

LANGUAGE: css
CODE:
```
:where([data-astro-image]) {
	object-fit: var(--fit);
	object-position: var(--pos);
}
:where([data-astro-image='full-width']) {
	width: 100%;
}
:where([data-astro-image='constrained']) {
	max-width: 100%;
}
```

----------------------------------------

TITLE: Using Astro's Picture Component for Responsive Images
DESCRIPTION: This code snippet demonstrates how to use the Astro `<Picture />` component to display a responsive image with multiple formats. It imports the `Picture` component and an image file, then renders the image with specified formats.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_6

LANGUAGE: astro
CODE:
```
---
import { Picture } from 'astro:assets';
import myImage from '../assets/my_image.png'; // Image est de 1600x900
---

<!-- `alt` est obligatoire pour le composant Image -->
<Picture src={myImage} formats={['avif', 'webp']} alt="Une description de mon image." />
```

----------------------------------------

TITLE: Checking for ESM Imported Images with `isESMImportedImage()` in TypeScript
DESCRIPTION: This function determines if a given source (either `ImageMetadata` or a string path) represents an ECMAScript Module (ESM) imported image. It's primarily used to differentiate between locally imported assets and simple file paths.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/image-service-reference.mdx#_snippet_13

LANGUAGE: TypeScript
CODE:
```
import { isESMImportedImage } from 'astro/assets/utils';

// Example usage of isESMImportedImage
const imageMetadataExample = {
  src: '/images/photo.jpg',
  width: 800,
  height: 600,
  format: 'jpg',
};

const filePathExample = '/images/photo.jpg';

// Check if the input is an ESM imported image
const isMetadataImage = isESMImportedImage(imageMetadataExample);
console.log(`Is imageMetadataExample an ESM imported image? ${isMetadataImage}`); // Output: true

const isFilePathImage = isESMImportedImage(filePathExample);
console.log(`Is filePathExample an ESM imported image? ${isFilePathImage}`); // Output: false
```

----------------------------------------

TITLE: Composing Astro Components: ButtonGroup Example
DESCRIPTION: Illustrates the concept of component reusability and composability by showing how a ButtonGroup component can be built by importing and rendering multiple instances of a Button component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/basics/astro-components.mdx#_snippet_3

LANGUAGE: Astro
CODE:
```
---
import Button from './Button.astro';
---
<div>
  <Button title="按钮 1" />
  <Button title="按钮 2" />
  <Button title="按钮 3" />
</div>
```

----------------------------------------

TITLE: Validating Remote Resources with Astro Assets (TypeScript)
DESCRIPTION: Determines if a remote resource URL is allowed based on a list of allowed domains and specific remote patterns. This function is crucial for security and content policy enforcement, ensuring only trusted external assets are loaded. It takes the URL string, an array of allowed domains, and an array of `RemotePattern` objects as input.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/image-service-reference.mdx#_snippet_7

LANGUAGE: TypeScript
CODE:
```
import { isRemoteAllowed } from 'astro/assets/utils';

const testImageURL = 'https://example.com/images/test.jpg';
const domains = ['example.com', 'anotherdomain.com'];
const remotePatterns = [
  { protocol: 'https', hostname: 'images.example.com', pathname: '/**' }, // Allow any path under this hostname
];

const url = new URL(testImageURL);
const isAllowed = isRemoteAllowed(url.href, { domains, remotePatterns });

console.log(`Is the remote image allowed? ${isAllowed}`);
```

----------------------------------------

TITLE: Using Images in MDX Files
DESCRIPTION: This code snippet demonstrates how to use images in MDX files in Astro, including local images, images stored in the public directory, and remote images. It shows how to import the Image component and use it with different image sources.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_18

LANGUAGE: mdx
CODE:
```
---
title: Le titre de ma page
---
import { Image } from 'astro:assets';
import rocket from '../assets/rocket.png';

# Ma Page MDX

// Image locale stockée dans le même dossier
![Houston dans la nature](houston.png)

// Image locale stockée dans src/assets/
<Image src={rocket} alt="Une fusée dans l'espace." />
<img src={rocket.src} alt="Une fusée dans l'espace." />
![Une fusée dans l'espace.](../assets/rocket.png)

// Image stockée dans public/images/
<Image src="/images/stars.png" alt="Un ciel étoilé." />
<img src="/images/stars.png" alt="Un ciel étoilé." />
![Un ciel étoilé.](/images/stars.png)

// Image distante sur un autre serveur
<Image src="https://example.com/images/remote-image.png" />
<img src="https://example.com/images/remote-image.png" />
![Astro](https://example.com/images/remote-image.png)

```

----------------------------------------

TITLE: Use Glob Patterns for File Inclusion/Exclusion (JavaScript)
DESCRIPTION: This code snippet demonstrates how to use glob patterns with the `includeFiles` and `excludeFiles` options in the Netlify adapter configuration within your `astro.config.mjs` file. Glob patterns allow you to match multiple files for inclusion or exclusion. This requires the `@astrojs/netlify` package.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/guides/integrations-guide/netlify.mdx#_snippet_18

LANGUAGE: js
CODE:
```
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  adapter: netlify({
    includeFiles: [
      './data/**/*.json'
    ],
    excludeFiles: [
      './node_modules/package/**/*',
      './src/**/*.test.js'
    ]
  }),
});
```

----------------------------------------

TITLE: Configuring Font Display Strategy
DESCRIPTION: This snippet illustrates how to define the font display strategy. It controls how a font is displayed based on its download and readiness status, impacting perceived loading performance.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_27

LANGUAGE: JavaScript
CODE:
```
display: "block"
```

----------------------------------------

TITLE: Image Component Usage
DESCRIPTION: This code snippet demonstrates how to use the Image component to display an image. It imports the Image component and an image file, then renders the image with a required alt attribute.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/modules/astro-assets.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
--- 
// Image 컴포넌트 및 이미지 가져오기
import { Image } from 'astro:assets';
import myImage from "../assets/my_image.png"; // 1600x900의 이미지
---

<!-- Image 컴포넌트에서는 'alt'가 필수입니다. -->
<Image src={myImage} alt="A description of my image." />
```

----------------------------------------

TITLE: オンデマンドレンダリングを有効にする - Astro
DESCRIPTION: このコードスニペットは、Astroページでオンデマンドレンダリングを有効にする方法を示しています。`export const prerender = false`を追加することで、この特定のページはリクエストごとにサーバーでレンダリングされるようになります。他のページはデフォルトで静的に生成されます。
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/on-demand-rendering.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
---
export const prerender = false
---
<html>
<!--
このコンテンツはリクエスト時にサーバーレンダリングされます！
サーバーランタイム用アダプターを追加するだけ！
他のページはビルド時に静的生成されます！
-->
<html>
```

----------------------------------------

TITLE: Importing Astro Image Service Utility Functions
DESCRIPTION: This TypeScript snippet shows how to import various helper functions from `astro/assets/utils`. These utilities are designed to assist in developing custom image services, providing functionalities like remote URL validation, image metadata handling, and transformation hashing.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/image-service-reference.mdx#_snippet_6

LANGUAGE: TypeScript
CODE:
```
import { 
    isRemoteAllowed,
    matchHostname,
    matchPathname,
    matchPattern,
    matchPort,
    matchProtocol,
    isESMImportedImage,
    isRemoteImage,
    resolveSrc,
    imageMetadata,
    emitESMImage,
    getOrigQueryParams,
    inferRemoteSize,
    propsToFilename,
    hashTransform
} from "astro/assets/utils";
```

----------------------------------------

TITLE: Selecting All Comments with Astro DB Drizzle (Astro)
DESCRIPTION: This Astro page snippet demonstrates how to select all rows from the `Comment` table using the Astro DB Drizzle client. It fetches seeded development data and then renders it dynamically within the page template, displaying the author and body of each comment.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/astro-db.mdx#_snippet_20

LANGUAGE: astro
CODE:
```
---
import { db, Comment } from 'astro:db';

const comments = await db.select().from(Comment);
---

<h2>Comments</h2>

{
  comments.map(({ author, body }) => (
    <article>
      <p>Author: {author}</p>
      <p>{body}</p>
    </article>
  ))
}
```

----------------------------------------

TITLE: Generating Individual Blog Posts with Astro Dynamic Routes
DESCRIPTION: This Astro dynamic routing page (`[slug].astro`) uses `getStaticPaths()` to pre-render individual blog post pages at build time. It fetches all posts from Cosmic CMS, creates a route for each post's slug, and passes the post data via `Astro.props`. The HTML markup then renders the post's title, cover image (using `astro:assets`), and rich text content, with `set:html` used for the rich text to correctly render HTML from Cosmic.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/cosmic.mdx#_snippet_7

LANGUAGE: Astro
CODE:
```
--- 
// src/pages/blog/[slug].astro
import { getAllPosts } from '../../lib/cosmic'
import { Image } from 'astro:assets'

export async function getStaticPaths() {
  const data = (await getAllPosts()) || []

  return data.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post }
    }
  })
}

const { post } = Astro.props
---

<article class="mx-auto max-w-screen-md pt-20">
  <section class="border-b pb-8">
    <h1 class="text-4xl font-bold">{post.title}</h1>
    <div class="my-4"></div>
    <span class="text-sm font-semibold">{post.metadata.author?.title}</span>
  </section>
  {
    post.metadata.cover_image && (
      <Image
        src={post.metadata.cover_image.imgix_url}
        format="webp"
        width={1200}
        height={675}
        aspectRatio={16 / 9}
        quality={50}
        alt={`Cover image for the blog ${post.title}`}
        class={'my-12 rounded-md shadow-lg'}
      />
    )
  }
  <div set:html={post.metadata.content} />
</article>
```

----------------------------------------

TITLE: Applying Inline Styles in Astro
DESCRIPTION: Provides examples of applying inline styles to HTML elements in Astro using the `style` attribute, demonstrating both object and string syntax for CSS properties.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_9

LANGUAGE: Astro
CODE:
```
// These are equivalent:
<p style={{ color: "brown", textDecoration: "underline" }}>My text</p>
<p style="color: brown; text-decoration: underline;">My text</p>
```

----------------------------------------

TITLE: Importing ReadMore Component (Astro/JavaScript)
DESCRIPTION: This snippet imports the `ReadMore` component from the `~/components/ReadMore.astro` path. This component is typically used to wrap content that can be expanded or collapsed, often for displaying additional information or links.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/index.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
import ReadMore from '~/components/ReadMore.astro';
```

----------------------------------------

TITLE: Applying Font Family with Standard CSS
DESCRIPTION: This CSS snippet shows how to apply the custom font, referenced by its CSS variable (`--font-roboto`), to the `body` element using the standard `font-family` property within a `<style>` block.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_4

LANGUAGE: CSS
CODE:
```
<style>
body {
    font-family: var(--font-roboto);
}
</style>
```

----------------------------------------

TITLE: Astro Dialog Component Subscribing to Nano Store
DESCRIPTION: This Astro component defines a dialog `div` whose display style is controlled by the `isOpen` Nano Store. It subscribes to changes in the store's value, dynamically showing or hiding the dialog based on whether `isOpen` is `true` or `false`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/sharing-state.mdx#_snippet_3

LANGUAGE: astro
CODE:
```
<div id="dialog" style="display: none">Hello world!</div>

<script>
  import { isOpen } from '../store.js';

  // Listen to changes in the store, and show/hide the dialog accordingly    
  isOpen.subscribe(open => {
    if (open) {
      document.getElementById('dialog').style.display = 'block';
    } else {
      document.getElementById('dialog').style.display = 'none';
    }
  })
</script>
```

----------------------------------------

TITLE: Mapping Drupal Articles to Astro Static Paths
DESCRIPTION: This code expands on the `getStaticPaths()` function, mapping each fetched Drupal article to an object containing `params` and `props`. The `params.path` is derived from the article's alias to create unique URLs, while `props` include the article's title, body, and formatted creation date, which will be passed to the page component.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/drupal.mdx#_snippet_17

LANGUAGE: Astro
CODE:
```
---
import {Jsona} from "jsona";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";
import type {TJsonApiBody} from "jsona/lib/JsonaTypes";

import type { DrupalNode } from "../../types";
import {getArticles} from "../../api/drupal";

// Get all published articles.
export async function getStaticPaths() {
    const articles = await getArticles();
    return articles.map((article: DrupalNode) => {
        return {
            params: {
                // Choose `path` to match the `[path]` routing value
                path: article.path.alias.split('/')[2]
            },
            props: {
                title: article.title,
                body: article.body,
                date: new Date(article.created).toLocaleDateString('en-EN', {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })
            }
        }
    });
}
---
```

----------------------------------------

TITLE: Using Astro Image Component with Imported Images and URLs
DESCRIPTION: This Astro snippet demonstrates the correct and incorrect ways to use the `src` parameter for the `Image` component. It shows that `src` must be an imported image object or a URL, and not a string filepath or the `.src` property of an imported image. This is crucial for Astro's default image services to properly process and optimize images.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/errors/local-image-used-wrongly.mdx#_snippet_0

LANGUAGE: astro
CODE:
```
---
import { Image } from "astro:assets";
import myImage from "../my_image.png";
---

<!-- GOOD: `src` is the full imported image. -->
<Image src={myImage} alt="Cool image" />

<!-- GOOD: `src` is a URL. -->
<Image src="https://example.com/my_image.png" alt="Cool image" />

<!-- BAD: `src` is an image's `src` path instead of the full image object. -->
<Image src={myImage.src} alt="Cool image" />

<!-- BAD: `src` is a string filepath. -->
<Image src="../my_image.png" alt="Cool image" />
```

----------------------------------------

TITLE: Excluding Files from Astro Vercel Serverless Bundle
DESCRIPTION: This configuration uses the `excludeFiles` property to prevent specified files, like `./src/some_big_file.jpg`, from being included in the serverless function's bundle. This helps optimize bundle size by removing unnecessary assets that would otherwise be included.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/integrations-guide/vercel.mdx#_snippet_13

LANGUAGE: JavaScript
CODE:
```
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // ...
  adapter: vercel({
    excludeFiles: ['./src/some_big_file.jpg'],
  }),
});
```

----------------------------------------

TITLE: Including Additional Files in Astro Vercel Serverless Bundle
DESCRIPTION: This configuration uses the `includeFiles` property to force specific files, such as `./my-data.json`, to be bundled with the serverless function. This is useful for ensuring necessary assets are available during deployment when they might otherwise be missed.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/integrations-guide/vercel.mdx#_snippet_12

LANGUAGE: JavaScript
CODE:
```
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // ...
  adapter: vercel({
    includeFiles: ['./my-data.json'],
  }),
});
```

----------------------------------------

TITLE: Defining Table Relationships with References in Astro DB
DESCRIPTION: This example shows how to establish relationships between tables using reference columns. It defines an `Author` table with a `primaryKey` `id` and a `Comment` table where `authorId` references the `Author`'s `id`, demonstrating a common pattern for linking related data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/astro-db.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text()
  }
});

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    body: column.text()
  }
});
```

----------------------------------------

TITLE: Creating a New Blog Post in Markdown
DESCRIPTION: This Markdown snippet defines a new blog post with essential frontmatter properties like `layout`, `title`, `author`, `description`, `image`, `pubDate`, and `tags`. These properties are crucial for `import.meta.glob()` to correctly parse and display the post on the archive page, ensuring it appears dynamically without manual updates to the blog list.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/tutorial/5-astro-api/1.mdx#_snippet_2

LANGUAGE: Markdown
CODE:
```
---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Fourth Blog Post
author: Astro Learner
description: "This post will show up on its own!"
image: 
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---
This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.
```

----------------------------------------

TITLE: Accessing Middleware Data in Astro Component
DESCRIPTION: This Astro component snippet demonstrates how to access data stored in `Astro.locals` by middleware. It retrieves the `locals` object and uses its properties (`title`, `property`) to render dynamic content within the HTML template. This shows how middleware-injected data becomes available in Astro components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/middleware.mdx#_snippet_1

LANGUAGE: astro
CODE:
```
---
const data = Astro.locals;
---
<h1>{data.title}</h1>
<p>This {data.property} is from middleware.</p>
```

----------------------------------------

TITLE: Extracting Unique Tags from Astro Posts
DESCRIPTION: This snippet builds upon fetching all posts by extracting a unique list of tags. It maps over `allPosts` to get `frontmatter.tags` from each, flattens the resulting array of tag arrays, and then uses a `Set` to ensure only unique tag values are stored in the `tags` constant. This dynamic approach eliminates the need for manual tag list maintenance.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/tutorial/5-astro-api/3.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = await Astro.glob('../posts/*.md');
const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
const pageTitle = "タグインデックス";
---
```

----------------------------------------

TITLE: Accessing Request Locals in Astro Components and API Endpoints
DESCRIPTION: This example demonstrates how to retrieve values stored in the `locals` object within both Astro components (`Astro.locals`) and API endpoints (`context.locals`). This allows components and endpoints to access data that was previously set by middleware, facilitating data sharing across the request.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/api-reference.mdx#_snippet_24

LANGUAGE: Astro
CODE:
```
--- const title = Astro.locals.title; ---<h1>{title}</h1>
```

LANGUAGE: TypeScript
CODE:
```
import type { APIContext } from 'astro';

export function GET({ locals }: APIContext) {
  return new Response(locals.title); // "Default Title"
}
```

----------------------------------------

TITLE: Importing ReadMore Component in Astro
DESCRIPTION: This snippet imports the `ReadMore` component, an Astro component, from its specified path. This component is typically used to encapsulate content that can be expanded or collapsed, providing a 'Read More' functionality. It helps manage content length and user experience on the page.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/media/index.mdx#_snippet_1

LANGUAGE: Astro
CODE:
```
import ReadMore from '~/components/ReadMore.astro';
```

----------------------------------------

TITLE: Astro Page Component for Displaying Articles
DESCRIPTION: This Astro component fetches articles using the getArticles() function and displays them in an unordered list. It iterates through the articles array, creating list items with links to each article's path and displaying the title and creation date.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/guides/cms/drupal.mdx#_snippet_11

LANGUAGE: astro
CODE:
```
---
import { Jsona } from "jsona";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import type { TJsonApiBody } from "jsona/lib/JsonaTypes";

import type { DrupalNode } from "../types";
import { getArticles } from "../api/drupal";

// Obtener todos los artículos publicados.
const articles = await getArticles();
---

<html lang="en">
  <head>
    <title>My news site</title>
  </head>
  <body>
    <h1>My news site</h1>
    <ul>
      {
        articles.map((article: DrupalNode) => (
          <li>
            <a href={article.path.alias.replace("internal:en/", "")}>
              <h2>{article.title}</h2>
              <p>Published on {article.created}</p>
            </a>
          </li>
        ))
      }
    </ul>
  </body>
</html>
```

----------------------------------------

TITLE: Setting Type-Specific Asset Prefixes in Astro Build
DESCRIPTION: This snippet shows how to use an object for `build.assetsPrefix` to specify different CDN domains for various file types (e.g., `js`, `mjs`, `css`). A `fallback` property is required to handle any other file types not explicitly listed.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/configuration-reference.mdx#_snippet_26

LANGUAGE: JavaScript
CODE:
```
{
  build: {
    assetsPrefix: {
      'js': 'https://js.cdn.example.com',
      'mjs': 'https://js.cdn.example.com',
      'css': 'https://css.cdn.example.com',
      'fallback': 'https://cdn.example.com'
    }
  }
}
```

----------------------------------------

TITLE: Correcting getImage Usage for ESM-Imported Images in Astro
DESCRIPTION: This snippet demonstrates the correct way to pass an ESM-imported image to Astro's `getImage()` function. Instead of passing the image directly, it must be wrapped in an object with the image assigned to the `src` property. This ensures proper image optimization and resolves the `ExpectedNotESMImage` error.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/errors/expected-not-esmimage.mdx#_snippet_0

LANGUAGE: diff
CODE:
```
import { getImage } from "astro:assets";
import myImage from "../assets/my_image.png";
- const optimizedImage = await getImage( myImage );
+ const optimizedImage = await getImage({ src: myImage });
```

----------------------------------------

TITLE: HTML Output of the Image Component
DESCRIPTION: This code snippet shows the HTML output generated by the Astro Image component. The image is optimized, and proper attributes such as src, width, height, decoding, loading, and alt are enforced.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_2

LANGUAGE: html
CODE:
```
<!-- Output -->
<!-- Image is optimized, proper attributes are enforced -->
<img
  src="/_astro/my_image.hash.webp"
  width="1600"
  height="900"
  decoding="async"
  loading="lazy"
  alt="A description of my image."
/>
```

----------------------------------------

TITLE: Accessing Props from getStaticPaths in Endpoint Function
DESCRIPTION: This code snippet shows how to access props passed from `getStaticPaths()` in an Astro endpoint function. The `getStaticPaths()` function returns an array of objects with `params` and `props`. The endpoint function then accesses these `props` using the `APIContext` parameter.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/api-reference.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
import type { APIContext } from 'astro';

export function getStaticPaths() {
  return [
    { params: { id: '1' }, props: { author: 'Blu' } },
    { params: { id: '2' }, props: { author: 'Erika' } },
    { params: { id: '3' }, props: { author: 'Matthew' } }
  ];
}

export function GET({ props }: APIContext) {
  return new Response(
    JSON.stringify({ author: props.author }),
  );
}
```

----------------------------------------

TITLE: Generating Srcset with Widths in Astro Image
DESCRIPTION: This example demonstrates how to use the `widths` property to generate a `srcset` attribute for the `<img>` tag in Astro. It also shows how to use the `sizes` property to define the image sizes for different screen widths.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-assets.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png'; // Image is 1600x900
---
<Image
  src={myImage}
  widths={[240, 540, 720, myImage.width]}
  sizes={`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${myImage.width}px`}
  alt="A description of my image."
/>
```

----------------------------------------

TITLE: HTML output with srcset generated from widths
DESCRIPTION: This HTML shows the output of the previous Astro component, with the `srcset` attribute generated based on the specified widths. The `sizes` attribute is also included to provide browser hints for selecting the appropriate image source.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/modules/astro-assets.mdx#_snippet_9

LANGUAGE: html
CODE:
```
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 240w,
    /_astro/my_image.hash.webp 540w,
    /_astro/my_image.hash.webp 720w,
		/_astro/my_image.hash.webp 1600w
  "
  sizes="
    (max-width: 360px) 240px,
    (max-width: 720px) 540px,
    (max-width: 1600px) 720px,
    1600px
  "
  alt="A description of my image."
  width="1600"
  height="900"
  loading="lazy"
  decoding="async"
/>
```

----------------------------------------

TITLE: 事前レンダリングを無効にする - JavaScript
DESCRIPTION: このJavaScriptコードは、Astroのエンドポイントで事前レンダリングを無効にする方法を示しています。`export const prerender = false`を追加することで、このエンドポイントはリクエストごとにサーバーで実行され、毎回ランダムな数値を返します。
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/guides/on-demand-rendering.mdx#_snippet_4

LANGUAGE: javascript
CODE:
```
export const prerender = false;

export async function GET() {
  const number = Math.random();
  return new Response(
    JSON.stringify({
      number,
      message: `ランダムな数字はこちら:${number}`,
    }),
  );
}
```

----------------------------------------

TITLE: Conditional HTML Rendering in Astro
DESCRIPTION: Illustrates how to conditionally display HTML content in Astro using JSX logical operators (`&&`) and ternary expressions (`? :`). This allows for rendering different content based on a boolean condition.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/astro-syntax.mdx#_snippet_5

LANGUAGE: Astro
CODE:
```
--- const visible = true; ---\n{visible && <p>Show me!</p>}\n\n{visible ? <p>Show me!</p> : <p>Else show me!</p>}
```

----------------------------------------

TITLE: Importing and Using Custom Image Component
DESCRIPTION: This code imports and uses the `<MyCustomImageComponent />` in an Astro page. It passes the necessary props to generate two different images depending on the screen size. The `mobileImage` and `desktopImage` are imported from local image files.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/recipes/build-custom-img-component.mdx#_snippet_4

LANGUAGE: Astro
CODE:
```
---
import MyCustomImageComponent from "../components/MyCustomImageComponent.astro";
import mobileImage from "../images/mobile-profile-image.jpg";
import desktopImage from "../images/desktop-profile-image.jpg";
---

<MyCustomImageComponent
 mobileImgUrl={mobileImage}
 desktopImgUrl={desktopImage}
 alt="image du profil de l'utilisateur"
/>
```

----------------------------------------

TITLE: Configuring Font Family with Tailwind CSS 4.0
DESCRIPTION: This CSS snippet, intended for `src/styles/global.css` with Tailwind CSS 4.0, demonstrates how to map the default `font-sans` utility to the custom `--font-roboto` CSS variable using the `@theme inline` directive. This allows using Tailwind's `font-sans` class to apply the custom font.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_5

LANGUAGE: CSS
CODE:
```
@import 'tailwindcss';

@theme inline {
    --font-sans: var(--font-roboto);
}
```

----------------------------------------

TITLE: Importing configurations from astro:config/client
DESCRIPTION: This code snippet demonstrates how to import specific configuration values such as i18n, trailingSlash, base, build, and site from the `astro:config/client` virtual module. This module is intended for client-side code and exposes a limited set of configuration options to protect sensitive information.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/reference/modules/astro-config.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  i18n,
  trailingSlash,
  base,
  build,
  site,
} from "astro:config/client";
```

----------------------------------------

TITLE: Enabling Responsive Images in Astro Configuration
DESCRIPTION: This snippet demonstrates how to enable the experimental responsive images feature within your Astro project's configuration file. Setting `responsiveImages` to `true` under the `experimental` key activates the automatic generation of `srcset` and `sizes` attributes for optimized images, improving performance and display across various devices.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/responsive-images.mdx#_snippet_0

LANGUAGE: js
CODE:
```
{
  experimental: {
    responsiveImages: true,
  },
}
```

----------------------------------------

TITLE: Sequencing Multiple Middleware Functions in JavaScript
DESCRIPTION: This JavaScript snippet illustrates how to use the `sequence()` function to combine multiple middleware handlers into a single `onRequest` export. Middleware functions like `validation`, `auth`, and `greeting` will be executed sequentially in the order they are passed to `sequence`.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-middleware.mdx#_snippet_2

LANGUAGE: js
CODE:
```
import { sequence } from "astro:middleware";

async function validation(_, next) {...}
async function auth(_, next) {...}
async function greeting(_, next) {...}

export const onRequest = sequence(validation, auth, greeting);
```

----------------------------------------

TITLE: Using Astro's Font Component with cssVariable
DESCRIPTION: This Astro component snippet demonstrates how to use the `<Font />` component to output style tags for a registered font. The `cssVariable` prop links the component to a font defined in `astro.config.mjs`, ensuring the correct font styles are applied.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/experimental-flags/fonts.mdx#_snippet_14

LANGUAGE: astro
CODE:
```
---
import { Font } from 'astro:assets';
---

<Font cssVariable="--font-roboto" />
```

----------------------------------------

TITLE: Fetching and Displaying Storyblok Blog Post List in Astro
DESCRIPTION: This `BlogPostList.astro` component fetches and displays a list of blog posts from Storyblok. It utilizes the `useStoryblokApi` hook to query the Storyblok CDN for stories with the `blogPost` content type. The `version` parameter dynamically switches between 'draft' (for development) and 'published' (for production) versions. It then maps the fetched data to extract relevant post details like title, date, description, and slug, rendering them as a list of links.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/storyblok.mdx#_snippet_10

LANGUAGE: astro
CODE:
```
---
import { storyblokEditable } from '@storyblok/astro'
import { useStoryblokApi } from '@storyblok/astro'

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get('cdn/stories', {
  version: import.meta.env.DEV ? "draft" : "published",
  content_type: 'blogPost',
})

const posts = data.stories.map(story => {
  return {
    title: story.content.title,
    date: new Date(story.published_at).toLocaleDateString("en-US", {dateStyle: "full"}),
    description: story.content.description,
    slug: story.full_slug,
  }
})

const { blok } = Astro.props
---

<ul {...storyblokEditable(blok)}>
  {posts.map(post => (
    <li>
      <time>{post.date}</time>
      <a href={post.slug}>{post.title}</a>
      <p>{post.description}</p>
    </li>
  ))}
</ul>
```

----------------------------------------

TITLE: Use Glob Patterns for File Inclusion/Exclusion (astro.config.mjs)
DESCRIPTION: This code snippet demonstrates how to use glob patterns with the `includeFiles` and `excludeFiles` options in the Netlify adapter configuration within `astro.config.mjs` to match multiple files for inclusion or exclusion in Netlify Functions.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/integrations-guide/netlify.mdx#_snippet_18

LANGUAGE: javascript
CODE:
```
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  adapter: netlify({
    includeFiles: [
      './data/**/*.json'
    ],
    excludeFiles: [
      './node_modules/package/**/*',
      './src/**/*.test.js'
    ]
  }),
});
```

----------------------------------------

TITLE: Using Child Component with Passed Class
DESCRIPTION: Illustrates how a parent Astro page imports and uses the child component, passing a CSS class defined within the parent's own `<style>` block.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/styling.mdx#_snippet_8

LANGUAGE: Astro
CODE:
```
---
import MyComponent from "../components/MyComponent.astro"
---
<style>
  .red {
    color: red;
  }
</style>
<MyComponent class="red">This will be red!</MyComponent>
```

----------------------------------------

TITLE: Rendering Image in Svelte Component
DESCRIPTION: This code shows how to render an image in a Svelte component. It imports an image and then uses the `<img>` tag with the `src` attribute set to the image's `src` property.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/guides/images.mdx#_snippet_24

LANGUAGE: svelte
CODE:
```
<script>
  import stars from '../assets/stars.png';
</script>

<img src={stars.src} alt="Un ciel étoilé." />
```

----------------------------------------

TITLE: Legacy RSS Feed Item Generation with Glob Imports (Astro < v2.1.0)
DESCRIPTION: This JavaScript snippet shows the legacy method for generating RSS feed items using glob imports in `@astrojs/rss` versions prior to v2.1.0. Unlike newer versions, it directly assigns the result of `import.meta.glob()` to the `items` array without requiring the `pagesGlobToRssItems()` helper function.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ja/recipes/rss.mdx#_snippet_5

LANGUAGE: js
CODE:
```
items: import.meta.glob('./blog/*.{md,mdx}'),
```

----------------------------------------

TITLE: Fetching GitHub Stars in React (JSX)
DESCRIPTION: This React component demonstrates fetching the star count for the 'withastro/astro' GitHub repository using the `fetch` API within a `useEffect` hook. It manages state with `useState` for stars and messages, and renders a paragraph displaying the star count, flanked by `Header` and `Footer` components.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-create-react-app.mdx#_snippet_8

LANGUAGE: jsx
CODE:
```
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Component = () => {
    const [stars, setStars] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.github.com/repos/withastro/astro');
            const json = await res.json();

            setStars(json.stargazers_count || 0);
            setMessage(json.message);
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <p style={{
                backgroundColor: `#f4f4f4`,
                padding: `1em 1.5em`,
                textAlign: `center`,
                marginBottom: `1em`
            }}>Astro has {stars} 🧑‍🚀</p>
            <Footer />
        </>
    )
};

export default Component;
```

----------------------------------------

TITLE: Fetching Published Articles with getArticles Function
DESCRIPTION: Creates an asynchronous function `getArticles` that fetches all published articles from the Drupal API. It uses `DrupalJsonApiParams` to construct the API URL with specified fields and filters, then calls `fetchUrl` to retrieve and deserialize the data.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/es/guides/cms/drupal.mdx#_snippet_9

LANGUAGE: typescript
CODE:
```
/**
 * Obtener todos los artículos publicados.
  *
  * @return Promise<DrupalNode[]>
  */
export const getArticles = async (): Promise<DrupalNode[]> => {
  const params: DrupalJsonApiParams = new DrupalJsonApiParams();
  params.addFields("node--article", ["title", "path", "body", "created"]).addFilter("status", "1");
  const path: string = params.getQueryString();
  return await fetchUrl(baseUrl + "/jsonapi/node/article?" + path);
};
```

----------------------------------------

TITLE: Cloning Astro Docs Repository (Shell)
DESCRIPTION: This command clones the `withastro/docs` repository from GitHub to your local machine, initiating the local development setup. It's the first step to get a copy of the project files.
SOURCE: https://github.com/withastro/docs/blob/main/CONTRIBUTING.md#_snippet_0

LANGUAGE: shell
CODE:
```
git clone git@github.com:withastro/docs.git
```

----------------------------------------

TITLE: Importing ContributorList Component in Astro
DESCRIPTION: This snippet demonstrates how to import the `ContributorList` component into an Astro page. The `~/components/ContributorList.astro` path indicates that the component is located in the `src/components` directory relative to the project root. This import makes the component available for use within the current Astro file.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/contribute.mdx#_snippet_0

LANGUAGE: Astro
CODE:
```
import ContributorList from '~/components/ContributorList.astro'
```

----------------------------------------

TITLE: Displaying Community Resources with Starlight Components
DESCRIPTION: This MDX snippet utilizes the `CardGrid` component to organize and display a `LinkCard`. The `LinkCard` itself presents a title and a hyperlink, serving as a structured way to feature external community resources related to Directus and Astro.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/cms/directus.mdx#_snippet_1

LANGUAGE: MDX
CODE:
```
<CardGrid>
  <LinkCard title="Using Directus CMS with Neon Postgres and Astro to build a blog" href="https://neon.tech/guides/directus-cms" />
</CardGrid>
```

----------------------------------------

TITLE: Enable Responsive Images in Astro Configuration (astro.config.mjs)
DESCRIPTION: This code snippet demonstrates how to enable the `responsiveImages` experimental feature in your `astro.config.mjs` file. This setting allows Astro to automatically generate `srcset` and `sizes` attributes for images, and apply appropriate styles for correct resizing.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/experimental-flags/responsive-images.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
{
  experimental: {
    responsiveImages: true,
  },
}
```

----------------------------------------

TITLE: Importing Middleware Utilities in JavaScript
DESCRIPTION: This snippet demonstrates how to import core utility functions such as `sequence`, `createContext`, `trySerializeLocals`, and `defineMiddleware` from the `astro:middleware` module. These functions are essential for defining and orchestrating middleware logic in Astro applications.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-middleware.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  sequence,
  createContext,
  trySerializeLocals,
  defineMiddleware,
 } from 'astro:middleware';
```

----------------------------------------

TITLE: Merging Astro Configurations with mergeConfig (TypeScript)
DESCRIPTION: This function, imported from `astro/config`, merges a partial Astro configuration with an existing valid one. It accepts an Astro configuration object and a partial configuration, returning a combined valid Astro configuration. Arrays are concatenated, objects are recursively merged, and Vite options are handled using Vite's `mergeConfig`. Function-based options are wrapped to recursively merge their return values, while other options replace existing ones.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/reference/programmatic-reference.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { mergeConfig } from "astro/config";

mergeConfig(
  {
    output: 'static',
    site: 'https://example.com',
    integrations: [partytown()],
    server: ({command}) => ({
      port: command === 'dev' ? 4321 : 1234,
    }),
	  build: {
		  client: './custom-client',
	  },
  },
  {
    output: 'server',
    base: '/astro',
    integrations: [mdx()],
    server: ({command}) => ({
      host: command === 'dev' ? 'localhost' : 'site.localhost',
    }),
	  build: {
		  server: './custom-server',
	  },
  }
);

// Le résultat est équivalent à :
{
  output: 'server',
  site: 'https://example.com',
  base: '/astro',
  integrations: [partytown(), mdx()],
  server: ({command}) => ({
    port: command === 'dev' ? 4321 : 1234,
    host: command === 'dev' ? 'localhost' : 'site.localhost',
  }),
	build: {
		client: './custom-client',
		server: './custom-server',
	},
}
```

----------------------------------------

TITLE: Correcting getImage() Usage for ESM-Imported Images in Astro
DESCRIPTION: This snippet demonstrates the correct way to pass an ESM-imported image to Astro's `getImage()` function. Instead of directly passing the image variable, an object with the image assigned to the `src` property must be provided. This resolves the `ExpectedNotESMImage` error.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/ko/reference/errors/expected-not-esmimage.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { getImage } from "astro:assets";
import myImage from "../assets/my_image.png";
- const optimizedImage = await getImage( myImage );
+ const optimizedImage = await getImage({ src: myImage });
```

----------------------------------------

TITLE: HTML Output with densities
DESCRIPTION: This code snippet shows the HTML output generated by the Astro Image component when using the densities property. The srcset attribute is generated with the specified pixel densities.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/reference/modules/astro-assets.mdx#_snippet_7

LANGUAGE: html
CODE:
```
<!-- 输出 -->
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 1.5x
    /_astro/my_image.hash.webp 2x
  "
  alt="我的图片描述"
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>
```

----------------------------------------

TITLE: Astro Layout Component
DESCRIPTION: This Astro component provides a layout structure, importing local `Header.astro` and `Footer.astro` components, a stylesheet, and site metadata from a JavaScript file. It accesses the `message` prop using `Astro.props` and uses a `<slot />` for dynamic content, demonstrating Astro's approach to component composition and data handling without GraphQL. The `---` code fence separates the component script from the HTML template.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-gatsby.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import Header from "./Header.astro"
import Footer from "./Footer.astro"
import "../styles/stylesheet.css"
import { site } from "../data/siteMetaData.js"
const { message } = Astro.props
---
<Header siteTitle={site.title} />
  <div style="margin: 0; max-width: 960;">{message}</div>
  <main>
    <slot />
  </main>
<Footer siteTitle={site.title} />
```

----------------------------------------

TITLE: Importing Core Utilities from astro:actions
DESCRIPTION: This snippet demonstrates how to import the core utilities provided by the `astro:actions` module. These include `actions` for calling actions, `defineAction` for creating them, and error handling utilities like `isInputError`, `isActionError`, and `ActionError`, which are essential for building and interacting with type-safe backend actions in Astro.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/reference/modules/astro-actions.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import {
  actions,
  defineAction,
  isInputError,
  isActionError,
  ActionError,
 } from 'astro:actions';
```

----------------------------------------

TITLE: Authorizing Remote Image Domains in Astro Configuration
DESCRIPTION: Demonstrates how to configure `image.domains` in `astro.config.mjs` to specify a list of authorized domains from which remote images can be optimized, adding an extra layer of security.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/images.mdx#_snippet_12

LANGUAGE: ts
CODE:
```
// astro.config.mjs
export default defineConfig({
  image: {
    domains: ["astro.build"],
  }
});
```

----------------------------------------

TITLE: Displaying Cart Flyout with Svelte
DESCRIPTION: This Svelte component renders the cart flyout, directly importing `isCartOpen` and `cartItems` from `../cartStore` for reactive state management. It uses Svelte's `#if` and `#each` blocks to conditionally display the cart and iterate over items, showing a localized 'empty cart' message.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/fr/recipes/sharing-state-islands.mdx#_snippet_5

LANGUAGE: svelte
CODE:
```
<!--src/components/CartFlyout.svelte-->
<script>
  import { isCartOpen, cartItems } from '../cartStore';
</script>

{#if $isCartOpen}
  {#if Object.values($cartItems).length}
    <aside>
      {#each Object.values($cartItems) as cartItem}
      <li>
        <img src={cartItem.imageSrc} alt={cartItem.name} />
        <h3>{cartItem.name}</h3>
        <p>Quantity: {cartItem.quantity}</p>
      </li>
      {/each}
    </aside>
  {:else}
    <p>Votre panier est vide !</p>
  {/if}
{/if}
```

----------------------------------------

TITLE: Complete Astro Data Fetching and Component Rendering
DESCRIPTION: This complete Astro page integrates data fetching directly within the component's frontmatter, replacing the `getStaticProps` pattern from Next.js. It fetches Pokémon data from the PokéAPI and renders it using Astro's templating, wrapped by a `Layout` component. This snippet showcases the full migration, including data fetching and component structure.
SOURCE: https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-nextjs.mdx#_snippet_18

LANGUAGE: astro
CODE:
```
---
import Layout from '../layouts/layout.astro';

const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
const resJson = await res.json();
const pokemons = resJson.results.map(pokemon => {
    const name = pokemon.name;
    // https://pokeapi.co/api/v2/pokemon/1/
    const url = pokemon.url;
    const id = url.split("/")[url.split("/").length - 2];
    return {
        name,
        url,
        id
    }
});
---

<Layout>
  <ul class="plain-list pokeList">
      {pokemons.map((pokemon) => (
          <li class="pokemonListItem" key={pokemon.name}>
              <a class="pokemonContainer" href={`/pokemon/${pokemon.name}`}>
                  <p class="pokemonId">No. {pokemon.id}</p>
                  <img class="pokemonImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={`${pokemon.name} picture`}/>
                  <h2 class="pokemonName">{pokemon.name}</h2>
              </a>
          </li>
      ))}
  </ul>
</Layout>
```