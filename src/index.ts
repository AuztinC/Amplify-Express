// src/index.ts
import express from 'express';
import axios from 'axios'

const app: express.Application = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// Homepage
app.get('/', async (req: express.Request, res: express.Response) => {
  
  const headers = { headers: {"X-Auth-Token": '2hR8gY9yPmEC0PkB8ScnE19EdvcEannf4xWK'} }

  // returns array of objects
  const response = await axios.get('https://ssav.flexrentalsolutions.com/f5/api/scan-log/scan-history?page=0&size=20&sort=scanDate%2Cdesc', headers)
  
  res.status(200).send(response.data.content) 
});

// GET
app.get('/get', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-get-header", "get-header-value").sendFile("public");
});

//POST
app.post('/post', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-post-header", "post-header-value").send(req.body.toString());
});

//PUT
app.put('/put', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-put-header", "put-header-value").send(req.body.toString());
});

//PATCH
app.patch('/patch', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-patch-header", "patch-header-value").send(req.body.toString());
});

// Delete
app.delete('/delete', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-delete-header", "delete-header-value").send();
});
