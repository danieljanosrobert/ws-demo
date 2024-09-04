export interface GreetingsResponseDto {
    message: string;
    time: string;
    name: string;
}

export interface GreetingsResponse {
    message: string;
    time: Date;
    today?: boolean;
    name: string;
}