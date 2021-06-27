[![Build Status](https://travis-ci.org/gelstudios/gitfiti.svg?branch=master)](https://github.com/rbhachu/JSON-Server-Heroku-HK) [![Heroku](https://heroku-badge.herokuapp.com/?app=rbhachu-json-server-heroku-hk)](https://github.com/rbhachu/JSON-Server-Heroku-HK)


<h1 align="center">JSON Server + House Keeping<br>(Back-End API REST Server for The Mojo Blog)</h1>
<br>


## Description
<p>Updated version of JSON Server (https://github.com/rbhachu/JSON-Server-Heroku) with House Keeping feature added to ensure db.json file is reset daily using Heroku Scheduler Plugin.
</p><br>


## Dependencies/NPM Modules
[JSON Server v0.16.3 *](https://www.npmjs.com/package/json-server) - Creates a JSON REST API Server<br>
[Nodemon v2.0.7 *](https://www.npmjs.com/package/nodemon) - Automatically restarts node application when file changes detected<br>
<i> * Installed automatically</i>
<br>
<br>


## Usage
<p>Once the app is installed (see `Installation` section below), you can reset the db.json file in './data/' root folder by executing the following command in the terminal.</p>

```sh
node ./bin/cleanup.js
```

<p>
This will run the cleanup.js file located in the './bin/' folder in the root of the site.

![Run Command](./imgs-readme/terminal1.png)

The cleanup.js file simply runs a function to overwrite the db.json file in the data folder with the original source values set in the db-source.json file.

![Files](./imgs-readme/db-files.png)

*db-source.json file*
![File source](./imgs-readme/db-file.png)

The script (cleanup.js) can then be called potentially in your hosting platform via a scheduled task using the same command method as stated above.</p>

<br>
<p><i>
<b>NOTE:</b> After testing the script in Heroku, although the script executes successfully, the db.json does not update to the original values set in the db-source.json file.
<br><br>
However, I do have another tested and working solution I have managed to establish after many hours of research, link below.

[Adding Link soon, just finishing it off!](#)
</i></p>
<br>


---

## Installation 
<p>Open your Code Editor and 'CD' into your working directory, then download the repo to that location, by executing the following command in your terminal.<p>

```sh
git clone https://github.com/rbhachu/JSON-Server-Heroku-HK.git
```

<p>Once the repo has been downloaded, 'CD' to the newly downloaded project folder. Then execute the following command in your terminal.<p>

```sh
npm install
```

<p>Also check for any updates by running the following command too.<p>

```sh
npm update
```
<br>




## Deployment
<p>Finally, to run the JSON server simply execute the following command in your terminal (ensuring you are in the correct project directory too).</p>

```sh
npm start
```

<p>After a few seconds, your browser should automatically open to the following link; 

[http://localhost:8000](http://localhost:8000) and display the following `Success` message in the browser page too.</p>

![Site Preview](./imgs-readme/site-preview.png)
<br><br>

<p>You can also review the test db.json file data by clicking on the following links;<br>

**All Data:** http://localhost:8000/blogs<br>
**Data for ID 1:** http://localhost:8000/blogs/1<br>
**Data for ID 2:** http://localhost:8000/blogs/2
</p>

![Site Preview](./imgs-readme/site-preview2.png)
<br><br>


## Issues
If you encounter issues, please drop me a message via LinkedIn and I will try to help you resolve the issue.
<br><br>


## Author
👤 **Rishi Singh Bhachu**<br>
Contact me via [LinkedIn](https://www.linkedin.com/in/rishisinghbhachu/)
<br><br>


## Show your support
If you liked this project it would be greatly appreciated to show your support by simply giving this repo a ⭐️ rating too, many thanks!