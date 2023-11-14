import { privateKeyToAccount } from 'viem/accounts';
import { Hash, createWalletClient, http } from 'viem';
import { useTestsEnvs } from './use-test-envs.js';

export const useWalletClient = () => {
  const { privateKey } = useTestsEnvs();
  const account = privateKeyToAccount(privateKey as Hash);

  return createWalletClient({
    account,
    transport: http('https://1rpc.io/holesky'),
  });
};
