> npx create-next-app test\
> yarn dev -p 3001

Single Page\
Under the pages folder create single.js\
to access the single page\
http://localhost:3001/single

Switching Pages\
Under the pages folder create one.js and two.js\
import Link from "next/link";\
add <Link href="/one"><a>One</a></Link>

Styling Pages\
Uder the pages folder create styling.js\
add <style jsx>{``}<style>

Create a common component\
Create a components folder and create Nav.js\
You can't access Nav by\
http://localhost:3001/Nav\
import the Nav in one.js and two.js as what you do in React

Adding head to one.js and two.js\
import Head from 'next/head';\
add <Head><title></title><meta/></Head>\
the <Head> will form part of the header inside the html <head> tag

Restructure the code with the Layout.js component\
Goto components folder and create Layout.js\
Goto pages folder and create restructure.js and use Layout component\
http://localhost:3001/restructure

Extract all the things in common to /pages/\_document.js\
To override the default Document, please refer to\
https://nextjs.org/docs/advanced-features/custom-document\
all common content in each page header, eg. css, meta data should be removed and add to this \_document.js\
you don't need to import this \_document.js to the pages, it will auto apply to all the pages\
after edit \_document.js, you need to run "yarn dev -p 3001" to make it effective

### Static Image
Handling Image\
Create a folder called static/images and add an image file in\
Create a page under pages folder call showimage.js\
you may need to run "yarn dev -p 3001" again\
** REMARK: it should change static to public\
** https://nextjs.org/docs/basic-features/static-file-serving


### CSS
SASS and CSS in Next.js (install both css and sass)\
npm install --save @zeit/next-css\
npm install --save @zeit/next-sass node-sass\
inside the root of the project, create next.config.js\
create static/css and static/scss folders\
add styles.css inside static/css\
add styles.scss inside static/scss\
create style_test.js under pages folder and import the styles.css and styles.scss\
http://localhost:3001/style_test

For global CSS
edit the styles/globals.css directly
and this no need to import in each page


### For Run and Build
Run for development > yarn dev -p <port_name>
For deployment > yarn build
then copy .next folder, public folder and package.json to the server
then run > npm install
then run > yarn start -p <port_name>


### notes on next/link
https://nextjs.org/docs/api-reference/next/link \
The default behavior of Link is to scroll to the top of the page. \
When there is a hash defined it will scroll to the specific id, like a normal <a> tag. \
To prevent scrolling to the top / hash scroll={false} can be added to Link \
add id={pid} to the a tag \
then in the URL type "http://localhost:3009/basic#67" (#pid) to scroll back
  
                                                                                 
                                                                                 
