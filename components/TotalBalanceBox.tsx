import AnimatedCounter from "./ui/AnimatedCounter";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
          <div className="total-balance-chart">
              {/* Doughnut Chart*/}
          </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Account: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <p className="total-balance-amount flex-centre gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
