export interface Report {
    sections: ReportSection[];
}

export interface ReportSection {
    header: string;
    description: string;
    subsections: ReportSubsection[]
}

export interface ReportSubsection {
    description: string;
    questions: ReportQuestion[];
    orgScore: number;
    industryNorm: number;
    globalNorm: number;
    excludeGlobalNorms: boolean;
    excludeIndustryNorms: boolean;
    scale: number;
    scaleInterval: number;
}

export interface ReportQuestion {
    description: string;
    orgScore: number;
    industryNorm: number;
    globalNorm: number;
}




export interface ReportConfig {
    sections: ReportConfigSection[];
}

export interface ReportConfigSection {
    header: string;
    description: string;
    subsections: ReportConfigSubsection[];
}

export interface ReportConfigSubsection {
    header: string;
    questions: ReportConfigQuestion[];
    scale: number;
    scaleInterval: number;
    excludeGlobalNorms?: boolean;
    excludeIndustryNorms?: boolean;
}

export interface ReportConfigQuestion {
    description: string;
    id: string;
    includeNulls?: boolean;  // normally we ignore nulls; with this, we count them as zero
}

export interface RawDatum {
    [key: string]: any;
}
