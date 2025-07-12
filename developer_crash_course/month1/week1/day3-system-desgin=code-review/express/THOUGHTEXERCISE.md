## Thought exercise in system-level thinking

1. Where do you see performance issues if this app scales to 1M users?

   - the scaling problem I notice is the monolithic style of the the code. everything is in a single code base and can cause the API to crash. There is no data separation. the data is being stored in the route which can get confusing and overwhelming when recipes start to add up into the tens of thousands.

2. What would break first?

   - I think the route would break first. There is no protection against data being added that is not apart of the recipe. And everything is conjoined under one route.

3. How could you apply today’s concepts (caching, scaling, statelessness, etc.) to improve it?

   - My approach to scaling would be, caching the recipes that are available once the api loaded, saving them to local storage sense they are not mutating frequently so save network bandwidth from constantly fetching the recipes over and over again.

   - Scaling I would turn the, depending on the resources and team available, I would consider microservices, allowing sustainability for a app that is predicted to have a million users. so if a section breaks the entire app wont shut down.

   - With current trends in tech i would take a hybrid approach in state and stateless systems. saving a data like users, passwords, profile images, or images in general for a faster service. then using stateless for features that dont require historical context.
