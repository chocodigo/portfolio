import { NextPageContext } from "next";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div>
      <h1>{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
      <p>
        {statusCode === 404
          ? "페이지를 찾을 수 없습니다."
          : "서버에 문제가 발생했습니다."}
      </p>
    </div>
  );
}

// TypeScript로 getInitialProps 정의
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default Error;
