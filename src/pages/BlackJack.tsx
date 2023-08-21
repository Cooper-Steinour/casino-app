import BlackJackTable from "../components/blackjack/BlackJackTable";
import Header from "../components/header/Header";

const BlackJack = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <BlackJackTable />
    </div>
  );
};

export default BlackJack;
