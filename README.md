# ApT

Welcome to the US allowed TikTok!

### Scenario
For this project, imagine you are an engineer at a social media startup. You are tasked with building out a platform where users can create, share, and discover short-form video content, just like TikTok.

### Requirements
- Build a full-stack web app where users can post short-form videos and view videos from others in a feed
- Allow users to like and comment on videos, and let them share and favorite videos
- Implement a smart recommendation system for what videos a user sees on their feed

### Challenges (after req. complete)
- Implement a moderation system to prevent users from uploading inappropriate content
- Make your recommendation system adaptive based on the user's most recent activity
- Ensure minimal latency in the video uploads and playback

## Resources
- [TikTok's Recommendation System](https://arxiv.org/pdf/2209.07663)
- [NextJs Video Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/videos)
- [Adding Videos to NextJs App](https://next-video.dev/)
- [User Onboarding Flow with Clerk](https://clerk.com/docs/references/nextjs/add-onboarding-flow)
- [Example Book Recommendation System](https://github.com/weaviate/BookRecs)
- [NextJs Auth Starter Template](https://github.com/clerk/nextjs-auth-starter-template)

## Workflow

BaseApp > add user log in and auth > users can create and post short form videos > likes and comments on posts > share and favorite videos > recommendation system
```
--> User {
        posts: list of their posts,
        likes: list of liked posts,
        saved: list of saved posts,
        shared: list of shared posts
        watchHistory: list of watched posts
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
  - will need to identify how to provide correlated posts (hashtags, model pulling keywords out of video when posted and categorizing them, categories??)
```
