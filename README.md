# ApT

Welcome to the US allowed TikTok!

### Scenario
For this project, imagine you are an engineer at a social media startup. You are tasked with building out a platform where users can create, share, and discover short-form video content, just like TikTok.

### Requirements
- Build a full-stack web app where users can post short-form videos and view videos from others in a feed
- Allow users to like and comment on videos, and let them share and favorite videos
- Implement a smart recommendation system for what videos a user sees on their feed
- Stitching with someone elses post

### Challenges (after req. complete)
- Implement a moderation system to prevent users from uploading inappropriate content
- Make your recommendation system adaptive based on the user's most recent activity
- Ensure minimal latency in the video uploads and playback

## Skills
- Software Engineering
- Recommendation Systems
- Machine Learning
- Typescript
- Next.js

## Resources
- [TikTok's Recommendation System](https://arxiv.org/pdf/2209.07663)
- [NextJs Video Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/videos)
- [Adding Videos to NextJs App](https://next-video.dev/)
- [User Onboarding Flow with Clerk](https://clerk.com/docs/references/nextjs/add-onboarding-flow)
- [Example Book Recommendation System](https://github.com/weaviate/BookRecs)
- [NextJs Auth Starter Template](https://github.com/clerk/nextjs-auth-starter-template)
- [Unifying Generative and Dense Retrieval for Sequential Recommendation (LIGER)](https://arxiv.org/abs/2411.18814)
- [Recommender Systems with Generative Retrieval (TIGER)](https://arxiv.org/abs/2305.05065)
- [Monolith: Real Time Recommendation System With Collisionless Embedding Table](https://arxiv.org/pdf/2209.07663)
- [What are video embeddings?](https://www.activeloop.ai/resources/glossary/video-embeddings/)
- Groq whisper model for speech-to-text
- [Supabase pgvector - storing embeddings](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase embedding article](https://supabase.com/blog/openai-embeddings-postgres-vector)
- [Google - Get MultiModal Embeddings](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [Google - MultiModal Embeddings API](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/multimodal-embeddings-api)

## Workflow

1. Choose database storage and schemas

BaseApp (can use React Native for dual visuals [mobile and web]) > add user log in and auth > users can create and post short form videos > likes and comments on posts > share and favorite videos > recommendation system
```
--> User {
        posts: list of their posts,
        likes: list of liked posts,
        saved: list of saved posts,
        shared: list of shared posts
        watchHistory: list of watched posts --> including watch time --> # of times watched (a scroll back to a post)
        }

--> Post {
      userId: id of the one who made the post
      comments: list of ids and comment text
      likes: list of ids of users who liked the post
      saves: list of ids of users who have saved the post
      shares: list of ids
      views: still deciding
    }

Recommendation System:
  - look at how long and # of times user viewed post
  - what types of videos they are liking, commenting on, and sharing
  - will need to identify how to provide correlated posts (hashtags, model pulling keywords out of video when posted and categorizing them, categories??, video and transcript analyzers)
  - track length of time users are on app per session to determine how effective the recommendation is (how often they log on, how long they scroll, etc)
```

- need BlobStorage to store videos
- separate table for video metadata [length, summary, categories, text, etc.] + link to video in blobStorage
- an idea for recommendation system is embedding the videos (ask AI for reasonable approaches to the problem)
- 

## Development Notes
#### Embeddings (multi-modal embeddings)
Embeddings allow for mathematical calculations and comparisons to be done on none numerical data, such as text, video, and images via vectorizing.
