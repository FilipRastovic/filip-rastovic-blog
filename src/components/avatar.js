/**
 * Avatar component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
  const { author } = useStaticQuery(graphql`
    query AvatarQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        avatar {
          url
        }
      }
    }
  `)

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio">
      {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          className="bio-avatar"
          src={avatarUrl}
        />
      )}
    </div>
  )
}

export default Avatar
