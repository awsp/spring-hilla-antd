package com.example.springhillavaadin.data;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Version;
import lombok.Getter;
import lombok.Setter;
import nonapi.io.github.classgraph.json.Id;

@MappedSuperclass
public abstract class AbstractEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_generator")
  @SequenceGenerator(name = "id_generator", initialValue = 1000)
  @Getter
  @Setter
  private Long id;

  @Version
  @Getter
  private int version;

  @Override
  public int hashCode() {
    if (id != null) {
      return id.hashCode();
    }
    return super.hashCode();
  }

  @Override
  public boolean equals(Object obj) {
    if (!(obj instanceof AbstractEntity that)) {
      return false;
    }
    if (getId() != null) {
      return getId().equals(that.getId());
    }
    return super.equals(that);
  }
}
