// 아토믹 디자인
export const molecule = {
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  }
}

export const organism = {
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  }
}

// 분자간 공통 요소

export const withContentHeader = {
  props: {
    headerTitle: {
      type: String,
      default: ''
    },
    headerSubTitle: {
      type: String,
      default: ''
    },
    headerButtonText: {
      type: String,
      default: ''
    }
  }
}