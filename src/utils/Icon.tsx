interface IconType {
  className: string
}

export const Logo: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 93 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="22" fill="#F4DE4D" />
      <path
        d="M34.4 29.315C38.201 29.315 40.469 26.9 41.141 24.38L38.831 23.624C38.327 25.304 36.899 26.9 34.4 26.9C31.859 26.9 29.465 25.052 29.465 21.566C29.465 17.954 31.922 16.169 34.379 16.169C36.878 16.169 38.264 17.618 38.705 19.424L41.078 18.626C40.406 16.022 38.159 13.796 34.379 13.796C30.515 13.796 26.882 16.715 26.882 21.566C26.882 26.417 30.389 29.315 34.4 29.315Z"
        fill="black"
      />
      <path
        d="M45.945 26.228C45.945 27.845 47.268 29.315 49.41 29.315C51.069 29.315 52.077 28.475 52.56 27.698C52.56 28.517 52.644 28.937 52.665 29H54.933C54.912 28.895 54.807 28.286 54.807 27.362V22.28C54.807 20.243 53.61 18.458 50.46 18.458C47.94 18.458 46.344 20.033 46.155 21.797L48.381 22.301C48.486 21.272 49.2 20.453 50.481 20.453C51.825 20.453 52.413 21.146 52.413 22.007C52.413 22.364 52.245 22.658 51.657 22.742L49.032 23.141C47.289 23.393 45.945 24.401 45.945 26.228ZM49.872 27.404C48.906 27.404 48.381 26.774 48.381 26.081C48.381 25.241 48.99 24.821 49.746 24.695L52.413 24.296V24.758C52.413 26.753 51.237 27.404 49.872 27.404ZM60.1668 32.99V27.845C60.6918 28.622 61.8048 29.252 63.2748 29.252C66.2148 29.252 68.0838 26.942 68.0838 23.876C68.0838 20.852 66.3828 18.542 63.3588 18.542C61.7838 18.542 60.6078 19.277 60.1038 20.159V18.773H57.7518V32.99H60.1668ZM65.6478 23.876C65.6478 25.829 64.5138 27.089 62.8968 27.089C61.3008 27.089 60.1458 25.829 60.1458 23.876C60.1458 21.965 61.3008 20.705 62.8968 20.705C64.5348 20.705 65.6478 21.965 65.6478 23.876ZM72.1266 22.763C72.2106 21.671 73.0926 20.495 74.6256 20.495C76.3056 20.495 77.1036 21.566 77.1456 22.763H72.1266ZM77.4186 25.43C77.0826 26.438 76.3266 27.215 74.8566 27.215C73.3446 27.215 72.1266 26.102 72.0636 24.548H79.5396C79.5606 24.506 79.6026 24.17 79.6026 23.771C79.6026 20.537 77.7546 18.458 74.6046 18.458C72.0216 18.458 69.6276 20.6 69.6276 23.834C69.6276 27.299 72.0846 29.315 74.8566 29.315C77.3136 29.315 78.9306 27.866 79.4766 26.081L77.4186 25.43ZM83.5685 23.855C83.5685 21.902 84.7445 20.663 86.3405 20.663C87.9365 20.663 89.0285 21.881 89.0285 23.834C89.0285 25.787 87.9155 27.11 86.3195 27.11C84.6605 27.11 83.5685 25.808 83.5685 23.855ZM91.3805 13.796H89.0075V19.97C88.6925 19.319 87.7895 18.5 86.0045 18.5C83.1275 18.5 81.1325 20.915 81.1325 23.855C81.1325 26.942 83.1065 29.252 86.0465 29.252C87.4955 29.252 88.5665 28.538 89.0495 27.677C89.0495 28.097 89.1125 28.769 89.1545 29H91.4855C91.4645 28.832 91.3805 28.055 91.3805 27.131V13.796Z"
        fill="black"
      />
      <rect x="69" y="13" width="12" height="3" fill="black" />
    </svg>
  )
}
