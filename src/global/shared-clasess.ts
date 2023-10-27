
export class Genre {
    ID:            number;
    Name:          string;
}

export class Director{
    Id:            number;
    FullName:      string
}

export class Movies{
    ID:            number;
    Title:         string;
    ImagePath:     string;
    ReleaseYear:   Date;
    GenreId:       number;
    DirectorId:    number;
    Genre:         string;
    Director:      string;
}

export class Actor{
    ID:            number;
    FullName:      string;
    Gender:        string;
}

export class MovieActors{
    Id:            number;
    IsMain:        boolean;
    MovieId:       number;
    ActorId:       number; 
    Movie:         string;
    Actor:         string;
}
