import { MatchData } from './MatchData';

import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static WinsAndHtmlReport(teamName: string): Summary {
        return new Summary(new WinsAnalysis(teamName), new HtmlReport());
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildANdPrintReport(mathes: MatchData[]): void {
        const output = this.analyzer.run(mathes);
        this.outputTarget.print(output);
    }
}
