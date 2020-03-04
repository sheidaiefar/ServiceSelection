export class ServiceTypeModel {
    id: number;
    title: string;
    services: ServiceModel[];
}

export class ServiceModel {
    id: number;
    title: string;
    isChecked: boolean;
    description: string;
    more: string;
}
