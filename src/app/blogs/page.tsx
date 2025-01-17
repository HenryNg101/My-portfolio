// import axios from "axios";
import { Button, Grid, Paper, Skeleton, Typography } from '@mui/material';
import Head from 'next/head';

const cardStyle = {borderRadius: '20px', p: 3, my: 2, mx: 'auto', width: 'calc(100% * 7 / 8)'}

function Blog(){
    // TODO: Deal with API request in here later
    // const {data: posts, isLoading, isError} = useQuery({
	// 	queryKey: ['postData'],
	// 	queryFn: () => axios.get(`${API_BASE_URL}/api/posts`).then(res => res.data)
	// });

	// if(posts && posts.length > 0){
	//     console.log(posts)
	// }

	const blog_tags = Array(5).fill(
		<Grid item>
			<Skeleton sx={{my: 1}}>
				<Button>lorem ipsum</Button>
			</Skeleton>
		</Grid>
	);

	const skeleton_blogs = Array(5).fill(
		<Paper elevation={10} sx={cardStyle}>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<Skeleton><img src={'/assets/images/white_h_letter.png'} alt={'VAIT Icon'} width={150}/></Skeleton>
				</Grid>

				<Grid item xs={10}>
					<Skeleton><Typography component="h6" variant='h5' sx={{fontWeight: 'bold'}}>Lorem ipsum dolor sit amet</Typography></Skeleton>
					<Grid container spacing={1}>{blog_tags}</Grid>
					<Skeleton><Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography></Skeleton>
				</Grid>
			</Grid>
		</Paper>
	);
	return (
		<>
			<Head>
				<title>Henry Nguyen | Projects</title>
			</Head>
			{skeleton_blogs}
		</>
	);
}

export default Blog;