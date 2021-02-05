import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { useRouter } from "next/dist/client/router";
import { User, UserProps } from "../../@types";
import api from "../../service/api";
import ErrorPage from 'next/error';

const UserInvitation: React.FC<UserProps> = (props) => {
  const router = useRouter();

  if(router.isFallback) {
    return <h1 style={{ color: '#FFF' }}>Carregando...</h1>
  } else {
    if(!props.user.name) {
      return (
        <ErrorPage statusCode={404} />
      );
    }
    return (
      <div style={{ color: '#FFF' }}>
        <h1>{props.user.name}</h1>
        <h2>{props.user.username}</h2>
        <p>{props.user.date}</p>
      </div>
    );
  }
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  try {
    var { data } = await api.get<User[]>('/users');
  } catch(error) {
    console.log(error);
  }
  
  const paths = data.map(({ username }) => `/${username}`);
  
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext): Promise<GetStaticPropsResult<UserProps>> {
  // @ts-ignore
  const username = params.user;

  let data = {} as User;

  try {
    const response = await api.get<User[]>(`/users?username=${username}`);

    data = response.data[0];
  } catch(error) {
    throw new Error('Not Found');
  }
  
  return {
    props: {
      user: {
        ...data,
      },
    },
    revalidate: 1,
  }
} 

export default UserInvitation;