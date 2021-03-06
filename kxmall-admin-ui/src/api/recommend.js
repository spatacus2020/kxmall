import request from '@/utils/request'
import Qs from 'qs'

export function listRecommend(query) {
  return request({
    method: 'get',
    params: {
      _gp: 'admin.recommend',
      _mt: 'queryRecommendByType',
      ...query
    }
  })
}

export function getRecommendTypeEnums() {
  return request({
    method: 'get',
    params: {
      _gp: 'admin.recommend',
      _mt: 'getRecommendTypeEnums'
    }
  })
}

export function createRecommend(data) {
  return request({
    method: 'post',
    data: Qs.stringify({
      _gp: 'admin.recommend',
      _mt: 'addRecommend',
      ...data
    })
  })
}

export function createRecommendBatch(data) {
  debugger
  return request({
    method: 'post',
    data: Qs.stringify({
      _gp: 'admin.recommend',
      _mt: 'addRecommendBatch',
      idsJson: JSON.stringify(data.spuIds),
      recommendType: data.recommendType
    })
  })
}

export function updateRecommend(data) {
  return request({
    method: 'post',
    data: Qs.stringify({
      _gp: 'admin.advertisement',
      _mt: 'addAdvertisement',
      ...data
    })
  })
}

export function deleteRecommend(id, recommendType) {
  return request({
    method: 'post',
    data: Qs.stringify({
      _gp: 'admin.recommend',
      _mt: 'deleteRecommend',
      id: id,
      recommendType: recommendType
    })
  })
}
