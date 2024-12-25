export type User=
{
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    //role: 'admin' | 'standard'
    finders: Finder[];
    //createdAt: Date;
    //lastLogin: Date;
    isActive: boolean;
};


export type Guest = 
{
    id: string;
    ip:string;
    sessionToken: string;
    accessHistory:{
        incidentId: string;
        accessedAt: Date;
    }[];
    isBlocked: boolean;
};

export type Finder =
{
    id: string;
    ownerId: string;
    title: string;
    description: string;
    media: {type: 'image' | 'gif',url: string}[];
    location:{
        lat: number;
        lng: number; 
    };
    createAt: Date;
    lastUpdated: Date;

};

export type Incident = 
{
    id: string;
    userId: string;
    finderId: string;
    accessControl:{
        type: 'selected' | 'code' | 'public'; // Access type
        accessCode?: string; // Optional, code for access
        allowedVisitors?: string[]; // Visitor IDs explicitly allowed
        accessSettings: {
            mode: 'one-time' | 'multiple' | 'time-limited'; // Mode of access
            expirationDate?: Date; // Optional, expiration date for time-limited access
            maxUses?: number; // Optional, maximum uses for one-time/multiple access
        };
    }
    accessLog: { 
        visitorId: string; 
        accessedAt: Date;
        modeUsed: string; // Mode used for access
    }[]; // Log of access events for this incident
    createdAt: Date; // Timestamp of when the incident was created
    isActive: boolean; // Flag indicating if this incident is active
};