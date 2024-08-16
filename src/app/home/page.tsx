"use client"

import {Icons} from "@/components/icons";
import React, {useEffect, useState} from "react";
import ResourceDetails from "@/app/home/components/resource-details";
import AddNewResourceModal from "@/app/home/components/add-new-modal";
import {ResourcesService} from "@/services/resources";

type Props = {};

function formatTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3
  });
}

const Home = ({}: Props) => {
  const [resources, setResources] = useState(new Array());
  const [showModal, setShowModal] = useState(false);
  const [detailResource, setDetailResource] = useState();
  const [showAddModal, setShowAddModal] = useState(false);

  const openModal = (resource: any) => {
    setShowModal(true)
    setDetailResource(resource);
  }

  async function initData() {
    const allResources = await ResourcesService.getAllResources();
    setResources(allResources.data)
  }

  async function deleteResource(id: string) {
    const res = await ResourcesService.deleteResource(id);
    console.log(res)
    await initData()
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div className="flex max-h-full max-w-full justify-center">
      <div className="flex flex-col bg-white w-fit h-fit">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="flex sm:justify-end">
              <button type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => setShowAddModal(true)}
              >
                Create New
              </button>
              <button type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => setShowAddModal(true)}
              >
                Modify latest
              </button>
            </div>
            <div className="overflow-hidden">
              <table
                className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead
                  className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4 text-center">ID</th>
                  <th scope="col" className="px-6 py-4 text-center">Created At</th>
                  <th scope="col" className="px-6 py-4">Total pages</th>
                  <th scope="col" className="px-6 py-4 text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                {resources.map((resource: any, index: any) => (
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{resource.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{formatTimestamp(resource.timestamp)}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">{resource.urls.length}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="text-white font-bold py-2 px-4 rounded" onClick={() => openModal(resource)}>
                        <Icons.view/>
                      </button>
                      <button className="text-white font-bold py-2 px-4 rounded" onClick={() => deleteResource(resource.id)}>
                        <Icons.delete/>
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {showModal ? (
          <ResourceDetails detailResource={detailResource} setShowModal={setShowModal} />
        ) : null}
        {showAddModal ? (
          <AddNewResourceModal setShowAddModal={setShowAddModal} />
        ) : null}
      </div>
    </div>
  );

}

export default Home;
