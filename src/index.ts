import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.WinsAndHtmlReport('Man United');

matchReader.load();
summary.buildANdPrintReport(matchReader.matches);
