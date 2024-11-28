"use client";
import { useAccount, useConnect } from "wagmi";

function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <>
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          className="px-2 py-0.5 bg-white bg-opacity-[10%] mx-2"
        >
          {connector.name}
        </button>
      ))}
      <MyAddress />
    </>
  );
}

function MyAddress() {
  const { address } = useAccount();
  if (!address) return null;
  return <div>{address}</div>;
}

export default WalletOptions;
