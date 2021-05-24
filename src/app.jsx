import { useState } from 'preact/hooks'
import { Suspense } from 'preact/compat'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import LoadingPage from './LoadingPage'
// import CustomImage from './custom-image.png'
import CustomImage from './custom-image.webp'
// import ConvertImage from './components/ConvertImage'
// import ConvertImage from 'react-convert-image'

// import { Card, Alert, Typography, Button } from 'antd'
// import { Button } from 'antd'
// import Button from 'antd/es/button'
// import 'antd/es/button/style'

import styles from './index.module.less'
// import { Logo } from './logo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // button: {
  //   color: theme.palette.primary.contrastText,
  //   margin: theme.spacing(1)
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
}))

// const CodePreview = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// )
const handleConvertedImage = (url) => {
  // console.log(url);
}

function App() {
  // const [count, setCount] = useState(0)
  const classes = useStyles();

  return (
    <Suspense fallback={<LoadingPage />}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={6}>
          <Card className={classes.card}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={CustomImage}
                title="Contemplative Reptile"
              /> */}
              <img
                src={CustomImage}
                width="100%"
                height="240"
                alt="Contemplative Reptile"
                srcset={CustomImage}
                classes="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img"
                style={{
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
              {/* <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://images.unsplash.com/photo-1618826984804-232bdb22ad2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=371&q=80"
                title="Contemplative Reptile"
              /> */}
              {/* <ConvertImage
                classes="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img"
                image={CustomImage}
                onConversion={(url) => handleConvertedImage(url)}
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                 </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/* <Logo /> */}
          <p>Hello Vite + Preact!</p>
          <p>
            <a
              class="link"
              href="https://preactjs.com/"
              rel="noopener noreferrer"
            >
              Learn Preact
          </a>
          </p>
          {/* 
          <ConvertImage
            classes="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img"
            image={CustomImage}
            onConversion={(url) => handleConvertedImage(url)}
          /> */}


          {/* <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button> */}

          {/* <Button
            variant="outlined"
            color="primary"
            // className={classes.button}
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button> */}
        </Box>
      </Container>
      {/* <PageContainer> */}
      {/* <Card>
            <Alert
              message={'更快更强的重型组件，已经发布。'}
              type='success'
              showIcon
              banner
              style={{
                margin: -12,
                marginBottom: 24,
              }}
            />
            <Typography.Text strong>
              高级表格
            <a
                href='https://procomponents.ant.design/components/table'
                rel='noopener noreferrer'
                target='__blank'
              >
                欢迎使用
            </a>
            </Typography.Text>
            <CodePreview>yarn add @ant-design/pro-table</CodePreview>
            <Typography.Text
              strong
              style={{
                marginBottom: 12,
              }}
            >
              高级布局
            <a
                href='https://procomponents.ant.design/components/layout'
                rel='noopener noreferrer'
                target='__blank'
              >
                欢迎使用
            </a>
            </Typography.Text>
            <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
            <Button onClick={() => console.log('click login')}>Go to login</Button>
          </Card>
         */}
      {/* </PageContainer> */}
    </Suspense>
  )
}

export default App