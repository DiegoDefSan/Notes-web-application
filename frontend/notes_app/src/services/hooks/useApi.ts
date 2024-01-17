import { useAxios } from "./useAxios"

export const useApi = <T>(endpoint: string) => {
  const axiosInstance = useAxios();

  const getObjects = () => {
    return axiosInstance
      .get<T[]>(endpoint)
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  const postObject = (object: T) => {
    return axiosInstance
      .post<T>(endpoint, object)
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  const putObject = (object: T) => {
    return axiosInstance
      .put<T>(endpoint, object)
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  const deleteObjectById = (idToDelete: number) => {
    return axiosInstance
      .delete(endpoint, { data: { id: idToDelete } })
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  return { getObjects, postObject, putObject, deleteObjectById }
}