import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Pages from "./pages/index"

function App() {
  const [page, setPage] = React.useState("home");

  let displayedPage;
  switch(page) {
    case "home":
      displayedPage = <Pages.Home/>;
      break;
    case "badges":
      displayedPage = <Pages.Badges/>;
      break;
    case "banners":
      displayedPage = <Pages.Banners/>;
      break;
    case "cards":
      displayedPage = <Pages.Cards />;
      break;
    case "testimonials":
      displayedPage = <Pages.Testimonials />;
      break;
    case "toasts":
        displayedPage = <Pages.Toasts />;
        break;
    case "tooltips":
      displayedPage = <Pages.Tooltips />;
      break;
    default:
      displayedPage = <Pages.Home/>;
      break;
  }
  return (
    <div className="components">
      <Menu>
        <Menu.Button>Component</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item onClick={() => setPage("home")}>Home</Menu.Item>
          <Menu.Item onClick={() => setPage("badges")}>Badges</Menu.Item>
          <Menu.Item onClick={() => setPage("banners")}>Banners</Menu.Item>
          <Menu.Item onClick={() => setPage("cards")}>Cards</Menu.Item>
          <Menu.Item onClick={() => setPage("testimonials")}>Testimonials</Menu.Item>
          <Menu.Item onClick={() => setPage("toasts")}>Toasts</Menu.Item>
          <Menu.Item onClick={() => setPage("tooltips")}>Tooltips</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {displayedPage}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
