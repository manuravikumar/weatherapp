variable "resource_group_name" {
  description = "Name of the Resource Group"
  default     = "rg-weather-dashboard"
}

variable "location" {
  description = "Azure Region"
  default     = "Australia East"
}

variable "aks_cluster_name" {
  description = "AKS Cluster Name"
  default     = "aks-weather-dashboard"
}
