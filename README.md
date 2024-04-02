<!-- PROJECT LOGO -->
<br />
<p align="center">
   <a href="https://github.com/NCSclub/NIT-TEST"><img src="public/ncs_logo.png" height="auto" width="250px" style="border-radius:50%"></a>
  <h3 align="center">Enigma Website</h3>

  <p align="center">
The Repository for Enigma Website made using 
    <a href="https://nextjs.org/">Next.js</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>!
    <br />
    <br />
    <a href="https://github.com/NCSclub/NIT-TEST">View Demo</a>
    ·
    <a href="https://github.com/NCSclub/NIT-TEST/issues">Report Bug</a>
    ·
    <a href="https://github.com/NCSclub/NIT-TEST/issues">Request Feature</a>
  </p>
  </p>

# Contribution guidelines to be FOLLOWED

- **Make sure you've already assigned yourself a task** (Go to Issues tab and take one of the unassigned task and work on solving it).
    - Issues are created for each task, assign to your self the desired task to work on.
- **DO NOT change** the content of `./tailwind.config.js` (TailwindCSS configurations) **except when it's necessary**
    - If you need to add additional tailwind config you must extend the theme and **DO NOT change the old ones**
- **First things first**
  - Clone the project using the command `git clone [repo clone https]`
  - Install the dependencies: *run the command* `npm i` or `npm install`
- **Follow the folder structure** create each file in it's correspandant place
    - Creating components is in */src/app/components* folder with `jsx` file format
    - Creating styles is in */src/app/styles* the import it to your folder when necessay with `.module.css` file format for styling scoping
    - Creating custom hook or any jsx utils is in */src/app/utils* folder with `jsx` file format
    - add your images, videos or any kind of static files in */public/images* folder with `images` file format
- **Make sure to make things structured** suppose that I have the task of the hero section, so I'm responsable of
    - Creating my hero section component in the */src/app/components* as mentioned above as my code will be in the Component name folder using the PascalCase naming convention `eg: Hero` and inside it I have all my sub components and partials.
    - Adding my images and static assets in the */public/images* as mentioned above, as I will create a folder under my component name `eg: Hero` and I will put all files inside.
    - Adding my css styling modules if needed in the */src/app/styles* in the styles folder directly using the PascalCase naming convension `eg: Hero.module.css`
    - Adding any sort of custom hooks or assets inside the */src/app/utils* as mentioned above as I will create a folder under my component name `eg: Hero` and I will put all files inside.
- Before start working on your task, **make sure** to create a branch following the convention: `feature/[your_name]/[template]`.e.g: `feature/sohaib/hero`
- **DO NOT PUSH IN THE MAIN DIRECTLY** (push your updates in your branch)
- **Make sure that your changes are up-to-date** (in order to avoid conflicts, perform the command `git pull origin main` before pushing your code in your branch)
- **Perform a Pull request after finishing your work** (after verifying all the creterias above)
    - Go to Pull requests tab
    - New pull request
    - Choose you branch and click create pull request
- **Your PR will be reviewed & a response based on the situation will be sent** whether:
    - Close the PR with Acceptance and merge the PR and get your work in the main branch.
    - Close the PR with refuse due to an issue related to your work.

# HAPPY CODING
