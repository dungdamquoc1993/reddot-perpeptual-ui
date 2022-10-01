import { BigNumber } from 'ethers';
import { safeParseUnits } from './numbers';

export const ExternalLinks = {
  twitter: '',
  documentations: '',
  codes: '',
  medium: '',
  telegram: '',
  discord: '',
  buyShare: '',
  buyPeg: '',
  coingecko: '',
};

export const Zero = BigNumber.from(0);

export const Precision = safeParseUnits('1', 6);

export const PricePrecision = safeParseUnits('1', 18);

export const SlippagePrecision = safeParseUnits('1', 6);

export const DefaultThreshold = 0.001;

export const CurrencyThreshold = 0.01;

export const PercentageThreshold = 0.0001;

export const FractionDigits2Threshold = 0.01;
