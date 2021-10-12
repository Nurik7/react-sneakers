import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={150}
      height={187}
      viewBox="0 0 150 187"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="150" height="90"/>
      <rect x="0" y="106" rx="10" ry="10" width="150" height="15"/>
      <rect x="0" y="125" rx="10" ry="10" width="93" height="15"/>
      <rect x="0" y="162" rx="10" ry="10" width="80" height="24"/>
      <rect x="118" y="154" rx="10" ry="10" width="32" height="32"/>
    </ContentLoader>
  )
}

export default Loader