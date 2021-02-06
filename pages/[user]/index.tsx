import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { useRouter } from "next/dist/client/router";
import { User, UserProps } from "../../@types";
import api from "../../service/api";
import ErrorPage from 'next/error';

import { Container, TicketContainer, ContentContainer } from "../../styles/pages/user";

const UserInvitation: React.FC<UserProps> = ({ user }) => {
  const router = useRouter();

  if(router.isFallback) {
    return <h1 style={{ color: '#FFF' }}>Carregando...</h1>
  } else {
    if(!user.name) {
      return (
        <ErrorPage statusCode={404} />
      );
    }
    return (
      <Container>
        <TicketContainer>
          <div className="ticket-content-wrapper">
            <img src="/logo-dl.png" className="logo-dl" alt="Logo dldreams"/>
            <ContentContainer>
              <h1 className="content-title">Ticket dldreams de { user.name }</h1>

              <p className="content-description">Este ticket é estático e atualiza automaticamente caso haja alteração na API</p>
            
              <p className="content-date">Criado em: { user.date }</p>
            </ContentContainer>
          </div>
        </TicketContainer>
      </Container>
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