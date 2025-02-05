# Contributing guidelines

Thank you for taking the time to contribute to the project. Please take a moment to read the following guidelines before contributing:

## How to Contribute? 🤔

### Step 1: Fork the Repository

Click on the "Fork" button.

By forking the repository, you will have your version of the repository under your GitHub username.

Once you have forked your repository, go to your profile inside the repository section, and you will find your forked repository.

### Step 2: Clone the Forked Repository

Once you locate your repository, you must clone it to your local machine.

```sh
git clone https://github.com/YOUR-USERNAME/CareerCompas.git
```

Congratulations! You have successfully cloned the repository to your local machine. You can now make changes, add new features, or fix issues in the codebase.


### Step 3: Install all the dependencies
```sh
npm install
```

### Step 4: Start the application

```sh
npm run dev
```

### Step 5: Make Your Changes

Make the necessary changes or additions to the codebase.

### Step 6: Stage your changes

```
git add .
```

This command is used to stage all the changes in the current directory and it's subdirectories for the next commit. It adds all modified and new files to the staging area, allowing you to include them in the next commit.

**Note:** The . represents the current directory, so git add . includes all files and directories within the current working directory. This means if you are anywhere outside from the directory then the changes would not be staged.
So make sure you are in correct directory.


### Step 7: Commit Your Changes

Commit your changes with a meaningful commit message using the following command: 


```bash
  git commit -m "Enter Your message related to what work you did"
```
(make sure to add a decent commit message to avoid confusion and get your PR merged)

Once you have committed your changes, it's time to push them to your forked repository on GitHub.


### Step 8: Push Your Changes

Use the following command to push your changes:

```bash
git push -u origin main
```

### Step 9: Make a Pull Request

After pushing your changes, open your forked repository on GitHub in your web browser.

Click on `compare and pull request`

Provide a clear and informative title and description for your pull request. Explain the changes you have made and why they should be incorporated into the original repository.

Review your pull request to ensure everything is correct, and then click on the "Create pull request" button to submit it.

### Congratulations! 🎉

Your pull request will now be visible.

### Commit Message Guidelines using Commitlint

We follow a standardized commit message format using Commitlint to ensure consistency and clarity in our commit history. Each commit message should adhere to the following guidelines:

1. **Type**: The commit type must be one of the following:

   - `feat`: A new feature or enhancement.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., colors, assets, formatting, semicolons).
   - `refactor`: Code refactorings with no feature changes or bug fixes.

2. **Description**: A brief and meaningful description of the changes made.


### Examples:

#### Valid Commit Messages:

- `feat: Add user authentication feature`
- `fix: Resolve login page redirect issue`
- `docs: Update installation instructions`
- `style: changed background color`
- `refactor: Improve responsiveness`

#### Invalid Commit Messages:

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`

By following these guidelines, we can maintain a clean commit history that is easy to understand and helps us effectively track changes. If you have any questions or need further assistance, feel free to ask! Happy contributing!

<h3> Don't forget to give a ⭐ to this repo !!<h3>