// Generated by https://quicktype.io

export interface Response {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Contact[];
}

export interface Contact {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}
