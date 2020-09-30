# Forum

## Introduction
This forum is written in node.js and is designed to be extremely modular.

## Structure
### Entities
- **Section** - Sections contain categories
- **Category** - Categories contain threads
- **Thread** - Threads contain posts
- **Post** - Each post can be created, edited, etc.
  
### Database
#### Tables
##### user
| column | type | summary |
| ------ | ---- | ------- |
| **id** | *integer* | Primary key
| **email** | *text* | The email registered to the user
| **password_hash** | *char[128]* | The SHA3-512 password hash
| **username** | *text* | The username shown throughout the forum
| **user_groups** | *smallint[]* | The user groups with which the user belongs to
| **date_created** | *timestamp* | Timestamp of when the user registered

##### user_group
| column | type | summary |
| ------ | ---- | ------- |
| **id** | *integer* | Primary key
| **name** | *integer* | The name of the user group
| **power_level** | *smallint* | The power level ensures users may only affect users less than their own power level.
| **is_super_admin** | *integer* | Whether this role has full, unrestricted privileges
| **css_class** | *text* | Arbitrary CSS class used for styling

##### user_strike
| column | type | summary |
| ------ | ---- | ------- |
| **id** | *integer* | Primary key
| **type** | *smallint* | The type of strike (*1 = mute, 2 = ban, 3 = locked*)
| **user_id** | *integer* | The user id with which this ban entry pertains to
| **issuing_user_id** | *integer* | The user id that issued the strike
| **reason** | *text* | The reason the strike was issued
| **date_start** | *timestamp* | When the strike was issued
| **date_end** | *timestamp* | When the strike expires

##### post
| column | type | summary |
| ------ | ---- | ------- |
| **id** | *integer* | Primary key, used to identify the post revision
| **original_id** | *integer* | This refers to the original `post.id` resource created
| **user_id** | *integer* | The user that created the post
| **date_created** | *timestamp* | Timestamp of when this post resource was created
| **thread_id** | *integer* | The parent thread id
| **body** | *text* | The post body
| **edited_by_user_id** | *integer* | Default *NULL*. If this is an edited post, this is the author of the edited post
| **is_hidden** | *boolean* | Whether the post is hidden

##### thread
| column | type | summary |
| ------ | ---- | ------- |
| **id** | *integer* | Primary key
| **date_created** | *integer* | When the thread was created
| **category_id** | *integer* | The category this thread is under
| **title** | *text* | The thread title
| **is_sticky** | *boolean* | Whether the thread is stickied
| **sort_id** | *smallint* | Sort order of this stickied thread
| **is_hidden** | *boolean* | Whether the thread is hidden
| **is_locked** | *boolean* | Whether the thread is locked
| **auto_hide_new_posts** | *boolean* | Whether or not new posts are hidden by default
| **permissions_by_group** | *hstore* | Array of key value pairs: `user_group.id` -> `integer`
| **permissions_by_user** | *hstore* | Array of key value pairs: `user.id` -> `integer`

##### category
| column | type | summary |
| ------ | ---- | ------- |
| **id** | *integer* | Primary key
| **name** | *text* | The category name
| **section_id** | *integer* | The section id this category is under
| **sort_id** | *smallint* | The sort order relative to other categories in this section
| **permissions_by_group** | *hstore* | Array of key value pairs: `user_group.id` -> `integer`
| **permissions_by_user** | *hstore* | Array of key value pairs: `user.id` -> `integer`

##### section
| column | type | summary |
| ------ | ---- | ------- |
| **id** | *integer* | Primary key
| **name** | *text* | The category name
| **sort_id** | *smallint* | The sort order relative to other sections in the forum
| **permissions_by_group** | *hstore* | Array of key value pairs: `user_group.id` -> `integer`
| **permissions_by_user** | *hstore* | Array of key value pairs: `user.id` -> `integer`