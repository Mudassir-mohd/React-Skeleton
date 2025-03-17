import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2 animate-pulse"></div>
    <div className="h-24 bg-gray-300 rounded w-full animate-pulse"></div>
  </div>
  )
}

export default SkeletonLoader