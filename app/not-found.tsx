import React from 'react'
import { ErrorEmpty } from './(route)/errors/_components/error-empty'
import { SearchX } from 'lucide-react'

const NotFoundPage = () => {
	return (
	   <ErrorEmpty
      code="404"
      title="Page not found"
      description="The page you are looking for does not exist or may have been moved."
      icon={SearchX}
    />
	)
}

export default NotFoundPage