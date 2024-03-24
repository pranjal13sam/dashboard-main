import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

const App = () => {
  return (
    <HelmetProvider>
      <div>
        {/* Other components */}
        <PageTitle title="DashBoard" />
        {/* Other components */}
      </div>
    </HelmetProvider>
  );
};

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | Admin
      </title>
    </Helmet>
  );
};

export default App;
