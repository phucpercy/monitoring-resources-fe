import {axiosInstance} from "@/lib/axiosInstance";
import {ResourcesResponse} from "@/types";

const getAllResources = (): Promise<{ data: ResourcesResponse[] }> => axiosInstance.get(`/resources`)

const deleteResource = (id: string): Promise<{res: any}> => axiosInstance.delete(`/resources/${id}`)

export const ResourcesService = {
  getAllResources,
  deleteResource
}
