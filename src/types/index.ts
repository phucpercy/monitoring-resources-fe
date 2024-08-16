export type ResourceDetail = {
  url: string;
  name: string
  metrics: any[];
}

export type ResourcesResponse = {
  id: string;
  timestamp: string;
  urls: ResourceDetail[];
}
