module.exports = async (context) => {
   const code = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
      <h1>Hello World Fork! 👋👋👋 2</h1>
</body>
</html>`;
  return context.res.send(code, 200, {
    'content-type': 'text/html'
  });
};
