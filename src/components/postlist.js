import styled from 'styled-components';
import Post from './post';
import postlist from "../posts.json";

const Center = styled.div`
	text-align: center;

	.buttonup {
	    width: auto;
	    color: white;
	    background-color: ${props => props.theme.purple};
	    border: 0;
	    border-radius: ${props => props.theme.roundedCorner} !important;
	    font-size: 1rem;
	    padding: 0.9rem 1.2rem;
  	}
`;

const ItemsList = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-gap: 60px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	@media (max-width: 830px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0%;
		a {
    		font-size: 1.2rem;
		}
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;
	}
`;

export default function PostList () {
    const excerptList = postlist.map(post => {
		console.log(post.content)
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })

	console.log(excerptList[0])
    
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    return (
        <Center>
            <ItemsList>
                {postlist?.map((post, i) => (
                    <Post key={post.id} post={post} excerptList={excerptList[i]} />
                ))}
            </ItemsList>
        </Center>
    );
}