"use client";
import { useQuery } from "@tanstack/react-query";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});
const getBalance = async () => {
  const res = await client.getBalance({
    address: "0x388C818CA8B9251b393131C08a736A67ccB19297",
  });
  return res.toString();
};
function Balance() {
  const { data } = useQuery({
    queryFn: getBalance,
    queryKey: ["balance"],
    refetchInterval: 10 * 1000,
  });
  return <div>Balance: {data}</div>;
}

export default Balance;
